"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "@/context/cart-context";
import { formatPrice, getProductBySlug } from "@/lib/products";
import { business } from "@/lib/business";

export default function CartPage() {
  const { items, removeItem, setQuantity, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6"
      >
        <h1 className="text-2xl font-bold text-slate-900">Your cart is empty</h1>
        <p className="mt-2 text-slate-500">
          Browse our appliances and add something you like.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block rounded-md bg-teal-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
        >
          Shop appliances
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Your Cart</h1>
      <p className="mt-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
        &#128666; {business.deliveryTagline}
      </p>

      <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
        <AnimatePresence initial={false} mode="popLayout">
        {items.map((item) => {
          const product = getProductBySlug(item.slug);
          if (!product) return null;
          const price = product.salePrice ?? product.price;

          return (
            <motion.div
              key={item.slug}
              layout
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -40, transition: { duration: 0.2 } }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-3 py-5 sm:gap-4"
            >
              <Link
                href={`/products/${product.slug}`}
                className="relative h-16 w-16 flex-shrink-0 rounded-md bg-slate-50 sm:h-24 sm:w-24"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-1.5 sm:p-2"
                  sizes="96px"
                />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div className="flex flex-wrap justify-between gap-x-2 gap-y-0.5">
                  <div className="min-w-0">
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-sm font-semibold text-slate-900 hover:text-teal-700"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-slate-500">{product.brand}</p>
                  </div>
                  <p className="flex-shrink-0 whitespace-nowrap text-sm font-semibold text-slate-900">
                    {formatPrice(price * item.quantity)}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center rounded-md border border-slate-300">
                    <button
                      type="button"
                      className="px-2.5 py-1 text-slate-600 hover:text-teal-700"
                      onClick={() => setQuantity(item.slug, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      &minus;
                    </button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="px-2.5 py-1 text-slate-600 hover:text-teal-700"
                      onClick={() => setQuantity(item.slug, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="text-xs font-medium text-slate-500 hover:text-red-600"
                    onClick={() => removeItem(item.slug)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-col items-end gap-2">
        <div className="flex w-full max-w-xs justify-between text-sm text-slate-600 sm:w-64">
          <span>Subtotal</span>
          <span className="font-semibold text-slate-900">
            {formatPrice(subtotal)}
          </span>
        </div>
        <p className="w-full max-w-xs text-right text-xs text-slate-400 sm:w-64">
          Shipping and taxes calculated at checkout.
        </p>
        <Link
          href="/checkout"
          className="mt-2 w-full max-w-xs rounded-md bg-teal-700 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-teal-800 sm:w-64"
        >
          Proceed to checkout
        </Link>
      </div>
    </div>
  );
}
