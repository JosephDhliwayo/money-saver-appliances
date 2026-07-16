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

const EDGE_FADE_MASK =
  "radial-gradient(ellipse 62% 70% at 68% 50%, black 55%, transparent 100%)";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#03060d] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden md:hidden">
        <div className="animate-blob absolute -left-24 -top-24 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="animate-blob-delayed absolute -right-16 top-10 h-72 w-72 rounded-full bg-orange-400/15 blur-3xl" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 hidden md:block">
        <div
          className="absolute inset-0"
          style={{
            maskImage: EDGE_FADE_MASK,
            WebkitMaskImage: EDGE_FADE_MASK,
          }}
        >
          <Image
            src={APPLIANCE_LINEUP}
            alt="Lineup of stainless steel refrigerator, range, washer, and dryer"
            fill
            priority
            className="object-contain object-right"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03060d] via-[#03060d]/35 to-transparent" />
      </div>

      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-20 sm:px-6 md:flex-row md:items-center md:min-h-[480px] md:py-16"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex-1">
          <motion.h1
            variants={item}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Big Brand Appliances. Small Store Prices.
          </motion.h1>
          <motion.p variants={item} className="mt-4 max-w-lg text-slate-300">
            Refrigerators, ranges, washers, and dryers, in stock and ready
            to deliver, with prices that beat the big box stores. Serving
            {" "}{business.address.city} and the surrounding area.
          </motion.p>
          <motion.div variants={item} className="mt-6 flex gap-3">
            <MotionLink
              href="/products"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-500"
            >
              Shop All Appliances
            </MotionLink>
            <MotionLink
              href="/about"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-slate-400"
            >
              Visit Our Store
            </MotionLink>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative aspect-video w-full overflow-hidden rounded-2xl md:hidden"
        >
          <Image
            src={APPLIANCE_LINEUP}
            alt="Lineup of stainless steel refrigerator, range, washer, and dryer"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 500px, 100vw"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
