import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-cream-300 bg-cream-50 text-brand-800">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo-icon.png"
              alt={business.name}
              width={40}
              height={40}
              className="h-10 w-10 flex-shrink-0 rounded-md object-cover"
            />
            <p className="font-serif text-lg font-semibold text-brand-900">
              {business.name}
            </p>
          </div>
          <p className="mt-3 text-sm text-brand-800/70">
            Quality refrigerators, stoves, washers, and dryers at prices that
            make sense. We also{" "}
            <Link href="/repairs" className="underline hover:text-brand-700">
              repair appliances
            </Link>
            {" "}of any brand. We come to you!
          </p>
          <SocialLinks className="mt-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-900">Contact</p>
          <ul className="mt-2 space-y-1 text-sm text-brand-800/70">
            <li>
              <a href={business.phoneHref} className="hover:text-brand-700">
                {business.phone}
              </a>
            </li>
            <li>{business.address.street}</li>
            <li>{business.address.city}</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-900">Hours</p>
          <ul className="mt-2 space-y-1 text-sm text-brand-800/70">
            {business.hours.map((h) => (
              <li key={h.label}>
                {h.label}: {h.value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-900">Legal</p>
          <ul className="mt-2 space-y-1 text-sm text-brand-800/70">
            <li>
              <Link href="/legal/privacy-policy" className="hover:text-brand-700">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/legal/terms" className="hover:text-brand-700">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/legal/returns-refund-policy" className="hover:text-brand-700">
                Returns &amp; Refunds
              </Link>
            </li>
            <li>
              <Link href="/legal" className="hover:text-brand-700">
                More legal info
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream-300 px-4 py-4 text-center text-xs text-brand-800/60 sm:px-6">
        &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
