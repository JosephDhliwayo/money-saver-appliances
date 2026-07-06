"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({
  images,
  alt,
  gradientClass,
}: {
  images: string[];
  alt: string;
  gradientClass: string;
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div className="min-w-0">
      <div
        className={`relative aspect-square rounded-lg border border-slate-200 bg-gradient-to-br ${gradientClass}`}
      >
        <Image
          key={current}
          src={current}
          alt={alt}
          fill
          priority
          className="rounded-lg object-contain p-6 transition-transform duration-300 hover:scale-105"
          sizes="(min-width: 768px) 45vw, 90vw"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1} of ${images.length}`}
              aria-current={i === active}
              className={`relative aspect-square overflow-hidden rounded-md border bg-white transition-colors ${
                i === active
                  ? "border-teal-700 ring-2 ring-teal-700/30"
                  : "border-slate-200 hover:border-teal-700"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-contain p-1"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
