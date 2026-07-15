import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartControls } from "@/components/add-to-cart-controls";
import { formatPrice } from "@/lib/products";
import { getAllProducts, getProductByHandle } from "@/lib/shopify";
import { categoryGradient } from "@/lib/category-style";
import { Reveal } from "@/components/reveal";
import { ProductGallery } from "@/components/product-gallery";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductByHandle(slug);
  return {
    title: product ? `${product.name} | Money Saver Appliances` : "Product",
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductByHandle(slug);

  if (!product) notFound();

  const onSale = product.salePrice !== undefined;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav className="text-sm text-slate-500">
        <Link href="/products" className="hover:text-teal-700">
          All products
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/products?category=${encodeURIComponent(product.category)}`}
          className="hover:text-teal-700"
        >
          {product.category}
        </Link>
      </nav>

      <div className="mt-6 grid min-w-0 gap-10 md:grid-cols-2">
        <Reveal className="min-w-0">
          <ProductGallery
            images={product.images ?? [product.image]}
            alt={product.name}
            gradientClass={categoryGradient[product.category]}
          />
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {product.brand}
          </p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            {product.name}
          </h1>

          {product.reviewCount > 0 && (
            <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
              <span aria-hidden>{"★".repeat(Math.round(product.rating))}</span>
              <span>
                {product.rating.toFixed(1)} ({product.reviewCount} reviews)
              </span>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-3xl font-bold text-slate-900">
              {formatPrice(product.salePrice ?? product.price)}
            </span>
            {onSale && (
              <span className="text-lg text-slate-400 line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          <p className="mt-4 text-slate-600">{product.description}</p>

          {product.features.length > 0 && (
            <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-slate-600">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}

          <div className="mt-6">
            <AddToCartControls slug={product.slug} inStock={product.inStock} />
          </div>

          {Object.keys(product.specs).length > 0 && (
            <div className="mt-8 border-t border-slate-200 pt-6">
              <h2 className="text-sm font-semibold text-slate-900">
                Specifications
              </h2>
              <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-slate-100 py-1.5 text-sm">
                    <dt className="text-slate-500">{key}</dt>
                    <dd className="font-medium text-slate-800">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </Reveal>
      </div>
    </div>
  );
}
