import Link from "next/link";
import type { Category } from "@/lib/products";
import { CategoryIcon } from "@/components/category-icon";
import { HoverCard } from "@/components/hover-card";
import { RevealGroup, RevealItem } from "@/components/reveal";

export function CategoryTiles({ categories }: { categories: Category[] }) {
  return (
    <RevealGroup className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
      {categories.map((category) => (
        <RevealItem key={category}>
          <HoverCard className="group relative h-full overflow-hidden rounded-lg border border-brand-100 bg-brand-50 transition-colors hover:border-brand-700 hover:bg-brand-100">
            <Link
              href={`/products?category=${encodeURIComponent(category)}`}
              className="flex h-full flex-col items-center gap-2.5 px-3 py-5 text-center"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-brand-700 shadow-sm transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110">
                <span className="scale-[0.75]">
                  <CategoryIcon category={category} />
                </span>
              </span>
              <span className="text-xs font-medium text-brand-900 transition-colors group-hover:text-brand-700 sm:text-sm">
                {category}
              </span>
              <span className="max-h-0 overflow-hidden text-brand-700 opacity-0 transition-all duration-300 group-hover:max-h-4 group-hover:opacity-100">
                &rarr;
              </span>
            </Link>
          </HoverCard>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
