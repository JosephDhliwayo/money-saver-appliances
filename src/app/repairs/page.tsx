import Link from "next/link";
import { categories } from "@/lib/products";
import { business } from "@/lib/business";

export const metadata = {
  title: "Appliance Repair Services | Money Saver Appliances",
};

const services = [
  {
    category: "Refrigerators",
    issues: [
      "Not cooling or freezing",
      "Leaking water",
      "Excessive noise",
      "Ice maker not working",
    ],
  },
  {
    category: "Stoves & Ranges",
    issues: [
      "Burner or element won't heat",
      "Oven not reaching temperature",
      "Igniter or pilot issues",
      "Control panel malfunction",
    ],
  },
  {
    category: "Washers",
    issues: [
      "Won't spin or drain",
      "Excessive vibration",
      "Leaking",
      "Won't start",
    ],
  },
  {
    category: "Dryers",
    issues: [
      "Not heating",
      "Takes multiple cycles to dry",
      "Drum won't turn",
      "Unusual noise",
    ],
  },
];

export default function RepairsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">
        Appliance Repair Services
      </h1>
      <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-800">
        &#128663; {business.repairTagline}
      </p>
      <p className="mt-4 text-slate-600">
        In addition to selling appliances, we repair them. Our technicians
        service refrigerators, stoves &amp; ranges, washers, and dryers &mdash;
        any brand, not just ones purchased from us. We&apos;re mobile, so we
        come to your home rather than you hauling the appliance to us.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.category}
            className="rounded-lg border border-slate-200 bg-white p-5"
          >
            <p className="text-sm font-semibold text-slate-900">
              {service.category}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              {service.issues.map((issue) => (
                <li key={issue} className="flex gap-2">
                  <span className="text-teal-700">&bull;</span>
                  {issue}
                </li>
              ))}
            </ul>
            {categories.includes(service.category as (typeof categories)[number]) && (
              <Link
                href={`/products?category=${encodeURIComponent(service.category)}`}
                className="mt-4 inline-block text-sm font-medium text-teal-700 hover:text-teal-800"
              >
                Shop new {service.category.toLowerCase()}
                {" "}&rarr;
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-teal-200 bg-teal-50 p-6">
        <p className="text-sm font-semibold text-slate-900">
          Schedule a repair
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Call us to book a mobile service visit &mdash; we come to you. Most
          repairs are scheduled within 2&ndash;3 business days.
        </p>
        <div className="mt-4 flex flex-col gap-1 text-sm text-slate-700 sm:flex-row sm:gap-6">
          <a href={business.phoneHref} className="hover:text-teal-800">
            &#128222; {business.phone}
          </a>
          <span>
            &#128205; {business.address.street}, {business.address.city}
          </span>
        </div>
      </div>
    </div>
  );
}
