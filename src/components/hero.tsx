"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MotionLink } from "@/components/motion-link";
import { business } from "@/lib/business";

const APPLIANCE_LINEUP = "/her0-appliances.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const badges = [
  {
    label: "Delivery available",
    sub: business.deliveryTagline,
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
        <rect x="2" y="7" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14 10h4l3 3v4h-7v-7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="1.7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="18" r="1.7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Manufacturer warranty",
    sub: "Included on every appliance",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
        <path
          d="M12 3 5 6v5.5c0 4.5 3 7.7 7 9.5 4-1.8 7-5 7-9.5V6l-7-3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9 12.2l2.2 2.2L15.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Easy 30-day returns",
    sub: "Unused items, original packaging",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
        <path d="M3.5 8.5 12 4l8.5 4.5-8.5 4.5-8.5-4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3.5 8.5V16L12 20l8.5-4V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <line x1="12" y1="13" x2="12" y2="20" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section className="bg-cream-100">
      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col gap-8 overflow-hidden px-5 pt-10 pb-10 sm:px-6 md:flex-row md:items-center md:gap-6 md:pt-16 md:pb-14"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold-200/40 blur-3xl md:block" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl md:block" />

        <div className="relative flex-1">
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600"
          >
            Serving {business.address.city} and the surrounding area
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-3 font-serif text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl"
          >
            More comfort.
            <br />
            More savings.
          </motion.h1>
          <motion.p variants={item} className="mt-4 max-w-lg text-slate-600">
            Refrigerators, ranges, washers, and dryers, in stock and ready to
            deliver, with prices that beat the big box stores.
          </motion.p>
          <motion.div variants={item} className="mt-7 flex gap-3">
            <MotionLink
              href="/products"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1.5 rounded-md bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800"
            >
              Shop Appliances &rarr;
            </MotionLink>
            <MotionLink
              href="/about"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-md border border-brand-300 px-5 py-3 text-sm font-semibold text-brand-800 hover:border-brand-500"
            >
              Visit Our Store
            </MotionLink>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative aspect-video w-full flex-1 overflow-hidden rounded-2xl md:aspect-square md:max-w-md"
        >
          <Image
            src={APPLIANCE_LINEUP}
            alt="Lineup of stainless steel refrigerator, range, washer, and dryer"
            fill
            priority
            className="object-contain"
            sizes="(min-width: 768px) 420px, 100vw"
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto grid max-w-6xl grid-cols-1 gap-5 divide-y divide-cream-300 border-t border-cream-300 px-5 py-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6"
      >
        {badges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-3 pt-5 first:pt-0 sm:pt-0 sm:first:pl-0 sm:[&:not(:first-child)]:pl-5">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
              {badge.icon}
            </span>
            <div>
              <p className="text-sm font-semibold text-brand-900">{badge.label}</p>
              <p className="text-xs text-slate-500">{badge.sub}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
