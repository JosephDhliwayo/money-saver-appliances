"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "@/context/cart-context";

export function AddToCartControls({
  slug,
  inStock,
}: {
  slug: string;
  inStock: boolean;
}) {
  const { addItem } = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex items-center rounded-md border border-slate-300">
        <motion.button
          type="button"
          whileTap={{ scale: 0.85 }}
          className="px-3 py-2 text-slate-600 hover:text-teal-700 disabled:opacity-40"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          disabled={!inStock}
          aria-label="Decrease quantity"
        >
          &minus;
        </motion.button>
        <motion.span
          key={quantity}
          initial={{ scale: 1.3, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="inline-block w-8 text-center text-sm font-medium"
        >
          {quantity}
        </motion.span>
        <motion.button
          type="button"
          whileTap={{ scale: 0.85 }}
          className="px-3 py-2 text-slate-600 hover:text-teal-700 disabled:opacity-40"
          onClick={() => setQuantity((q) => Math.min(10, q + 1))}
          disabled={!inStock}
          aria-label="Increase quantity"
        >
          +
        </motion.button>
      </div>

      <motion.button
        type="button"
        disabled={!inStock}
        whileHover={inStock ? { scale: 1.03 } : undefined}
        whileTap={inStock ? { scale: 0.96 } : undefined}
        animate={added ? { scale: [1, 1.06, 1] } : {}}
        transition={{ duration: 0.3 }}
        onClick={() => {
          addItem(slug, quantity);
          setAdded(true);
          setTimeout(() => setAdded(false), 1500);
        }}
        className="flex items-center justify-center gap-2 rounded-md bg-teal-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        <AnimatePresence mode="wait" initial={false}>
          {!inStock ? (
            <motion.span key="out">Out of stock</motion.span>
          ) : added ? (
            <motion.span
              key="added"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="flex items-center gap-1.5"
            >
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.path
                  d="M4 12l5 5L20 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
              Added!
            </motion.span>
          ) : (
            <motion.span
              key="add"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
            >
              Add to cart
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <motion.button
        type="button"
        disabled={!inStock}
        whileHover={inStock ? { scale: 1.03 } : undefined}
        whileTap={inStock ? { scale: 0.96 } : undefined}
        onClick={() => {
          addItem(slug, quantity);
          router.push("/cart");
        }}
        className="rounded-md border border-teal-700 px-6 py-2.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-400"
      >
        Buy now
      </motion.button>
    </div>
  );
}
