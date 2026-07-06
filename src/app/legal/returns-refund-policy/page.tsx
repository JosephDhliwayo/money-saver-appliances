import { LegalContent } from "@/components/legal-content";
import { business } from "@/lib/business";

export const metadata = {
  title: "Returns & Refund Policy | Money Saver Appliances",
};

export default function ReturnsRefundPolicyPage() {
  return (
    <LegalContent title="Returns & Refund Policy" subtitle="Last Updated: July 5, 2026">
      <p>
        Thank you for shopping at {business.name} LLC. We appreciate your
        business and strive to provide high-quality appliances at
        competitive prices. We understand that occasionally a product may
        not meet your expectations or may arrive with issues. This Returns
        &amp; Refund Policy outlines the conditions under which returns and
        refunds are processed for our various products and services.
      </p>
      <p>
        By making a purchase from {business.name} LLC, whether in-store, via
        our website (https://www.moneysaverappliances.com), or through our
        mobile repair services, you agree to the terms set forth below.
      </p>

      <h2>1. General Return Eligibility (30-Day Return Window)</h2>
      <p>To be eligible for a return, the following general conditions must be met:</p>
      <ul>
        <li>
          <strong>Return Window:</strong> The request for a return must be
          initiated within 30 calendar days from the date of delivery or
          local pickup (the &ldquo;Return Window&rdquo;).
        </li>
        <li>
          <strong>Condition:</strong> The item must be unused, in original
          condition, and returned with all original packaging, manuals, and
          accessories included.
        </li>
        <li>
          <strong>Proof of Purchase Required:</strong> A valid receipt, order
          confirmation, or invoice is required for all returns and refunds.
        </li>
        <li>
          <strong>Keep Your Box (When Possible):</strong> For appliances and
          other items that require protective packaging, keeping the
          original box and packing materials helps avoid damage during
          return transport and may be required for approval.
        </li>
      </ul>

      <h2>2. Large Appliances (Refrigerators, Ranges, Washers, Dryers, etc.) — Local Delivery Exceptions</h2>
      <p>
        Due to the size, weight, and installation requirements of large home
        appliances, the following specific terms apply (especially for local
        delivery in/around Chattahoochee, FL):
      </p>
      <ul>
        <li>
          <strong>Return Eligibility (Unopened/Uninstalled):</strong> Large
          appliances that have not been installed, have not been connected
          (water/gas/electric), and are in their original packaging may be
          eligible for return within the 30-day Return Window. These returns
          are subject to a 15% restocking fee (see &ldquo;Restocking
          Fees&rdquo;).
        </li>
        <li>
          <strong>Installed/Connected Items (Exception):</strong> Once an
          appliance has been installed, connected, or used, it is not
          eligible for a standard return (change-of-mind returns are not
          accepted). If the unit is defective, damaged, or not working
          properly, please see the &ldquo;Damaged or Defective Items&rdquo;
          section below.
        </li>
        <li>
          <strong>Local Delivery / Pickup Arrangements:</strong> For approved
          large-appliance returns, we will arrange pickup (or provide
          drop-off instructions). Pickup availability and scheduling depend
          on route capacity. Pickup/delivery service fees are non-refundable
          once performed.
        </li>
        <li>
          <strong>Special Handling:</strong> If an appliance must be
          disassembled, unstacked, unhooked, or otherwise requires special
          handling to retrieve it, additional service charges may apply
          (we&rsquo;ll confirm before scheduling).
        </li>
      </ul>

      <h2>3. Small Items and International Shipping (Shippable Products)</h2>
      <p>For small products shipped in the U.S. or internationally, the following terms apply:</p>
      <ul>
        <li>
          <strong>Return Period:</strong> Customers have 30 days from the
          date of delivery to initiate a return.
        </li>
        <li>
          <strong>Return Shipping Costs (Customer-Paid):</strong> Customers
          are responsible for all return shipping costs for small items.
          Original shipping charges (if any) are non-refundable unless the
          return is due to our error or a confirmed defect.
        </li>
        <li>
          <strong>International Returns (Customer Covers Duties/Taxes):</strong>{" "}
          For international orders, customers are responsible for all return
          shipping costs, and any customs fees, duties, VAT, taxes,
          brokerage fees, and similar charges related to the return. These
          amounts are non-refundable and we do not reimburse charges imposed
          by customs authorities.
        </li>
        <li>
          <strong>Condition / Packaging:</strong> Items must be returned
          unused and in original packaging. We strongly recommend using a
          trackable shipping service and keeping proof of shipment. We
          cannot issue a refund until the return is received and inspected.
        </li>
      </ul>

      <h2>4. Mobile Appliance Repair Services</h2>
      <p>
        {business.name} LLC provides professional mobile repair services for
        various appliance brands.
      </p>
      <ul>
        <li>
          <strong>Service Call Fees:</strong> The initial service call fee
          (diagnostic fee) is non-refundable once the technician has arrived
          at your location.
        </li>
        <li>
          <strong>Labor and Parts:</strong> Labor charges are non-refundable
          once the repair is completed. Parts installed during a repair are
          subject to the manufacturer&rsquo;s warranty. If a repair fails due
          to a faulty part within the warranty period, we will replace the
          part, but additional labor fees may apply depending on the
          specific service agreement.
        </li>
      </ul>

      <h2>5. Damaged or Defective Items (What To Do)</h2>
      <p>
        We take great care in handling our inventory. However, if your item
        arrives damaged or is found to be defective:
      </p>
      <ul>
        <li>
          <strong>Report It Quickly:</strong> You must report any
          visible/physical damage (dents, scratches, broken parts, shipping
          damage, missing items, etc.) within 24 hours of delivery or
          pickup. For small shipped items, please report issues as soon as
          possible and include photos of the product and packaging.
        </li>
        <li>
          <strong>How to Report:</strong> Contact us with your order number,
          a description of the issue, and clear photos (and/or video when
          helpful). Please keep the packaging until we confirm next steps.
        </li>
        <li>
          <strong>Large Appliances — Local Delivery Exception:</strong> For
          locally delivered major appliances, please inspect the appliance
          at delivery (when possible). If damage is noticed, note it
          immediately and contact us within the 24-hour window so we can
          help fast.
        </li>
        <li>
          <strong>Special Handling:</strong> If an appliance must be
          disassembled, unstacked, unhooked, or otherwise requires special
          handling to retrieve it, additional service charges may apply
          (we&rsquo;ll confirm before scheduling).
        </li>
        <li>
          <strong>Resolution Options:</strong> If an item is confirmed
          defective or damaged, we may offer (at our discretion, depending on
          inventory and the issue) a repair, replacement, or refund.
        </li>
        <li>
          <strong>Defective Large Appliances:</strong> For defective large
          appliances, we will first attempt to resolve the issue through our
          mobile repair service and/or the manufacturer&rsquo;s warranty
          process when applicable. If the unit cannot be repaired and is
          deemed &ldquo;Dead on Arrival&rdquo; (DOA) or otherwise qualifies,
          we will offer a replacement or a full refund at our discretion.
        </li>
      </ul>

      <h2>6. Non-Returnable Items (Exclusions)</h2>
      <p>The following items are strictly non-returnable:</p>
      <ul>
        <li>Gift cards.</li>
        <li>Special order items not held in our standard inventory.</li>
        <li>Items marked as &ldquo;Final Sale,&rdquo; &ldquo;Clearance,&rdquo; or &ldquo;As-Is.&rdquo;</li>
        <li>Any item not in its original condition, damaged for reasons not due to our error, or missing parts.</li>
      </ul>

      <h2>7. Refund Process (How Refunds Are Issued + Timeline)</h2>
      <p>Once your return is received (or picked up, if applicable) and inspected:</p>
      <ul>
        <li>
          <strong>Inspection &amp; Decision:</strong> We will notify you via
          email or phone of the approval or rejection of your refund.
        </li>
        <li>
          <strong>Original Payment Method:</strong> If approved, your refund
          will be issued to your original method of payment (for example,
          the same card or payment provider used at checkout). We do not
          issue refunds to a different card/account unless required by law
          or we agree in writing.
        </li>
        <li>
          <strong>Processing Timeline:</strong> After approval, refunds are
          typically processed within 7 to 10 business days. Your bank or
          card issuer may take additional time to post the credit to your
          account.
        </li>
        <li>
          <strong>Deductions (When Applicable):</strong> Any applicable
          restocking fees, non-refundable service fees (such as delivery
          already performed), or return shipping costs may be deducted from
          the refund amount as described in this Policy.
        </li>
      </ul>

      <h2>8. Restocking Fees</h2>
      <p>
        Unless an item is defective or the return is a result of our error,
        a 15% restocking fee will be deducted from your refund amount for
        all large appliance returns to cover the costs of inspection and
        administrative processing.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        This Returns &amp; Refund Policy shall be governed by and construed
        in accordance with the laws of the State of Florida, United States,
        without regard to its conflict of law provisions.
      </p>

      <h2>10. Contact Information</h2>
      <p>For any questions regarding returns or to initiate a return request, please contact us at:</p>
      <p>
        {business.name} LLC
        <br />
        {business.address.city}
        <br />
        Website: https://www.moneysaverappliances.com
        <br />
        Email: {business.email}
        <br />
        Phone: {business.phone}
      </p>
      <p>
        <strong>Tip:</strong> To help us move faster, include your order
        number, the item name, and photos (if the item is damaged or
        defective).
      </p>
    </LegalContent>
  );
}
