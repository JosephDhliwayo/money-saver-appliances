import Image from "next/image";
import { MotionLink } from "@/components/motion-link";
import { Reveal } from "@/components/reveal";

export function SavingsBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <Reveal>
        <div className="relative flex flex-col overflow-hidden rounded-2xl bg-brand-900 sm:flex-row sm:items-center">
          <div className="relative z-10 flex-1 px-6 py-10 sm:px-10 sm:py-14">
            <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
              Big savings for your home.
            </h2>
            <p className="mt-2 max-w-sm text-sm text-white/70">
              Top appliance brands, great prices, and a better everyday.
            </p>
            <MotionLink
              href="/products?sale=1"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-md bg-gold-500 px-5 py-2.5 text-sm font-semibold text-brand-900 hover:bg-gold-400"
            >
              Explore offers &rarr;
            </MotionLink>
          </div>
          <div className="relative h-48 w-full sm:h-full sm:w-80">
            <Image
              src="/her0-appliances.png"
              alt="Refrigerator, range, washer, and dryer lineup"
              fill
              className="object-contain object-right p-4 sm:p-6"
              sizes="(min-width: 640px) 320px, 100vw"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-900 to-transparent sm:block" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
