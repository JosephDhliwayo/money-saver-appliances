import { ProductCard } from "@/components/product-card";
import { CategoryFilterPills } from "@/components/category-filter-pills";
import { SearchBox } from "@/components/search-box";
import { getCategories, getProductsByCategory } from "@/lib/shopify";

export const metadata = {
  title: "All Products | Money Saver Appliances",
};

export const revalidate = 60;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const { category: rawCategory, q } = await searchParams;
  const categories = await getCategories();
  const category = rawCategory && categories.includes(rawCategory) ? rawCategory : undefined;
  const items = await getProductsByCategory(category, q);

  const heading = q ? `Search results for "${q}"` : category ?? "All Products";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">{heading}</h1>
      <p className="mt-1 text-sm text-slate-500">
        {items.length} product{items.length === 1 ? "" : "s"}
      </p>

      <div className="mt-6 max-w-md">
        <SearchBox defaultValue={q} />
      </div>

      <CategoryFilterPills categories={categories} active={category} />

      {items.length === 0 ? (
        <p className="mt-10 text-slate-500">No products found.</p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
