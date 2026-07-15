export type Category =
  | "Refrigerators"
  | "Stoves & Ranges"
  | "Washers"
  | "Dryers"
  | "Dishwashers"
  | "Microwaves"
  | "Other";

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  salePrice?: number;
  image: string;
  images?: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  description: string;
  features: string[];
  specs: Record<string, string>;
};

export const categories: Category[] = [
  "Refrigerators",
  "Stoves & Ranges",
  "Washers",
  "Dryers",
  "Dishwashers",
  "Microwaves",
];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
