import { LegalContent } from "@/components/legal-content";
import { business } from "@/lib/business";

export const metadata = {
  title: "Manufacturer Warranty vs. Store Warranty | Money Saver Appliances",
};

export default function WarrantyClarificationPage() {
  return (
    <LegalContent title="Manufacturer Warranty vs. Store Warranty Clarification" subtitle="Effective Date: July 5, 2026">
      <p>
        This document is here to explain &mdash; clearly and in plain
        language &mdash; how manufacturer warranties (from the brand) are
        different from any store/service warranties (from {business.name}{" "}
        LLC) and what you can expect from each. If you buy an appliance or
        service from us, you agree to the terms below.
      </p>

      <h2>1. Overview</h2>
      <ul>
        <li>
          <strong>Big brand appliances come with a manufacturer&rsquo;s warranty.</strong>{" "}
          Most major appliances we sell (including refrigerators, ranges,
          washers, and dryers) include a warranty provided by the
          manufacturer/brand.
        </li>
        <li>
          <strong>We&rsquo;re the retailer, not the warrantor.</strong>{" "}
          {business.name} LLC is an authorized retailer/reseller. Unless we
          give you a separate written store warranty or protection plan, we
          are not the company that &ldquo;backs&rdquo; the brand&rsquo;s
          warranty.
        </li>
        <li>
          <strong>Two different types of warranty coverage:</strong>
          <ul>
            <li>
              <strong>Manufacturer warranty (Brand warranty):</strong>{" "}
              Provided and controlled by the brand (the manufacturer).
              Covers certain defects and has its own rules, time limits, and
              claim process.
            </li>
            <li>
              <strong>Store/service warranty (Retailer or service provider warranty):</strong>{" "}
              If offered, it is provided by the retailer/service provider
              and must be explicitly stated in writing with its own terms.
            </li>
          </ul>
        </li>
      </ul>

      <h2>2. Manufacturer Warranties (What the Brand Covers)</h2>
      <p>
        Most new, major appliances are sold with a limited warranty
        provided directly by the original equipment manufacturer (e.g.,
        Samsung, LG, GE, Whirlpool).
      </p>
      <ul>
        <li>
          <strong>What it typically covers:</strong> Defects in materials
          and workmanship under normal home use (manufacturer terms vary).
        </li>
        <li>
          <strong>How long it lasts:</strong> Duration varies by brand and
          product. Many brands are typically 1 year parts and labor, and
          some components (like sealed systems/compressors) may have longer
          or limited extended coverage.
        </li>
        <li>
          <strong>Where it&rsquo;s honored:</strong> Manufacturer warranties
          are generally honored through the brand&rsquo;s network of
          authorized service providers and/or authorized service centers.
        </li>
        <li>
          <strong>Register your product:</strong> We recommend you register
          your product with the manufacturer after purchase so the
          manufacturer has your information on file.
        </li>
      </ul>

      <h2>3. What {business.name} Covers (Store Responsibility)</h2>
      <p>
        {business.name} LLC is responsible for the retail sale experience
        and certain store-level issues, including:
      </p>
      <ul>
        <li>
          <strong>Product condition on arrival:</strong> Making sure the
          product is delivered/picked up in the condition described/sold.
        </li>
        <li>
          <strong>DOA (Dead on Arrival) handling:</strong> Handling DOA
          units in accordance with our{" "}
          <a href="/legal/returns-refund-policy">Returns &amp; Refund Policy</a>{" "}
          (and any applicable brand rules).
        </li>
        <li>
          <strong>Helping you reach the right warranty support:</strong> We
          can provide receipts and help point you to manufacturer warranty
          contact information and/or authorized service resources.
        </li>
      </ul>
      <p><strong>Important:</strong></p>
      <ul>
        <li>
          We do not replace or extend manufacturer warranties unless we
          explicitly say so in writing (for example, in a separate
          protection plan agreement, service contract, or store warranty
          document).
        </li>
        <li>
          Any additional protection plan/extended warranty offered by{" "}
          {business.name} LLC must be documented separately and will have
          its own terms, coverage, exclusions, and claim process.
        </li>
      </ul>

      <h2>4. Mobile Repair Service &amp; Warranties</h2>
      <p>
        {business.name} LLC offers a professional Mobile Repair Service for
        all brands &mdash; not just appliances purchased from us.
      </p>
      <ul>
        <li>
          <strong>All-brand service:</strong> We service many brands and
          models regardless of where you bought them (subject to technician
          availability and parts availability).
        </li>
        <li>
          <strong>Workmanship guarantee:</strong> Repairs performed by our
          technicians include a 90-day workmanship guarantee on the repair
          labor itself.
        </li>
        <li>
          <strong>Parts warranties:</strong> Parts used in repairs may have
          their own separate manufacturer warranty (from the part
          supplier/manufacturer). Coverage varies by part and supplier.
        </li>
        <li>
          <strong>Manufacturer warranty caution:</strong> If your appliance
          is still under a manufacturer warranty, using a non-authorized
          servicer may affect your coverage. If we believe a repair may be
          covered by the manufacturer, we may recommend you contact the
          manufacturer first or use an OEM-authorized servicer.
        </li>
      </ul>

      <h2>5. Extended Warranty / Protection Plans (Optional)</h2>
      <p>
        If {business.name} LLC offers a protection plan or extended
        warranty on a specific purchase, it will be documented separately
        and will clearly state what&rsquo;s covered, what&rsquo;s excluded,
        the coverage term, any deductible or service fee, how to file a
        claim, and any limits or required maintenance.
      </p>

      <h2>6. Important Disclaimers</h2>
      <ul>
        <li>
          <strong>Manufacturer warranties are between you and the manufacturer.</strong>{" "}
          The manufacturer decides what is covered, what is excluded, and
          whether a claim is approved.
        </li>
        <li>
          <strong>Keep your documentation:</strong> Keep your original
          receipt, delivery paperwork, and write down your model and serial
          number. You&rsquo;ll usually need these for warranty service.
        </li>
        <li>
          <strong>Common warranty void reasons (varies by brand):</strong>{" "}
          Unauthorized service, misuse/abuse, improper installation, lack of
          required maintenance, accidents, or events like floods, fires, and
          other natural disasters may void or limit manufacturer warranty
          coverage.
        </li>
      </ul>

      <h2>7. Sample Customer-Facing Language</h2>
      <p>
        <strong>Warranty Note:</strong> Your appliance includes a
        manufacturer warranty from the brand. {business.name} LLC is the
        retailer and can help you with receipts and manufacturer contact
        info, but the brand handles warranty approvals and authorized
        repairs. Any store warranty or protection plan is only provided if
        it is clearly listed in writing on your receipt or in a separate
        agreement. For repairs, our mobile service covers all brands and
        includes a 90-day workmanship guarantee on our labor.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        {business.name} LLC shall not be liable for any incidental or
        consequential damages, including but not limited to food loss,
        floor damage, or water damage resulting from an appliance failure.
        The Company&rsquo;s maximum liability is limited to the purchase
        price of the appliance.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        This Clarification and all related sales agreements are governed by
        the laws of the State of Florida. Any disputes arising from
        warranty claims shall be resolved in the courts of Gadsden County,
        Florida.
      </p>

      <h2>Contact Information</h2>
      <p>For questions regarding warranty status or to request a repair service:</p>
      <p>
        {business.name} LLC
        <br />
        {business.address.city}
        <br />
        https://www.moneysaverappliances.com
      </p>
    </LegalContent>
  );
}
