"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/products";

export default function CheckoutPage() {
  const { items, subtotal, clearCart, getProduct } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const shipping = items.length > 0 ? 49 : 0;
  const tax = Math.round(subtotal * 0.07 * 100) / 100;
  const total = subtotal + shipping + tax;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOrderNumber(`MSA-${Math.floor(100000 + Math.random() * 900000)}`);
    setOrderPlaced(true);
    clearCart();
  }

  if (orderPlaced) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100"
        >
          <motion.svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <motion.path
              d="M4 12l5 5L20 6"
              stroke="#0f766e"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            />
          </motion.svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-6 text-2xl font-bold text-slate-900"
        >
          Thanks for your order!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="mt-2 text-slate-600"
        >
          Order <span className="font-semibold">{orderNumber}</span>{" "}
          has been received. This is a demo checkout, so no payment was
          actually processed.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <Link
            href="/products"
            className="mt-6 inline-block rounded-md bg-teal-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Continue shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-slate-900">
          Your cart is empty
        </h1>
        <p className="mt-2 text-slate-500">
          Add a product before checking out.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block rounded-md bg-teal-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
        >
          Shop appliances
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Checkout</h1>
      <p className="mt-1 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-3 py-2 inline-block">
        Demo checkout. No real payment is processed.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-10 md:grid-cols-3"
      >
        <div className="space-y-6 md:col-span-2">
          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-slate-900">
              Shipping information
            </legend>
            <div className="grid grid-cols-2 gap-3">
              <input
                required
                placeholder="First name"
                className="col-span-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
              <input
                required
                placeholder="Last name"
                className="col-span-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
            <input
              required
              type="email"
              placeholder="Email address"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              required
              placeholder="Street address"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <div className="grid grid-cols-3 gap-3">
              <input
                required
                placeholder="City"
                className="col-span-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
              <input
                required
                placeholder="State"
                className="col-span-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
              <input
                required
                placeholder="ZIP code"
                className="col-span-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-slate-900">
              Payment details
            </legend>
            <input
              required
              placeholder="Card number"
              inputMode="numeric"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                required
                placeholder="MM / YY"
                className="col-span-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
              <input
                required
                placeholder="CVC"
                inputMode="numeric"
                className="col-span-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
          </fieldset>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-md bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Place order ({formatPrice(total)})
          </motion.button>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 md:col-span-1">
          <h2 className="text-sm font-semibold text-slate-900">
            Order summary
          </h2>
          <ul className="mt-4 space-y-3">
            {items.map((item) => {
              const product = getProduct(item.slug);
              if (!product) return null;
              const price = product.salePrice ?? product.price;
              return (
                <li
                  key={item.slug}
                  className="flex justify-between text-sm text-slate-600"
                >
                  <span>
                    {product.name} &times; {item.quantity}
                  </span>
                  <span className="font-medium text-slate-900">
                    {formatPrice(price * item.quantity)}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 space-y-1 border-t border-slate-200 pt-4 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Shipping</span>
              <span>{formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Tax</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <div className="flex justify-between pt-2 text-base font-semibold text-slate-900">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
