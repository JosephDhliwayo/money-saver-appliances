"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "@/context/cart-context";
import type { Category } from "@/lib/products";
import { SearchBox } from "@/components/search-box";
import { business } from "@/lib/business";

export function SiteHeader({
  categories,
  accountUrl,
}: {
  categories: Category[];
  accountUrl?: string;
}) {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-300 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-3 sm:px-6">
        <Link href="/" className="flex flex-shrink-0 items-center gap-2.5">
          <Image
            src="/logo-icon.png"
            alt={business.name}
            width={40}
            height={40}
            priority
            className="h-10 w-10 flex-shrink-0 rounded-md object-cover"
          />
          <span className="hidden font-serif text-lg font-semibold text-brand-900 sm:inline">
            Money Saver Appliances
          </span>
        </Link>

        <div className="hidden flex-1 max-w-md md:block">
          <SearchBox />
        </div>

        <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-2">
          {accountUrl && (
            <a
              href={accountUrl}
              className="hidden rounded-md p-2 text-brand-800 transition-colors hover:bg-cream-200 hover:text-brand-700 sm:flex"
              aria-label="Your account"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
                <path
                  d="M4.5 20c1.3-3.8 4.3-6 7.5-6s6.2 2.2 7.5 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          )}
          <button
            type="button"
            className="rounded-md p-2 text-brand-800 transition-colors hover:bg-cream-200 hover:text-brand-700 md:hidden"
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <Link
            href="/cart"
            className="relative flex items-center gap-1.5 rounded-md p-2 text-brand-800 transition-colors hover:bg-cream-200 hover:text-brand-700"
            aria-label="Cart"
          >
            <svg
              width="20"
              height="20"
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
            <AnimatePresence mode="popLayout" initial={false}>
              {itemCount > 0 && (
                <motion.span
                  key={itemCount}
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.4, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold-500 px-1 text-xs font-semibold text-brand-900"
                >
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
          <button
            type="button"
            className="rounded-md p-2 text-brand-800 md:hidden"
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

      {categories.length > 0 && (
        <div className="hidden border-t border-cream-200 md:block">
          <nav className="no-scrollbar mx-auto flex max-w-6xl items-center gap-5 overflow-x-auto whitespace-nowrap px-4 py-2.5 sm:px-6">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className="flex-shrink-0 text-sm font-medium text-brand-800/80 transition-colors hover:text-brand-700"
              >
                {category}
              </Link>
            ))}
            <span className="flex-shrink-0 text-cream-300">|</span>
            <Link
              href="/repairs"
              className="flex-shrink-0 text-sm font-medium text-brand-800/80 transition-colors hover:text-brand-700"
            >
              Repairs
            </Link>
            <Link
              href="/about"
              className="flex-shrink-0 text-sm font-medium text-brand-800/80 transition-colors hover:text-brand-700"
            >
              About
            </Link>
            <Link
              href="/products?sale=1"
              className="flex-shrink-0 text-sm font-semibold text-gold-600 transition-colors hover:text-gold-700"
            >
              Special Offers
            </Link>
          </nav>
        </div>
      )}

      <AnimatePresence initial={false}>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-cream-200 md:hidden"
          >
            <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
              <SearchBox onNavigate={() => setSearchOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-1 overflow-hidden border-t border-cream-200 px-4 md:hidden"
          >
            <div className="flex flex-col gap-1 py-3">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/products?category=${encodeURIComponent(category)}`}
                  className="rounded-md px-2 py-2 text-sm font-medium text-brand-900 hover:bg-cream-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
              <Link
                href="/products?sale=1"
                className="rounded-md px-2 py-2 text-sm font-semibold text-gold-600 hover:bg-cream-200"
                onClick={() => setMenuOpen(false)}
              >
                Special Offers
              </Link>
              <Link
                href="/repairs"
                className="rounded-md px-2 py-2 text-sm font-medium text-brand-900 hover:bg-cream-200"
                onClick={() => setMenuOpen(false)}
              >
                Repairs
              </Link>
              <Link
                href="/about"
                className="rounded-md px-2 py-2 text-sm font-medium text-brand-900 hover:bg-cream-200"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              {accountUrl && (
                <a
                  href={accountUrl}
                  className="rounded-md px-2 py-2 text-sm font-medium text-brand-900 hover:bg-cream-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Your account
                </a>
              )}
              <a
                href={business.phoneHref}
                className="rounded-md px-2 py-2 text-sm font-medium text-brand-900 hover:bg-cream-200"
                onClick={() => setMenuOpen(false)}
              >
                Call {business.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
