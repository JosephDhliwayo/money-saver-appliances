"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "@/context/cart-context";
import type { Category } from "@/lib/products";

export function SiteHeader({ categories }: { categories: Category[] }) {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3 sm:px-6">
        <Link href="/" className="flex min-w-0 flex-shrink items-center gap-2">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-teal-700 text-sm font-bold text-white">
            MS
          </span>
          <span className="truncate text-base font-semibold text-slate-900 sm:text-lg">
            Money Saver Appliances
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/products?category=${encodeURIComponent(category)}`}
              className="text-sm font-medium text-slate-600 hover:text-teal-700"
            >
              {category}
            </Link>
          ))}
          <Link
            href="/repairs"
            className="text-sm font-medium text-slate-600 hover:text-teal-700"
          >
            Repairs
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-slate-600 hover:text-teal-700"
          >
            About
          </Link>
        </nav>

        <div className="flex flex-shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/cart"
            className="relative flex items-center gap-1.5 rounded-md border border-slate-300 px-2.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-teal-700 hover:text-teal-700 sm:px-3"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="flex-shrink-0"
              aria-hidden
            >
              <path
                d="M4 6h2l1.6 9.6a2 2 0 0 0 2 1.7h7.6a2 2 0 0 0 2-1.6L20.4 9H7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="20" r="1.3" fill="currentColor" />
              <circle cx="17" cy="20" r="1.3" fill="currentColor" />
            </svg>
            <span className="hidden min-[380px]:inline">Cart</span>
            <AnimatePresence mode="popLayout" initial={false}>
              {itemCount > 0 && (
                <motion.span
                  key={itemCount}
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.4, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  className="flex h-5 min-w-5 items-center justify-center rounded-full bg-teal-700 px-1 text-xs font-semibold text-white"
                >
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
          <button
            type="button"
            className="rounded-md border border-slate-300 p-2 text-slate-700 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              animate={menuOpen ? "open" : "closed"}
            >
              <motion.path
                d="M2 5h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 5 },
                }}
              />
              <motion.path
                d="M2 10h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
              />
              <motion.path
                d="M2 15h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -5 },
                }}
              />
            </motion.svg>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-1 overflow-hidden border-t border-slate-200 px-4 md:hidden"
          >
            <div className="flex flex-col gap-1 py-3">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/products?category=${encodeURIComponent(category)}`}
                  className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
              <Link
                href="/repairs"
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setMenuOpen(false)}
              >
                Repairs
              </Link>
              <Link
                href="/about"
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
