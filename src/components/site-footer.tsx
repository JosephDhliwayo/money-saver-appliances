import Link from "next/link";
import { business } from "@/lib/business";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-white">{business.name}</p>
          <p className="mt-2 text-sm text-slate-400">
            Quality refrigerators, stoves, washers, and dryers at prices that
            make sense. We also{" "}
            <Link href="/repairs" className="underline hover:text-white">
              repair appliances
            </Link>
            , any brand &mdash; {business.repairTagline.toLowerCase()}
          </p>
          <SocialLinks className="mt-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-400">
            <li>
              <a href={business.phoneHref} className="hover:text-white">
                {business.phone}
              </a>
            </li>
            <li>{business.address.street}</li>
            <li>{business.address.city}</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Hours</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-400">
            {business.hours.map((h) => (
              <li key={h.label}>
                {h.label}: {h.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Legal</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-400">
            <li>
              <Link href="/legal/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/legal/terms" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/legal/returns-refund-policy" className="hover:text-white">
                Returns &amp; Refunds
              </Link>
            </li>
            <li>
              <Link href="/legal" className="hover:text-white">
                More legal info
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500 sm:px-6">
        &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
