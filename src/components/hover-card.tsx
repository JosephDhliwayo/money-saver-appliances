"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function HoverCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4, boxShadow: "0 12px 24px -12px rgba(15, 23, 42, 0.18)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
