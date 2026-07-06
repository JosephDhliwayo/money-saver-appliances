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
  rating: number;
  reviewCount: number;
  inStock: boolean;
  description: string;
  features: string[];
  specs: Record<string, string>;
};

export const products: Product[] = [
  {
    id: "13",
    slug: "samsung-rf32cg5400sr-31cf-refrigerator",
    name: "Samsung 31 cu.ft. French Door Refrigerator (RF32CG5400SR)",
    brand: "Samsung",
    category: "Refrigerators",
    price: 2299,
    salePrice: 999,
    image: "/products/refrigerator.svg",
    rating: 4.5,
    reviewCount: 12,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Spacious 31 cu. ft. French door refrigerator with plenty of room for a large household, sold at a fraction of retail.",
    features: [
      "31 cu. ft. total capacity",
      "French door design",
      "Used - Good condition, inspected",
      "Huge savings off $2,299.99 retail",
    ],
    specs: {
      Capacity: "31 cu. ft.",
      Condition: "Used - Good",
      Model: "RF32CG5400SR",
      Warranty: "90-day in-store warranty",
    },
  },
  {
    id: "14",
    slug: "lg-lsil6336xe-63cf-range",
    name: "LG 6.3 cu.ft. Range (LSIL6336XE)",
    brand: "LG",
    category: "Stoves & Ranges",
    price: 3249,
    salePrice: 1449,
    image: "/products/stove.svg",
    rating: 4.6,
    reviewCount: 9,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Large-capacity LG range priced well below retail with room for full holiday spreads.",
    features: [
      "6.3 cu. ft. oven capacity",
      "Used - Good condition, inspected",
      "Huge savings off $3,249.99 retail",
    ],
    specs: {
      "Oven Capacity": "6.3 cu. ft.",
      Condition: "Used - Good",
      Model: "LSIL6336XE",
      Warranty: "90-day in-store warranty",
    },
  },
  {
    id: "15",
    slug: "samsung-rf23b7671sr-23cf-refrigerator",
    name: "Samsung 23 cu.ft. French Door Refrigerator (RF23B7671SR)",
    brand: "Samsung",
    category: "Refrigerators",
    price: 2999,
    salePrice: 1349,
    image: "/products/refrigerator.svg",
    rating: 4.5,
    reviewCount: 7,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Counter-depth-style Samsung French door refrigerator with flexible interior storage.",
    features: [
      "23 cu. ft. total capacity",
      "French door design",
      "Used - Good condition, inspected",
      "Huge savings off $2,999.99 retail",
    ],
    specs: {
      Capacity: "23 cu. ft.",
      Condition: "Used - Good",
      Model: "RF23B7671SR",
      Warranty: "90-day in-store warranty",
    },
  },
  {
    id: "16",
    slug: "bosch-shx9pcm5n-benchmark-dishwasher",
    name: "Bosch Benchmark Dishwasher (SHX9PCM5N)",
    brand: "Bosch",
    category: "Dishwashers",
    price: 1999,
    salePrice: 899,
    image: "/products/dishwasher.svg",
    rating: 4.7,
    reviewCount: 15,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Bosch's top-tier Benchmark series dishwasher, known for whisper-quiet operation, at a huge discount off retail.",
    features: [
      "Benchmark series - Bosch's quietest line",
      "Used - Good condition, inspected",
      "Huge savings off $1,999.99 retail",
    ],
    specs: {
      Condition: "Used - Good",
      Model: "SHX9PCM5N",
      Warranty: "90-day in-store warranty",
    },
  },
  {
    id: "17",
    slug: "samsung-me11a7710ds-microwave",
    name: "Samsung 1.1 cu.ft. Countertop Microwave (ME11A7710DS)",
    brand: "Samsung",
    category: "Microwaves",
    price: 619,
    salePrice: 279,
    image: "/products/microwave.svg",
    rating: 4.3,
    reviewCount: 11,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Compact 1.1 cu. ft. Samsung microwave, a great budget pickup for any kitchen.",
    features: [
      "1.1 cu. ft. capacity",
      "Used - Good condition, inspected",
      "Huge savings off $619.99 retail",
    ],
    specs: {
      Capacity: "1.1 cu. ft.",
      Condition: "Used - Good",
      Model: "ME11A7710DS",
      Warranty: "90-day in-store warranty",
    },
  },
  {
    id: "18",
    slug: "samsung-rf23bb8600ql-bespoke-refrigerator",
    name: "Samsung BESPOKE 23 cu.ft. Refrigerator (RF23BB8600QL)",
    brand: "Samsung",
    category: "Refrigerators",
    price: 2249,
    salePrice: 999,
    image: "/products/refrigerator.svg",
    rating: 4.6,
    reviewCount: 8,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Samsung's customizable BESPOKE line, sold at a steep discount off retail.",
    features: [
      "23 cu. ft. total capacity",
      "BESPOKE customizable design",
      "Used - Good condition, inspected",
      "Huge savings off $2,249.99 retail",
    ],
    specs: {
      Capacity: "23 cu. ft.",
      Condition: "Used - Good",
      Model: "RF23BB8600QL",
      Warranty: "90-day in-store warranty",
    },
  },
  {
    id: "19",
    slug: "samsung-ne63a6511ss-electric-range",
    name: "Samsung 6.3 cu.ft. Electric Range (NE63A6511SS)",
    brand: "Samsung",
    category: "Stoves & Ranges",
    price: 879,
    salePrice: 399,
    image: "/products/stove.svg",
    rating: 4.4,
    reviewCount: 10,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Reliable Samsung electric range with a large 6.3 cu. ft. oven, priced to move.",
    features: [
      "6.3 cu. ft. oven capacity",
      "Electric range",
      "Used - Good condition, inspected",
      "Huge savings off $879.99 retail",
    ],
    specs: {
      "Fuel Type": "Electric",
      "Oven Capacity": "6.3 cu. ft.",
      Condition: "Used - Good",
      Model: "NE63A6511SS",
      Warranty: "90-day in-store warranty",
    },
  },
  {
    id: "20",
    slug: "samsung-dw80cg5450sr-dishwasher",
    name: "Samsung Dishwasher (DW80CG5450SR)",
    brand: "Samsung",
    category: "Dishwashers",
    price: 699,
    salePrice: 299,
    image: "/products/dishwasher.svg",
    rating: 4.2,
    reviewCount: 14,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Dependable Samsung dishwasher at a fraction of retail price.",
    features: [
      "Used - Good condition, inspected",
      "Huge savings off $699.99 retail",
    ],
    specs: {
      Condition: "Used - Good",
      Model: "DW80CG5450SR",
      Warranty: "90-day in-store warranty",
    },
  },
  {
    id: "21",
    slug: "mora-mrt180n6awd-18cf-refrigerator",
    name: "MORA 18 cu.ft. Top Freezer Refrigerator (MRT180N6AWD)",
    brand: "MORA",
    category: "Refrigerators",
    price: 579,
    salePrice: 259,
    image: "/products/refrigerator.svg",
    rating: 4.1,
    reviewCount: 6,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Budget-friendly MORA top freezer refrigerator, a great value pickup.",
    features: [
      "18 cu. ft. total capacity",
      "Top freezer design",
      "Used - Good condition, inspected",
      "Huge savings off $579.99 retail",
    ],
    specs: {
      Capacity: "18 cu. ft.",
      Condition: "Used - Good",
      Model: "MRT180N6AWD",
      Warranty: "90-day in-store warranty",
    },
  },
  {
    id: "22",
    slug: "mora-mrs290t5fsd-29cf-refrigerator",
    name: "MORA 29.1 cu.ft. Side-by-Side Refrigerator (MRS290T5FSD)",
    brand: "MORA",
    category: "Refrigerators",
    price: 1049,
    salePrice: 899,
    image: "/products/mora-mrs290t5fsd.svg",
    rating: 4.2,
    reviewCount: 5,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Spacious 29.1 cu. ft. side-by-side refrigerator with filtered ice and water through the door, fingerprint-resistant stainless steel, and gallon-size door bins.",
    features: [
      "29.1 cu. ft. total capacity",
      "Fingerprint Resistant Stainless Steel",
      "Filtered Ice and Water Through the Door",
      "Super Cool / Super Freeze",
      "Door Open Alarm Function",
      "Gallon Door Bins",
      "Used - Good condition, inspected",
    ],
    specs: {
      Capacity: "29.1 cu. ft.",
      Finish: "Fingerprint Resistant Stainless Steel",
      Dimensions: '35.9"W x 70.3"H x 34.0"D',
      "Est. Yearly Energy Cost": "$105/yr (748 kWh)",
      Condition: "Used - Good",
      Model: "MRS290T5FSD",
      Warranty: "90-day in-store warranty",
    },
  },
  {
    id: "23",
    slug: "lg-mvel2033f-otr-microwave",
    name: "LG 2.0 cu.ft. Over-the-Range Microwave (MVEL2033F)",
    brand: "LG",
    category: "Microwaves",
    price: 449,
    salePrice: 199,
    image: "/products/microwave.svg",
    rating: 4.4,
    reviewCount: 13,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Over-the-range LG microwave that doubles as a range hood, at a huge discount off retail.",
    features: [
      "2.0 cu. ft. capacity",
      "Over-the-range installation",
      "Used - Good condition, inspected",
      "Huge savings off $449.99 retail",
    ],
    specs: {
      Capacity: "2.0 cu. ft.",
      Condition: "Used - Good",
      Model: "MVEL2033F",
      Warranty: "90-day in-store warranty",
    },
  },
  {
    id: "24",
    slug: "samsung-nsi6db990012-range",
    name: "Samsung 6.3 cu.ft. Range (NSI6DB990012)",
    brand: "Samsung",
    category: "Stoves & Ranges",
    price: 2649,
    salePrice: 1199,
    image: "/products/stove.svg",
    rating: 4.6,
    reviewCount: 4,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Premium Samsung range with a large 6.3 cu. ft. oven, sold well below retail.",
    features: [
      "6.3 cu. ft. oven capacity",
      "Used - Good condition, inspected",
      "Huge savings off $2,649.99 retail",
    ],
    specs: {
      "Oven Capacity": "6.3 cu. ft.",
      Condition: "Used - Good",
      Model: "NSI6DB990012",
      Warranty: "90-day in-store warranty",
    },
  },
  {
    id: "25",
    slug: "lg-lrflc2716s-27cf-refrigerator",
    name: "LG 27 cu.ft. French Door Refrigerator (LRFLC2716S)",
    brand: "LG",
    category: "Refrigerators",
    price: 1549,
    salePrice: 699,
    image: "/products/refrigerator.svg",
    rating: 4.5,
    reviewCount: 9,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Spacious 27 cu. ft. LG French door refrigerator, a standout deal off retail price.",
    features: [
      "27 cu. ft. total capacity",
      "French door design",
      "Used - Good condition, inspected",
      "Huge savings off $1,549.99 retail",
    ],
    specs: {
      Capacity: "27 cu. ft.",
      Condition: "Used - Good",
      Model: "LRFLC2716S",
      Warranty: "90-day in-store warranty",
    },
  },
];

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
