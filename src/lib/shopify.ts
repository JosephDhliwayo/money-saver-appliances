import "server-only";
import type { Category, Product } from "@/lib/products";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const API_VERSION = "2025-10";

type ShopifyMoney = { amount: string };

type ShopifyImageEdge = { node: { url: string; altText: string | null } };

type ShopifyProductNode = {
  id: string;
  title: string;
  handle: string;
  description: string;
  vendor: string;
  productType: string;
  availableForSale: boolean;
  featuredImage: { url: string; altText: string | null } | null;
  images: { edges: ShopifyImageEdge[] };
  variants: {
    edges: {
      node: {
        id: string;
        price: ShopifyMoney;
        compareAtPrice: ShopifyMoney | null;
      };
    }[];
  };
};

const PRODUCT_FIELDS = `
  id
  title
  handle
  description
  vendor
  productType
  availableForSale
  featuredImage { url altText }
  images(first: 8) { edges { node { url altText } } }
  variants(first: 1) {
    edges {
      node {
        id
        price { amount }
        compareAtPrice { amount }
      }
    }
  }
`;

export type CartLineItem = {
  id: string;
  variantId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export type CartData = {
  id: string;
  checkoutUrl: string;
  lines: CartLineItem[];
  subtotal: number;
};

type ShopifyCartNode = {
  id: string;
  checkoutUrl: string;
  cost: { subtotalAmount: ShopifyMoney };
  lines: {
    edges: {
      node: {
        id: string;
        quantity: number;
        merchandise: {
          id: string;
          price: ShopifyMoney;
          image: { url: string } | null;
          product: { title: string; handle: string };
        };
      };
    }[];
  };
};

const CART_FIELDS = `
  id
  checkoutUrl
  cost {
    subtotalAmount { amount }
  }
  lines(first: 100) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            price { amount }
            image { url }
            product { title handle }
          }
        }
      }
    }
  }
`;

async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
  options: { cache?: boolean } = { cache: true }
): Promise<T | undefined> {
  if (!domain || !token) {
    console.error(
      "Shopify not configured: missing SHOPIFY_STORE_DOMAIN or SHOPIFY_STOREFRONT_ACCESS_TOKEN"
    );
    return undefined;
  }

  const res = await fetch(`https://${domain}/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    ...(options.cache
      ? { next: { revalidate: 60 } }
      : { cache: "no-store" as const }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error("Shopify API error:", JSON.stringify(json.errors));
  }
  return json.data as T;
}

function resolveCategory(productType: string): Category {
  const trimmed = productType?.trim();
  return trimmed ? trimmed : "Other";
}

function mapProduct(node: ShopifyProductNode): Product {
  const variant = node.variants.edges[0]?.node;
  const rawPrice = variant ? parseFloat(variant.price.amount) : 0;
  const compareAt = variant?.compareAtPrice
    ? parseFloat(variant.compareAtPrice.amount)
    : null;
  const onSale = compareAt !== null && compareAt > rawPrice;

  const images = node.images.edges.map((e) => e.node.url);
  const image = node.featuredImage?.url ?? images[0] ?? "/products/refrigerator.svg";

  return {
    id: node.id,
    variantId: variant?.id ?? "",
    slug: node.handle,
    name: node.title,
    brand: node.vendor || "Unbranded",
    category: resolveCategory(node.productType),
    price: onSale ? (compareAt as number) : rawPrice,
    salePrice: onSale ? rawPrice : undefined,
    image,
    images: images.length > 0 ? images : undefined,
    rating: 0,
    reviewCount: 0,
    inStock: node.availableForSale,
    description: node.description ?? "",
    features: [],
    specs: node.vendor ? { Brand: node.vendor } : {},
  };
}

export async function getAllProducts(): Promise<Product[]> {
  const data = await shopifyFetch<{
    products: { edges: { node: ShopifyProductNode }[] };
  }>(`{ products(first: 100) { edges { node { ${PRODUCT_FIELDS} } } } }`);

  if (!data) return [];
  return data.products.edges.map((e) => mapProduct(e.node));
}

export async function getProductByHandle(
  handle: string
): Promise<Product | undefined> {
  const data = await shopifyFetch<{ productByHandle: ShopifyProductNode | null }>(
    `query ($handle: String!) {
      productByHandle(handle: $handle) { ${PRODUCT_FIELDS} }
    }`,
    { handle }
  );

  if (!data?.productByHandle) return undefined;
  return mapProduct(data.productByHandle);
}

export async function getProductsByCategory(
  category?: Category,
  query?: string
): Promise<Product[]> {
  const all = await getAllProducts();
  let results = all;

  if (category) {
    results = results.filter((p) => p.category === category);
  }

  const q = query?.trim().toLowerCase();
  if (q) {
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  return results;
}

export async function getCategories(): Promise<Category[]> {
  const all = await getAllProducts();
  const set = new Set(all.map((p) => p.category));
  const named = Array.from(set)
    .filter((c) => c !== "Other")
    .sort((a, b) => a.localeCompare(b));
  if (set.has("Other")) named.push("Other");
  return named;
}

function mapCart(node: ShopifyCartNode): CartData {
  return {
    id: node.id,
    checkoutUrl: node.checkoutUrl,
    subtotal: parseFloat(node.cost.subtotalAmount.amount),
    lines: node.lines.edges.map((e) => ({
      id: e.node.id,
      variantId: e.node.merchandise.id,
      slug: e.node.merchandise.product.handle,
      name: e.node.merchandise.product.title,
      image: e.node.merchandise.image?.url ?? "/products/refrigerator.svg",
      price: parseFloat(e.node.merchandise.price.amount),
      quantity: e.node.quantity,
    })),
  };
}

export async function getCart(cartId: string): Promise<CartData | undefined> {
  const data = await shopifyFetch<{ cart: ShopifyCartNode | null }>(
    `query ($cartId: ID!) { cart(id: $cartId) { ${CART_FIELDS} } }`,
    { cartId },
    { cache: false }
  );
  return data?.cart ? mapCart(data.cart) : undefined;
}

export async function createCart(
  merchandiseId: string,
  quantity: number
): Promise<CartData | undefined> {
  const data = await shopifyFetch<{
    cartCreate: { cart: ShopifyCartNode | null; userErrors: { message: string }[] };
  }>(
    `mutation ($lines: [CartLineInput!]!) {
      cartCreate(input: { lines: $lines }) {
        cart { ${CART_FIELDS} }
        userErrors { message }
      }
    }`,
    { lines: [{ merchandiseId, quantity }] },
    { cache: false }
  );
  if (data?.cartCreate.userErrors.length) {
    console.error("cartCreate error:", JSON.stringify(data.cartCreate.userErrors));
  }
  return data?.cartCreate.cart ? mapCart(data.cartCreate.cart) : undefined;
}

export async function addCartLines(
  cartId: string,
  merchandiseId: string,
  quantity: number
): Promise<CartData | undefined> {
  // cartLinesAdd does not merge quantities into an existing line for the
  // same merchandise, it silently no-ops. Check for an existing line first
  // and increment it instead.
  const current = await getCart(cartId);
  const existingLine = current?.lines.find((l) => l.variantId === merchandiseId);
  if (existingLine) {
    return updateCartLine(cartId, existingLine.id, existingLine.quantity + quantity);
  }

  const data = await shopifyFetch<{
    cartLinesAdd: { cart: ShopifyCartNode | null; userErrors: { message: string }[] };
  }>(
    `mutation ($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart { ${CART_FIELDS} }
        userErrors { message }
      }
    }`,
    { cartId, lines: [{ merchandiseId, quantity }] },
    { cache: false }
  );
  if (data?.cartLinesAdd.userErrors.length) {
    console.error("cartLinesAdd error:", JSON.stringify(data.cartLinesAdd.userErrors));
  }
  return data?.cartLinesAdd.cart ? mapCart(data.cartLinesAdd.cart) : undefined;
}

export async function updateCartLine(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<CartData | undefined> {
  const data = await shopifyFetch<{
    cartLinesUpdate: { cart: ShopifyCartNode | null; userErrors: { message: string }[] };
  }>(
    `mutation ($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart { ${CART_FIELDS} }
        userErrors { message }
      }
    }`,
    { cartId, lines: [{ id: lineId, quantity }] },
    { cache: false }
  );
  if (data?.cartLinesUpdate.userErrors.length) {
    console.error("cartLinesUpdate error:", JSON.stringify(data.cartLinesUpdate.userErrors));
  }
  return data?.cartLinesUpdate.cart ? mapCart(data.cartLinesUpdate.cart) : undefined;
}

export async function removeCartLines(
  cartId: string,
  lineIds: string[]
): Promise<CartData | undefined> {
  const data = await shopifyFetch<{
    cartLinesRemove: { cart: ShopifyCartNode | null; userErrors: { message: string }[] };
  }>(
    `mutation ($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart { ${CART_FIELDS} }
        userErrors { message }
      }
    }`,
    { cartId, lineIds },
    { cache: false }
  );
  if (data?.cartLinesRemove.userErrors.length) {
    console.error("cartLinesRemove error:", JSON.stringify(data.cartLinesRemove.userErrors));
  }
  return data?.cartLinesRemove.cart ? mapCart(data.cartLinesRemove.cart) : undefined;
}
