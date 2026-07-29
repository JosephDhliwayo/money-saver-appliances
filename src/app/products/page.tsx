import { ProductCard } from "@/components/product-card";
import { CategoryFilterPills } from "@/components/category-filter-pills";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { getCategories, getProductsByCategory } from "@/lib/shopify";

export const metadata = {
  title: "All Products | Money Saver Appliances",
};

export const revalidate = 60;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: rawCategory } = await searchParams;
  const categories = await getCategories();
  const category = rawCategory && categories.includes(rawCategory) ? rawCategory : undefined;
  const items = await getProductsByCategory(category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">
        {category ?? "All Products"}
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
