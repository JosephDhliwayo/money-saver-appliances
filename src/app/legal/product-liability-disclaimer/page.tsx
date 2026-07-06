import { LegalContent } from "@/components/legal-content";
import { business } from "@/lib/business";

export const metadata = {
  title: "Product Liability Disclaimer | Money Saver Appliances",
};

export default function ProductLiabilityDisclaimerPage() {
  return (
    <LegalContent title="Product Liability Disclaimer" subtitle="Last Updated: July 5, 2026">
      <p>
        This Product Liability Disclaimer (&ldquo;Disclaimer&rdquo;) governs
        the purchase, use, and repair of all products and services provided
        by {business.name} LLC (&ldquo;the Company,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;), including but not limited to
        refrigerators, ranges, washers, dryers, small appliances, and mobile
        repair services. By purchasing a product or service from us, whether
        in-store or through https://www.moneysaverappliances.com, you
        acknowledge and agree to the terms set forth below.
      </p>

      <h2>1. Nature of Products Sold</h2>
      <p>
        {business.name} LLC is a retail distributor of home appliances
        manufactured by third-party brands. While we strive to offer
        high-quality inventory at competitive prices, we do not manufacture
        the products we sell. Consequently, we do not have control over the
        design, testing, or manufacturing processes of these items.
      </p>

      <h2>2. Disclaimer of Warranties (Manufacturer Warranty Only)</h2>
      <p>
        All big-brand appliances are sold subject to the specific
        warranties provided by the original manufacturer (see our{" "}
        <a href="/legal/warranty-clarification">
          Manufacturer Warranty vs. Store Warranty Clarification
        </a>
        ). Any claims regarding manufacturing defects, design flaws, or
        product failures must be directed to the respective manufacturer.
      </p>
      <ul>
        <li>
          <strong>Manufacturer&rsquo;s Warranty Applies:</strong> Products
          sold may be covered by a manufacturer&rsquo;s warranty, and the
          manufacturer is responsible for the terms, coverage, limitations,
          and claim process under that warranty.
        </li>
        <li>
          <strong>No Additional Warranties by {business.name}:</strong>{" "}
          Except where explicitly stated in a separate written agreement
          signed by {business.name} LLC, we make no additional express or
          implied warranties regarding any product&rsquo;s safety,
          reliability, durability, or performance beyond what the
          manufacturer provides.
        </li>
        <li>
          <strong>Disclaimer of Implied Warranties (Where Permitted):</strong>{" "}
          To the extent permitted by Florida law, we disclaim all implied
          warranties, including the implied warranties of merchantability
          and fitness for a particular purpose.
        </li>
      </ul>

      <h2>3. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, {business.name} LLC
        (including our owners, employees, and technicians) shall not be
        liable for any indirect, incidental, special, exemplary, or
        consequential damages arising out of or related to any product or
        its use, inability to use, defect, or malfunction, even if we have
        been advised of the possibility of such damages. This limitation
        includes, without limitation:
      </p>
      <ul>
        <li>
          <strong>Loss of Property / Damage to Property:</strong> Any loss
          of or damage to real or personal property, including (without
          limitation) flooring, cabinetry, walls, plumbing, water lines,
          drains, gas lines, vents, and electrical systems.
        </li>
        <li>
          <strong>Food Spoilage / Perishables:</strong> Loss of food,
          medicine, or other perishables due to refrigerator or freezer
          failure, temperature fluctuation, or interruption.
        </li>
        <li>
          <strong>Water / Electrical Damage:</strong> Water damage, mold,
          electrical damage, power surge-related issues, or related
          remediation costs.
        </li>
        <li>
          <strong>Lost Profits / Business Interruption:</strong> Lost
          profits, lost revenue, loss of use, downtime, or business
          interruption of any kind.
        </li>
        <li>
          <strong>Improper Installation / Misuse / Neglect / Unauthorized Repair:</strong>{" "}
          Any damage or loss arising from improper installation, misuse,
          abnormal use, neglect, failure to maintain, failure to follow
          manufacturer instructions, use with incompatible utilities
          (electrical/gas/water), or any unauthorized modification or
          repair by anyone other than the manufacturer or an authorized
          service provider.
        </li>
      </ul>
      <p>
        <strong>Maximum Liability Cap:</strong> To the fullest extent
        permitted by law, our total cumulative liability for any claim
        related to a product (including any claim sounding in contract,
        tort, strict liability, or otherwise) is limited to the purchase
        price paid for the specific product giving rise to the claim.
      </p>

      <h2>4. Installation Responsibility</h2>
      <p>Proper installation is critical for safe operation and performance.</p>
      <ul>
        <li>
          <strong>Customer Responsible for Proper Installation:</strong>{" "}
          Customers are responsible for ensuring the product is installed
          and used in accordance with the manufacturer&rsquo;s instructions,
          warnings, and applicable codes/requirements.
        </li>
        <li>
          <strong>No Installation Unless in Writing:</strong> {business.name}{" "}
          LLC does not provide installation services unless separately
          agreed in writing (for example, in an invoice, work order, or
          signed service agreement that specifically states installation is
          included).
        </li>
        <li>
          <strong>Improper Hookups Void Liability:</strong> We are not
          responsible for, and disclaim liability arising from, improper
          installation or incorrect electrical, gas, water, drain, or vent
          hookups (including but not limited to incorrect voltage/amperage,
          missing shutoff valves, improper gas connections, inadequate
          venting, or leaks). Any such improper installation may also void
          manufacturer warranty coverage.
        </li>
      </ul>

      <h2>5. Mobile Repair Service Liability</h2>
      <p>
        Our technicians provide mobile repair services for various brands.
        While we aim to restore functionality to your appliances, the
        following applies:
      </p>
      <ul>
        <li>
          <strong>Reasonable Care and Skill:</strong> We perform repair
          services using reasonable care and skill consistent with industry
          standards.
        </li>
        <li>
          <strong>Pre-existing Conditions:</strong> We are not responsible
          for the failure of components not related to the specific repair
          performed, or for pre-existing damage, wear, corrosion, or
          conditions that existed before our service visit.
        </li>
        <li>
          <strong>Liability Cap for Repair Work:</strong> To the fullest
          extent permitted by law, our total liability arising from or
          relating to repair work is limited to the amount you paid for the
          specific repair service at issue.
        </li>
        <li>
          <strong>Repair-Related Damage Process:</strong> Any damage caused
          during repair (if any) will be addressed in accordance with the{" "}
          <a href="/legal/mobile-repair-agreement">
            Mobile Repair Service Agreement
          </a>{" "}
          and any applicable written work order terms.
        </li>
      </ul>

      <h2>6. Small Products (International Shipping)</h2>
      <p>For small products shipped domestically or internationally:</p>
      <ul>
        <li>
          <strong>&ldquo;As-Is&rdquo; Unless Otherwise Stated:</strong> Small
          shipped items are sold &ldquo;as-is&rdquo; and &ldquo;as
          available&rdquo; unless otherwise stated in writing on the
          product listing, invoice, or packaging.
        </li>
        <li>
          <strong>Transit Risk / Carrier Handoff:</strong> Once a product is
          delivered to a common carrier, the risk of loss and title passes
          to the customer. We are not liable for loss, delay, or damage
          that occurs during international transit after the package is
          handed to the carrier.
        </li>
        <li>
          <strong>Inspection and Damage Reporting:</strong> Customers should
          inspect items promptly upon delivery and report any shipping
          damage or missing items within 7 days of delivery (include photos
          and packaging where possible) so we can help you pursue any
          available carrier claim.
        </li>
        <li>
          <strong>Compliance:</strong> Customers outside of the United
          States are responsible for ensuring that small items purchased
          comply with local safety standards and electrical requirements
          (e.g., voltage differences).
        </li>
      </ul>

      <h2>7. Local Service Area (Chattahoochee, FL)</h2>
      <p>
        Our local same-day delivery and repair services are provided to the
        Chattahoochee, FL area and surrounding communities. While we take
        every precaution during delivery and on-site service, our total
        liability for any claim arising from local delivery or service shall
        not exceed the total amount paid by the customer for said delivery
        or service.
      </p>

      <h2>8. Third-Party Links &amp; Products</h2>
      <p>
        We may reference, recommend, display, or link to third-party
        products, manufacturers, installers, or service providers. We do
        not control and are not responsible for third-party content,
        policies, practices, availability, performance, or acts/omissions.
        Your dealings with any third party are between you and that third
        party.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        To the fullest extent permitted by law, you agree to indemnify,
        defend, and hold harmless {business.name} LLC (and our owners,
        employees, contractors, and agents) from and against any claims,
        demands, losses, liabilities, damages, judgments, costs, and
        expenses (including reasonable attorneys&rsquo; fees) arising out of
        or related to:
      </p>
      <ul>
        <li><strong>Misuse of Products:</strong> Misuse, abnormal use, negligence, or failure to maintain a product.</li>
        <li><strong>Failure to Follow Instructions:</strong> Failure to follow manufacturer instructions, warnings, or safety guidance.</li>
        <li><strong>Unauthorized Modifications or Repairs:</strong> Any unauthorized modifications, alterations, or repairs by anyone other than the manufacturer or an authorized service provider.</li>
      </ul>

      <h2>10. Governing Law</h2>
      <p>
        This Disclaimer is governed by the laws of the State of Florida,
        without regard to its conflict of law principles.
      </p>

      <h2>11. Severability</h2>
      <p>
        If any provision of this Disclaimer is found to be invalid, illegal,
        or unenforceable, the remaining provisions will remain in full force
        and effect.
      </p>

      <h2>12. Contact Information</h2>
      <p>For questions regarding product safety, recalls, or manufacturer contact details, please contact us at:</p>
      <p>
        {business.name} LLC
        <br />
        Website: https://www.moneysaverappliances.com
        <br />
        Location: {business.address.city}
      </p>
    </LegalContent>
  );
}
