import { business } from "@/lib/business";

const links = [
  {
    name: "Facebook",
    href: business.social.facebook,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.35A21 21 0 0 0 13.9 4.2c-2.2 0-3.7 1.34-3.7 3.8v2.4H7.6v3h2.6V21h3.3Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: business.social.instagram,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: business.social.tiktok,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M16.5 3h-2.7v12.2a2.6 2.6 0 1 1-1.9-2.5v-2.8a5.4 5.4 0 1 0 4.6 5.3V9.1a6.7 6.7 0 0 0 3.9 1.3V7.7a4 4 0 0 1-3.9-4.1V3Z" />
      </svg>
    ),
  },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        Follow us on
      </p>
      <div className="mt-2 flex gap-3">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-teal-500 hover:text-teal-400"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
