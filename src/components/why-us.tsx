import { business } from "@/lib/business";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { HoverCard } from "@/components/hover-card";

const reasons = [
  {
    title: "Local, family-owned",
    description: `Serving ${business.address.city} and the surrounding area — not a big box chain.`,
    bg: "bg-teal-100",
    fg: "text-teal-700",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <path d="M4 11 12 4l8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10v9h12v-9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M10 19v-5h4v5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Prices that beat the big stores",
    description: "Low overhead means real savings passed straight to you.",
    bg: "bg-orange-100",
    fg: "text-orange-700",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <path d="M12 3v18M8 7.5c0-1.5 1.8-2.5 4-2.5s4 1 4 2.5-1.8 2.5-4 2.5-4 1-4 2.5 1.8 2.5 4 2.5 4-1 4-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Local same-day delivery",
    description: business.deliveryTagline,
    bg: "bg-blue-100",
    fg: "text-blue-700",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <rect x="2" y="7" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14 10h4l3 3v4h-7v-7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="1.7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="18" r="1.7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "We fix what we sell — and more",
    description: business.repairTagline,
    bg: "bg-violet-100",
    fg: "text-violet-700",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <path d="M14.7 6.3a3.5 3.5 0 0 0-4.6 4.2L4 16.6V20h3.4l6.1-6.1a3.5 3.5 0 0 0 4.2-4.6l-2.6 2.6-2-2 2.6-2.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Reveal>
        <h2 className="text-xl font-semibold text-slate-900">
          Why buy from us
        </h2>
      </Reveal>
      <RevealGroup className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <RevealItem key={reason.title}>
            <HoverCard className="h-full rounded-lg border border-slate-200 bg-white p-5">
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full ${reason.bg} ${reason.fg}`}
              >
                {reason.icon}
              </span>
              <p className="mt-3 text-sm font-semibold text-slate-900">
                {reason.title}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {reason.description}
              </p>
            </HoverCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
