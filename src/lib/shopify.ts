import "server-only";
import type { Category, Product } from "@/lib/products";
import { categories as knownCategories } from "@/lib/products";

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
        price { amount }
        compareAtPrice { amount }
      }
    }
  }
`;

async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>
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
    next: { revalidate: 60 },
  });

  const json = await res.json();
  if (json.errors) {
    console.error("Shopify API error:", JSON.stringify(json.errors));
  }
  return json.data as T;
}

function matchCategory(productType: string): Category {
  const normalized = productType?.trim().toLowerCase();
  const match = knownCategories.find((c) => c.toLowerCase() === normalized);
  return match ?? "Other";
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
    slug: node.handle,
    name: node.title,
    brand: node.vendor || "Unbranded",
    category: matchCategory(node.productType),
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
  category?: Category
): Promise<Product[]> {
  const all = await getAllProducts();
  if (!category) return all;
  return all.filter((p) => p.category === category);
}
