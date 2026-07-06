import Link from "next/link";
import { LegalContent } from "@/components/legal-content";
import { business } from "@/lib/business";

export const metadata = {
  title: "Contact & Legal Information | Money Saver Appliances",
};

const policies = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms and Conditions" },
  { href: "/legal/returns-refund-policy", label: "Returns & Refund Policy" },
  { href: "/legal/same-day-delivery-terms", label: "Same-Day Delivery Terms" },
  { href: "/legal/international-shipping-policy", label: "International Shipping Policy" },
  { href: "/legal/mobile-repair-agreement", label: "Mobile Repair Service Agreement" },
  { href: "/legal/product-liability-disclaimer", label: "Product Liability Disclaimer" },
  { href: "/legal/warranty-clarification", label: "Manufacturer Warranty vs. Store Warranty" },
  { href: "/legal/email-marketing-policy", label: "Email Marketing & Anti-Spam Policy" },
  { href: "/legal/cookie-policy", label: "Cookie Policy" },
  { href: "/legal/pricing-compliance-review", label: "Pricing Compliance Review" },
];

export default function LegalIndexPage() {
  return (
    <LegalContent title="Contact & Legal Information">
      <p>
        Welcome to the {business.name} LLC Contact and Legal Information
        page. We value your business and are committed to providing you
        with high-quality appliances and exceptional service. Below you
        will find our official contact details, business information, and
        core legal disclosures.
      </p>

      <h2>1. Business Identity</h2>
      <p>
        <strong>Legal Entity Name:</strong> {business.name} LLC
        <br />
        <strong>Industry:</strong> Retail Home Appliances &amp; Mobile Repair Services
        <br />
        <strong>Headquarters:</strong> {business.address.city}
        <br />
        <strong>Website:</strong> https://www.moneysaverappliances.com
      </p>
      <p>
        {business.name} LLC is a family-owned and operated local business.
        We specialize in providing big-box brand quality &mdash; including
        refrigerators, ranges, washers, and dryers &mdash; at competitive
        small-store prices by maintaining low overhead costs.
      </p>

      <h2>2. Contact Information</h2>
      <p>
        For customer support, sales inquiries, or service requests, please
        reach out to us through the following channels:
      </p>
      <ul>
        <li><strong>Company Name:</strong> {business.name} LLC</li>
        <li><strong>Physical Address:</strong> {business.address.street}, {business.address.city}</li>
        <li><strong>Phone Number:</strong> {business.phone}</li>
        <li><strong>Email:</strong> {business.email}</li>
        <li>
          <strong>Business Hours:</strong>{" "}
          {business.hours.map((h) => `${h.label}: ${h.value}`).join(" · ")}
        </li>
        <li>
          <strong>Service Area:</strong> {business.address.city} and
          surrounding areas for delivery &amp; repair; worldwide shipping
          for small products
        </li>
      </ul>

      <h2>3. Store Location</h2>
      <p>
        {business.name}
        <br />
        {business.address.street}
        <br />
        {business.address.city}
      </p>

      <h2>4. Customer Support</h2>
      <p>
        We&rsquo;re here to help &mdash; reach out using the contact details
        above and choose the option that best fits your needs:
      </p>
      <ul>
        <li><strong>Sales Inquiries:</strong> Questions about appliances, pricing, availability, and placing an order.</li>
        <li><strong>Repair Service Scheduling:</strong> Set up a mobile repair visit, request a diagnostic, or ask about repair timelines.</li>
        <li>
          <strong>Returns &amp; Refunds:</strong> Help with return
          eligibility, return steps, and refund status (see our{" "}
          <Link href="/legal/returns-refund-policy">Returns &amp; Refund Policy</Link>).
        </li>
        <li><strong>General Questions:</strong> Anything else &mdash; website help, order updates, delivery questions, or product info.</li>
      </ul>

      <h2>5. Service Offerings &amp; Scope</h2>
      <h3>5.1 Local Sales &amp; Same-Day Delivery</h3>
      <p>
        We maintain a robust inventory of major appliances ready for
        immediate purchase. We offer same-day delivery for a designated fee
        to residents within {business.address.city} and the surrounding
        local areas. Eligibility for same-day delivery is subject to daily
        cutoff times and inventory availability.
      </p>
      <h3>5.2 Global Shipping (Small Products)</h3>
      <p>
        While our major appliances are reserved for local distribution, we
        offer a selection of small products and accessories available for
        international shipping. We ship these items worldwide, subject to
        international carrier availability and local customs regulations.
      </p>
      <h3>5.3 Mobile Appliance Repair</h3>
      <p>
        We provide mobile repair services for all major appliance brands,
        regardless of whether the unit was originally purchased from{" "}
        {business.name} LLC. Our technicians provide on-site diagnostics
        and repairs at the customer&rsquo;s location.
      </p>

      <h2>6. Legal Disclaimers</h2>
      <h3>6.1 General Disclaimer</h3>
      <p>
        The information provided on our website and in our marketing
        materials is for general informational purposes only. While we
        strive for accuracy, {business.name} LLC does not warrant that
        product descriptions, pricing, or other content is error-free,
        complete, or current.
      </p>
      <h3>6.2 Pricing and Availability</h3>
      <p>
        All prices are subject to change without notice. Due to our
        low-overhead model, inventory moves quickly. We cannot guarantee the
        availability of any specific model until a purchase is finalized.
      </p>
      <h3>6.3 Warranty Information</h3>
      <p>
        New appliances are typically covered by the original
        manufacturer&rsquo;s warranty. {business.name} LLC disclaims all
        other warranties, express or implied, including but not limited to
        the implied warranties of merchantability and fitness for a
        particular purpose, except as required by Florida state law. See our{" "}
        <Link href="/legal/warranty-clarification">
          Manufacturer Warranty vs. Store Warranty Clarification
        </Link>{" "}
        for details.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {business.name} LLC shall
        not be liable for any indirect, incidental, or consequential
        damages resulting from the use of our products or services,
        including delivery and mobile repair services. Our total liability
        for any claim shall not exceed the purchase price paid for the
        specific product or service in question.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These legal terms and all transactions with {business.name} LLC are
        governed by and construed in accordance with the laws of the State
        of Florida, without regard to its conflict of law principles.
      </p>

      <h2>9. Additional Policies</h2>
      <p>
        For more detailed information regarding your rights and
        responsibilities, please review our supplementary legal documents:
      </p>
      <ul>
        {policies.map((p) => (
          <li key={p.href}>
            <Link href={p.href}>{p.label}</Link>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-xs text-slate-400">Last Updated: July 5, 2026</p>
    </LegalContent>
  );
}
