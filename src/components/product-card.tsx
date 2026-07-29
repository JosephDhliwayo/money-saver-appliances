import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";
import { getCategoryGradient } from "@/lib/category-style";

export function ProductCard({ product }: { product: Product }) {
  const onSale = product.salePrice !== undefined;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-teal-700 hover:shadow-lg"
    >
      <div
        className={`relative aspect-square bg-gradient-to-br ${getCategoryGradient(product.category)}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-110"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        />
        {onSale && (
          <span className="absolute left-3 top-3 animate-pulse rounded-full bg-teal-700 px-2 py-1 text-xs font-semibold text-white">
            Sale
          </span>
        )}
        {!product.inStock && (
          <span className="absolute right-3 top-3 rounded-full bg-slate-700 px-2 py-1 text-xs font-semibold text-white">
            Out of stock
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {product.brand}
        </p>
        <h3 className="text-sm font-semibold text-slate-900 group-hover:text-teal-700">
          {product.name}
        </h3>
        <div className="mt-auto flex flex-wrap items-baseline gap-x-2 gap-y-0.5 pt-2">
          <span className="text-base font-bold text-slate-900">
            {formatPrice(product.salePrice ?? product.price)}
          </span>
          {onSale && (
            <span className="text-sm text-slate-400 line-through">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
