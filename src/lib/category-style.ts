import type { Category } from "@/lib/products";

const knownGradients: Record<string, string> = {
  Refrigerators: "from-teal-50 to-teal-100/70",
  "Stoves & Ranges": "from-orange-50 to-orange-100/70",
  Washers: "from-blue-50 to-blue-100/70",
  Dryers: "from-violet-50 to-violet-100/70",
  Dishwashers: "from-sky-50 to-sky-100/70",
  Microwaves: "from-amber-50 to-amber-100/70",
  Electronics: "from-indigo-50 to-indigo-100/70",
  "Health and Beauty": "from-pink-50 to-pink-100/70",
  "Lawn and Garden": "from-green-50 to-green-100/70",
  "Kitchen and Bath": "from-cyan-50 to-cyan-100/70",
  "Home Improvement": "from-yellow-50 to-yellow-100/70",
  Bikes: "from-lime-50 to-lime-100/70",
  Outdoor: "from-stone-50 to-stone-100/70",
};

const defaultGradient = "from-slate-50 to-slate-100/70";

export function getCategoryGradient(category: Category): string {
  return knownGradients[category] ?? defaultGradient;
}
