import { business } from "@/lib/business";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const reasons = [
  {
    title: "Local, family-owned",
    description: `Serving ${business.address.city} and the surrounding area, not a big box chain.`,
    tone: "brand" as const,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M4 11 12 4l8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10v9h12v-9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Prices that beat the big stores",
    description: "Low overhead means real savings passed straight to you.",
    tone: "gold" as const,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M12 3v18M8 7.5c0-1.5 1.8-2.5 4-2.5s4 1 4 2.5-1.8 2.5-4 2.5-4 1-4 2.5 1.8 2.5 4 2.5 4-1 4-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Local same-day delivery",
    description: business.deliveryTagline,
    tone: "brand" as const,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <rect x="2" y="7" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14 10h4l3 3v4h-7v-7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="1.7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="18" r="1.7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "We fix what we sell, and more",
    description: business.repairTagline,
    tone: "gold" as const,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M14.7 6.3a3.5 3.5 0 0 0-4.6 4.2L4 16.6V20h3.4l6.1-6.1a3.5 3.5 0 0 0 4.2-4.6l-2.6 2.6-2-2 2.6-2.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Manufacturer warranty included",
    description: "Every appliance we sell carries the brand's own warranty, not just a store promise.",
    tone: "brand" as const,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path
          d="M12 3 5 6v5.5c0 4.5 3 7.7 7 9.5 4-1.8 7-5 7-9.5V6l-7-3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9 12.2l2.2 2.2L15.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Easy 30-day returns",
    description: "Changed your mind? Unused items in original packaging come back within 30 days.",
    tone: "gold" as const,
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
        <path d="M3.5 8.5 12 4l8.5 4.5-8.5 4.5-8.5-4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3.5 8.5V16L12 20l8.5-4V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <line x1="12" y1="13" x2="12" y2="20" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

const tones = {
  brand: "bg-brand-100 text-brand-700",
  gold: "bg-gold-100 text-gold-700",
};

export function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          The Money Saver difference
        </p>
        <h2 className="mt-2 font-serif text-2xl font-semibold text-brand-900 sm:text-3xl">
          Why buy from us
        </h2>
      </Reveal>
      <RevealGroup className="mt-8 grid grid-cols-1 gap-x-12 gap-y-0 md:grid-cols-2">
        {reasons.map((reason, i) => (
          <RevealItem key={reason.title}>
            <div
              className={`flex items-start gap-4 border-cream-300 py-5 ${
                i === reasons.length - 1 ? "border-b-0" : "border-b"
              } ${i >= reasons.length - 2 ? "md:border-b-0" : "md:border-b"}`}
            >
              <span
                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full ${tones[reason.tone]}`}
              >
                {reason.icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-900">
                  {reason.title}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {reason.description}
                </p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
