import type { Category } from "@/lib/products";

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
    case "Dishwashers":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <rect x="4" y="3" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <line x1="6" y1="7.5" x2="18" y2="7.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="6.5" y="10" width="11" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      );
    case "Microwaves":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <rect x="2.5" y="6" width="19" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="4.5" y="8" width="11" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="18.5" cy="10" r="0.9" fill="currentColor" />
          <line x1="17" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="17" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "Electronics":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <rect x="3" y="4" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <line x1="9" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="12" y1="16" x2="12" y2="20" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "Health and Beauty":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path
            d="M12 20s-7.5-4.6-7.5-10a4.5 4.5 0 0 1 7.5-3.4A4.5 4.5 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Lawn and Garden":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path
            d="M12 21V11"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 13C12 8 8 5 4 5c0 4.5 3.5 8 8 8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 11c0-4.5 3.5-8 8-8 0 4.5-3.5 8-8 8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Kitchen and Bath":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path
            d="M6 3v6a3 3 0 0 0 6 0V3M9 9v12"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 3c-1.7 0-3 1.8-3 4.5S15.3 12 17 12s3-1.8 3-4.5S18.7 3 17 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <line x1="17" y1="12" x2="17" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "Home Improvement":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path
            d="M14.7 6.3 17.7 3.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4l-3 3M14.7 6.3 4 17l-1 4 4-1L17.7 9.7M14.7 6.3l3 3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Bikes":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <circle cx="6" cy="17" r="3.2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="18" cy="17" r="3.2" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M6 17l4.5-9h4L18 17M10.5 8h3M10.5 8l3.5 6h4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "Outdoor":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path
            d="M12 4 4 20h16L12 4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M12 4v16" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "Automotive":
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path
            d="M4.5 16v-3.2l1.8-4.4A2 2 0 0 1 8.2 7h7.6a2 2 0 0 1 1.9 1.4l1.8 4.4V16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <rect x="3" y="13" width="18" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="7.5" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16.5" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.5" />
          <line x1="6" y1="10.5" x2="18" y2="10.5" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
          <path d="M3.5 8.5 12 4l8.5 4.5-8.5 4.5-8.5-4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M3.5 8.5V16L12 20l8.5-4V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <line x1="12" y1="13" x2="12" y2="20" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}

export function CategoryIcon({ category }: { category: Category }) {
  return <IconGlyph category={category} />;
}
