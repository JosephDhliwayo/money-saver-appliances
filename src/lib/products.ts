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
    id: "1",
    slug: "frostguard-24-french-door-fridge",
    name: "FrostGuard 24cu.ft. French Door Refrigerator",
    brand: "FrostGuard",
    category: "Refrigerators",
    price: 1899,
    salePrice: 1599,
    image: "/products/refrigerator.svg",
    rating: 4.6,
    reviewCount: 214,
    inStock: true,
    description:
      "Spacious French door refrigerator with adjustable shelving, a humidity-controlled crisper, and an external ice & water dispenser.",
    features: [
      "24 cu. ft. total capacity",
      "External ice & water dispenser",
      "Humidity-controlled crisper drawers",
      "Energy Star certified",
    ],
    specs: {
      Capacity: "24 cu. ft.",
      Color: "Stainless Steel",
      Dimensions: '35.75"W x 69.5"H x 34.5"D',
      Warranty: "1 year parts & labor",
    },
  },
  {
    id: "2",
    slug: "coolpeak-18-top-freezer-fridge",
    name: "CoolPeak 18cu.ft. Top Freezer Refrigerator",
    brand: "CoolPeak",
    category: "Refrigerators",
    price: 899,
    image: "/products/refrigerator.svg",
    rating: 4.3,
    reviewCount: 98,
    inStock: true,
    description:
      "A reliable, budget-friendly top freezer refrigerator with plenty of storage for small to medium households.",
    features: [
      "18 cu. ft. total capacity",
      "Reversible door swing",
      "Adjustable glass shelves",
      "Energy Star certified",
    ],
    specs: {
      Capacity: "18 cu. ft.",
      Color: "White",
      Dimensions: '29.75"W x 66.5"H x 32.5"D',
      Warranty: "1 year parts & labor",
    },
  },
  {
    id: "3",
    slug: "arcticline-side-by-side-fridge",
    name: "ArcticLine 26cu.ft. Side-by-Side Refrigerator",
    brand: "ArcticLine",
    category: "Refrigerators",
    price: 2199,
    salePrice: 1949,
    image: "/products/refrigerator.svg",
    rating: 4.7,
    reviewCount: 152,
    inStock: false,
    description:
      "Premium side-by-side refrigerator with a smart touchscreen, filtered water dispenser, and flexible interior storage.",
    features: [
      "26 cu. ft. total capacity",
      "Smart touchscreen display",
      "Triple-filtered water & ice",
      "Door-in-door quick access",
    ],
    specs: {
      Capacity: "26 cu. ft.",
      Color: "Matte Black Stainless",
      Dimensions: '36"W x 70"H x 35"D',
      Warranty: "2 year parts & labor",
    },
  },
  {
    id: "4",
    slug: "ember-pro-gas-range",
    name: "Ember Pro 5-Burner Gas Range",
    brand: "Ember",
    category: "Stoves & Ranges",
    price: 1099,
    salePrice: 949,
    image: "/products/stove.svg",
    rating: 4.5,
    reviewCount: 176,
    inStock: true,
    description:
      "Professional-style 5-burner gas range with a convection oven and continuous cast-iron grates for smooth pot transfers.",
    features: [
      "5 sealed gas burners",
      "5.8 cu. ft. convection oven",
      "Continuous cast-iron grates",
      "Self-cleaning cycle",
    ],
    specs: {
      "Fuel Type": "Gas",
      "Oven Capacity": "5.8 cu. ft.",
      Color: "Stainless Steel",
      Warranty: "1 year parts & labor",
    },
  },
  {
    id: "5",
    slug: "voltcook-electric-range",
    name: "VoltCook Smooth-Top Electric Range",
    brand: "VoltCook",
    category: "Stoves & Ranges",
    price: 799,
    image: "/products/stove.svg",
    rating: 4.2,
    reviewCount: 87,
    inStock: true,
    description:
      "Easy-to-clean smooth-top electric range with even-heat baking and a warming drawer for effortless meal prep.",
    features: [
      "4 radiant cooking elements",
      "5.3 cu. ft. oven capacity",
      "Warming drawer",
      "Smooth glass cooktop",
    ],
    specs: {
      "Fuel Type": "Electric",
      "Oven Capacity": "5.3 cu. ft.",
      Color: "Black Stainless",
      Warranty: "1 year parts & labor",
    },
  },
  {
    id: "6",
    slug: "summit-induction-range",
    name: "Summit 6-Zone Induction Range",
    brand: "Summit",
    category: "Stoves & Ranges",
    price: 1799,
    salePrice: 1599,
    image: "/products/stove.svg",
    rating: 4.8,
    reviewCount: 63,
    inStock: true,
    description:
      "Fast, precise induction cooking with six flexible zones and a true convection oven for professional results at home.",
    features: [
      "6 induction cooking zones",
      "True convection oven",
      "WiFi-enabled remote monitoring",
      "Rapid boil technology",
    ],
    specs: {
      "Fuel Type": "Induction",
      "Oven Capacity": "6.2 cu. ft.",
      Color: "Stainless Steel",
      Warranty: "2 year parts & labor",
    },
  },
  {
    id: "7",
    slug: "purewave-front-load-washer",
    name: "PureWave Front-Load Washer",
    brand: "PureWave",
    category: "Washers",
    price: 999,
    salePrice: 849,
    image: "/products/washer.svg",
    rating: 4.6,
    reviewCount: 241,
    inStock: true,
    description:
      "High-efficiency front-load washer with steam cleaning and a quiet-spin motor for deep, gentle cleaning.",
    features: [
      "4.5 cu. ft. capacity",
      "Steam clean cycle",
      "Quiet-spin inverter motor",
      "12 wash cycles",
    ],
    specs: {
      Capacity: "4.5 cu. ft.",
      Type: "Front Load",
      Color: "White",
      Warranty: "1 year parts & labor",
    },
  },
  {
    id: "8",
    slug: "tidalwash-top-load-washer",
    name: "TidalWash Top-Load Washer",
    brand: "TidalWash",
    category: "Washers",
    price: 749,
    image: "/products/washer.svg",
    rating: 4.1,
    reviewCount: 130,
    inStock: true,
    description:
      "Dependable top-load washer with a deep wash basket and multiple cycle options for everyday laundry.",
    features: [
      "4.2 cu. ft. capacity",
      "Deep water wash option",
      "10 wash cycles",
      "Stainless steel drum",
    ],
    specs: {
      Capacity: "4.2 cu. ft.",
      Type: "Top Load",
      Color: "White",
      Warranty: "1 year parts & labor",
    },
  },
  {
    id: "9",
    slug: "meridian-smart-washer",
    name: "Meridian Smart Front-Load Washer",
    brand: "Meridian",
    category: "Washers",
    price: 1299,
    salePrice: 1149,
    image: "/products/washer.svg",
    rating: 4.9,
    reviewCount: 58,
    inStock: false,
    description:
      "App-connected smart washer with AI-assisted cycle selection and allergen-removal steam sanitize.",
    features: [
      "5.0 cu. ft. capacity",
      "App-connected smart controls",
      "Allergen steam sanitize",
      "16 wash cycles",
    ],
    specs: {
      Capacity: "5.0 cu. ft.",
      Type: "Front Load",
      Color: "Graphite",
      Warranty: "2 year parts & labor",
    },
  },
  {
    id: "10",
    slug: "sunbelt-electric-dryer",
    name: "SunBelt Electric Dryer",
    brand: "SunBelt",
    category: "Dryers",
    price: 849,
    salePrice: 699,
    image: "/products/dryer.svg",
    rating: 4.4,
    reviewCount: 189,
    inStock: true,
    description:
      "Reliable electric dryer with sensor drying to protect fabrics and reduce energy use.",
    features: [
      "7.4 cu. ft. capacity",
      "Moisture sensor drying",
      "Wrinkle-guard cycle",
      "10 dry cycles",
    ],
    specs: {
      Capacity: "7.4 cu. ft.",
      "Fuel Type": "Electric",
      Color: "White",
      Warranty: "1 year parts & labor",
    },
  },
  {
    id: "11",
    slug: "harborline-gas-dryer",
    name: "HarborLine Gas Dryer",
    brand: "HarborLine",
    category: "Dryers",
    price: 949,
    image: "/products/dryer.svg",
    rating: 4.5,
    reviewCount: 112,
    inStock: true,
    description:
      "Efficient gas dryer with a large drum and steam refresh cycle to release wrinkles without a full wash.",
    features: [
      "7.8 cu. ft. capacity",
      "Steam refresh cycle",
      "Wrinkle-guard cycle",
      "Reversible door",
    ],
    specs: {
      Capacity: "7.8 cu. ft.",
      "Fuel Type": "Gas",
      Color: "Slate",
      Warranty: "1 year parts & labor",
    },
  },
  {
    id: "12",
    slug: "meridian-smart-dryer",
    name: "Meridian Smart Electric Dryer",
    brand: "Meridian",
    category: "Dryers",
    price: 1349,
    salePrice: 1199,
    image: "/products/dryer.svg",
    rating: 4.8,
    reviewCount: 54,
    inStock: true,
    description:
      "Pair with the Meridian Smart Washer for app-connected laundry with matched cycle timing and remote start.",
    features: [
      "7.8 cu. ft. capacity",
      "App-connected smart controls",
      "Remote start & cycle alerts",
      "Allergen steam sanitize",
    ],
    specs: {
      Capacity: "7.8 cu. ft.",
      "Fuel Type": "Electric",
      Color: "Graphite",
      Warranty: "2 year parts & labor",
    },
  },
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
    name: "MORA 29 cu.ft. Refrigerator (MRS290T5FSD)",
    brand: "MORA",
    category: "Refrigerators",
    price: 999,
    salePrice: 449,
    image: "/products/refrigerator.svg",
    rating: 4.2,
    reviewCount: 5,
    inStock: true,
    description:
      "Liquidation find in used, good condition. Large 29 cu. ft. MORA refrigerator with plenty of storage, priced well below retail.",
    features: [
      "29 cu. ft. total capacity",
      "Used - Good condition, inspected",
      "Huge savings off $999.99 retail",
    ],
    specs: {
      Capacity: "29 cu. ft.",
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
