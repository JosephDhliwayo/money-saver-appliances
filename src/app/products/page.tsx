import { ProductCard } from "@/components/product-card";
import { CategoryFilterPills } from "@/components/category-filter-pills";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { categories, type Category } from "@/lib/products";
import { getProductsByCategory } from "@/lib/shopify";

export const metadata = {
  title: "All Products | Money Saver Appliances",
};

export const revalidate = 60;

function isCategory(value: string | undefined): value is Category {
  return categories.includes(value as Category);
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: rawCategory } = await searchParams;
  const category = isCategory(rawCategory) ? rawCategory : undefined;
  const items = await getProductsByCategory(category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">
        {category ?? "All Appliances"}
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        {items.length} product{items.length === 1 ? "" : "s"}
      </p>

      <CategoryFilterPills categories={categories} active={category} />

      {items.length === 0 ? (
        <p className="mt-10 text-slate-500">No products found.</p>
      ) : (
        <RevealGroup className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((product) => (
            <RevealItem key={product.id}>
              <ProductCard product={product} />
            </RevealItem>
          ))}
        </RevealGroup>
      )}
    </div>
  );
}
