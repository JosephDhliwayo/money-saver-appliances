"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Category } from "@/lib/products";

export function CategoryFilterPills({
  categories,
  active,
}: {
  categories: Category[];
  active?: Category;
}) {
  const options: { label: string; href: string; value?: Category }[] = [
    { label: "All", href: "/products", value: undefined },
    ...categories.map((c) => ({
      label: c,
      href: `/products?category=${encodeURIComponent(c)}`,
      value: c,
    })),
  ];

  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option.value === active;
        return (
          <Link
            key={option.label}
            href={option.href}
            className={`relative rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "border-teal-700 text-white"
                : "border-slate-300 text-slate-600 hover:border-teal-700 hover:text-teal-700"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="active-category-pill"
                className="absolute inset-0 rounded-full bg-teal-700"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative">{option.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
