import type { Category } from "@/lib/products";

const knownGradients: Record<string, string> = {
  Refrigerators: "from-teal-50 to-teal-100/70",
  "Stoves & Ranges": "from-orange-50 to-orange-100/70",
  Washers: "from-blue-50 to-blue-100/70",
  Dryers: "from-violet-50 to-violet-100/70",
  Dishwashers: "from-sky-50 to-sky-100/70",
  Microwaves: "from-amber-50 to-amber-100/70",
};

const defaultGradient = "from-slate-50 to-slate-100/70";

export function getCategoryGradient(category: Category): string {
  return knownGradients[category] ?? defaultGradient;
}
