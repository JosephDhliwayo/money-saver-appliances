"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { formatPrice, type Product } from "@/lib/products";
import { getCategoryGradient } from "@/lib/category-style";
import { useCart } from "@/context/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const onSale = product.salePrice !== undefined;

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-cream-300 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-brand-700 hover:shadow-lg">
      <Link href={`/products/${product.slug}`} className="block">
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
            <span className="absolute left-3 top-3 animate-pulse rounded-full bg-brand-700 px-2 py-1 text-xs font-semibold text-white">
              Sale
            </span>
          )}
          {!product.inStock && (
            <span className="absolute right-3 top-3 rounded-full bg-slate-700 px-2 py-1 text-xs font-semibold text-white">
              Out of stock
            </span>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {product.brand}
        </p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-sm font-semibold text-brand-900 group-hover:text-brand-700">
            {product.name}
          </h3>
        </Link>
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

        <motion.button
          type="button"
          disabled={!product.inStock}
          whileTap={product.inStock ? { scale: 0.96 } : undefined}
          onClick={async (e) => {
            e.preventDefault();
            await addItem(product.variantId, 1);
            setAdded(true);
            setTimeout(() => setAdded(false), 1500);
          }}
          className="mt-3 flex items-center justify-center gap-1.5 rounded-md bg-brand-700 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:bg-slate-300 sm:text-sm"
        >
          <AnimatePresence mode="wait" initial={false}>
            {!product.inStock ? (
              <motion.span key="out">Out of stock</motion.span>
            ) : added ? (
              <motion.span
                key="added"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
              >
                Added!
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-1.5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M4 6h2l1.6 9.6a2 2 0 0 0 2 1.7h7.6a2 2 0 0 0 2-1.6L20.4 9H7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="10" cy="20" r="1.3" fill="currentColor" />
                  <circle cx="17" cy="20" r="1.3" fill="currentColor" />
                </svg>
                Add to cart
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
