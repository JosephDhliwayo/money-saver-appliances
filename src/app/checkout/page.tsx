"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";

export default function CheckoutPage() {
  const { checkoutUrl, lines, loading } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    } else if (lines.length === 0) {
      router.replace("/cart");
    }
  }, [loading, checkoutUrl, lines.length, router]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">
        {loading ? "Loading your cart..." : "Redirecting to secure checkout..."}
      </h1>
      <p className="mt-2 text-slate-500">
        {loading
          ? "One moment."
          : "You'll be taken to our secure checkout to enter shipping and payment details."}
      </p>
      <Link
        href="/cart"
        className="mt-6 inline-block text-sm font-medium text-teal-700 hover:text-teal-800"
      >
        Back to cart
      </Link>
    </div>
  );
}
