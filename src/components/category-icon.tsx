import type { Category } from "@/lib/products";

const categoryStyles: Record<Category, { bg: string; fg: string }> = {
  Refrigerators: { bg: "bg-teal-100", fg: "text-teal-700" },
  "Stoves & Ranges": { bg: "bg-orange-100", fg: "text-orange-700" },
  Washers: { bg: "bg-blue-100", fg: "text-blue-700" },
  Dryers: { bg: "bg-violet-100", fg: "text-violet-700" },
};

function IconGlyph({ category }: { category: Category }) {
  switch (category) {
    case "Refrigerators":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <rect x="6" y="2" width="12" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <line x1="6" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.6" />
          <line x1="9" y1="5" x2="9" y2="7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="9" y1="12.5" x2="9" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "Stoves & Ranges":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="8" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="16" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.4" />
          <rect x="6" y="13" width="12" height="4.5" rx="0.8" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "Washers":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="13" r="5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="13" r="2.3" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="7" cy="6" r="0.9" fill="currentColor" />
          <circle cx="10" cy="6" r="0.9" fill="currentColor" />
        </svg>
      );
    case "Dryers":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="13" r="5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9.5 13a2.5 2.5 0 1 0 5 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="7" cy="6" r="0.9" fill="currentColor" />
          <circle cx="10" cy="6" r="0.9" fill="currentColor" />
        </svg>
      );
  }
}

export function CategoryIcon({ category }: { category: Category }) {
  const style = categoryStyles[category];
  return (
    <span
      className={`flex h-14 w-14 items-center justify-center rounded-full ${style.bg} ${style.fg}`}
    >
      <IconGlyph category={category} />
    </span>
  );
}
