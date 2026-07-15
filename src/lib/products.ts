export type Category =
  | "Refrigerators"
  | "Stoves & Ranges"
  | "Washers"
  | "Dryers"
  | "Dishwashers"
  | "Microwaves";

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

export const products: Product[] = [];

export const categories: Category[] = [
  "Refrigerators",
  "Stoves & Ranges",
  "Washers",
  "Dryers",
  "Dishwashers",
  "Microwaves",
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category?: Category): Product[] {
  if (!category) return products;
  return products.filter((p) => p.category === category);
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
