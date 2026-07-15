"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Category } from "@/lib/products";
import { CategoryIcon } from "@/components/category-icon";

export function CategoryDropdown({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block w-full max-w-xs">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex w-full items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-5 py-3.5 text-left shadow-sm transition-colors hover:border-teal-700"
      >
        <span className="text-sm font-semibold text-slate-800">
          Browse a category
        </span>
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-slate-500"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-20 mt-2 w-full overflow-hidden rounded-lg border border-slate-200 bg-white py-2 shadow-lg"
          >
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/products?category=${encodeURIComponent(category)}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-slate-50"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden">
                    <span className="scale-[0.65]">
                      <CategoryIcon category={category} />
                    </span>
                  </span>
                  <span className="text-sm font-medium text-slate-800">
                    {category}
                  </span>
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
