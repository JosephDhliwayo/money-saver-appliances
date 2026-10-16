import { ProductCard } from "@/components/product-card";
import { CategoryTiles } from "@/components/category-tiles";
import { SavingsBanner } from "@/components/savings-banner";
import { WhyUs } from "@/components/why-us";
import { Hero } from "@/components/hero";
import { MotionLink } from "@/components/motion-link";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { getAllProducts, getCategories } from "@/lib/shopify";

export const revalidate = 60;

export default async function Home() {
  const [products, categories] = await Promise.all([
    getAllProducts(),
    getCategories(),
  ]);
  const onSale = products.filter((p) => p.salePrice !== undefined);
  const rest = products.filter((p) => p.salePrice === undefined);
  const featured = [...onSale, ...rest].slice(0, 8);

  return (
    <div>
      <Hero />

      <WhyUs />

      {categories.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Reveal>
            <h2 className="font-serif text-2xl font-semibold text-brand-900">
              Shop by category
            </h2>
          </Reveal>
          <div className="mt-6">
            <CategoryTiles categories={categories} />
          </div>
        </section>
      )}

      {featured.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <Reveal>
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl font-semibold text-brand-900">
                Everyday essentials, exceptional value
              </h2>
              <MotionLink
                href="/products"
                whileHover={{ x: 3 }}
                className="text-sm font-medium text-brand-700 hover:text-brand-800"
              >
                View all &rarr;
              </MotionLink>
            </div>
          </Reveal>
          <RevealGroup className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {featured.map((product) => (
              <RevealItem key={product.id}>
                <ProductCard product={product} />
              </RevealItem>
            ))}
          </RevealGroup>
        </section>
      )}

      <SavingsBanner />
    </div>
  );
}
