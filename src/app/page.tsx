import { ProductCard } from "@/components/product-card";
import { CategoryIcon } from "@/components/category-icon";
import { WhyUs } from "@/components/why-us";
import { Hero } from "@/components/hero";
import { MotionLink } from "@/components/motion-link";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { categories } from "@/lib/products";
import { getAllProducts } from "@/lib/shopify";
import { business } from "@/lib/business";

export const revalidate = 60;

export default async function Home() {
  const products = await getAllProducts();
  const featured = products.filter((p) => p.salePrice !== undefined).slice(0, 4);

  return (
    <div>
      <Hero />

      <WhyUs />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <h2 className="text-xl font-semibold text-slate-900">
            Shop by category
          </h2>
        </Reveal>
        <RevealGroup className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((category) => (
            <RevealItem key={category}>
              <MotionLink
                href={`/products?category=${encodeURIComponent(category)}`}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition-colors hover:border-teal-700 hover:shadow-md"
              >
                <CategoryIcon category={category} />
                <span className="text-sm font-semibold text-slate-800">
                  {category}
                </span>
              </MotionLink>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {featured.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <Reveal>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900">
                Current deals
              </h2>
              <MotionLink
                href="/products"
                whileHover={{ x: 3 }}
                className="text-sm font-medium text-teal-700 hover:text-teal-800"
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

      <Reveal className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="flex flex-col items-start gap-4 rounded-lg border border-teal-200 bg-teal-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              We also repair appliances
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Refrigerator, stove, washer, or dryer on the fritz? Our
              technicians fix any brand &mdash; not just ones bought from us.{" "}
              {business.repairTagline}
            </p>
          </div>
          <MotionLink
            href="/repairs"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="whitespace-nowrap rounded-md bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Repair services &rarr;
          </MotionLink>
        </div>
      </Reveal>
    </div>
  );
}
