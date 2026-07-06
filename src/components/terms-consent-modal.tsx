"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";

const CONSENT_KEY = "msa-terms-accepted";

export function TermsConsentModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem(CONSENT_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    sessionStorage.setItem(CONSENT_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <h2 className="text-lg font-semibold text-slate-900">
          Terms &amp; Conditions
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          By using the {business.name} website, placing an order,
          requesting delivery, or scheduling repair service, you agree to
          our{" "}
          <Link href="/legal/terms" className="text-teal-700 underline hover:text-teal-800">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link href="/legal/privacy-policy" className="text-teal-700 underline hover:text-teal-800">
            Privacy Policy
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={handleAccept}
          className="mt-5 w-full rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
        >
          Accept &amp; Continue
        </button>
      </div>
    </div>
  );
}
