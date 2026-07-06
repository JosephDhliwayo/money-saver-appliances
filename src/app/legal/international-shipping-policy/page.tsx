import { LegalContent } from "@/components/legal-content";
import { business } from "@/lib/business";

export const metadata = {
  title: "International Shipping Policy | Money Saver Appliances",
};

export default function InternationalShippingPolicyPage() {
  return (
    <LegalContent title="International Shipping Policy" subtitle="Last Updated: July 5, 2026">
      <p>
        Welcome to {business.name} LLC! While we are famous for our local
        appliance deals in Florida, we are thrilled to offer our smaller,
        shippable products to customers all around the globe. This
        International Shipping Policy outlines the terms and conditions
        regarding the purchase and delivery of items shipped outside of the
        United States.
      </p>

      <h2>1. Scope of International Shipping</h2>
      <p>
        International shipping is exclusively available for select
        &ldquo;small items&rdquo; (e.g., appliance accessories, small
        countertop units, and parts) that meet standard carrier size and
        weight requirements. Large appliances, including but not limited to
        refrigerators, ranges, washers, and dryers, are currently only
        available for local delivery within our Florida service area and
        are not eligible for international shipping.
      </p>

      <h2>2. Shipping Destinations (and Prohibited Destinations)</h2>
      <p>
        We currently offer shipping to most international locations
        serviced by our third-party carriers (such as UPS, FedEx, or DHL).
        However, we reserve the right to decline orders from certain
        countries or regions due to shipping restrictions, carrier
        limitations, sanctions, export/import controls, carrier
        limitations, or international trade regulations.
      </p>
      <p>
        <strong>Prohibited/Restricted Destinations:</strong> At this time,
        we do not guarantee availability to every country. We may be unable
        to ship to certain destinations due to legal restrictions, carrier
        service limitations, hazardous/prohibited item rules, or conditions
        outside our control. If we cannot ship to your destination, we will
        contact you and cancel/refund the unshipped portion of your order.
      </p>

      <h2>3. Shipping Carriers, Costs, and Estimated Delivery Times (Not Guaranteed)</h2>
      <p>
        <strong>Carriers:</strong> We ship international orders using
        reputable third-party carriers such as UPS, FedEx, DHL, and/or USPS
        (carrier options vary by destination and package size/weight).
      </p>
      <p>
        <strong>Estimated delivery times:</strong> Estimated delivery
        windows (if shown) are based on the carrier service level selected
        at checkout and your destination. Typical international delivery
        can range from about 5&ndash;25 business days after shipment, but
        timing varies widely by country, customs processing, and local
        delivery partners.
      </p>
      <p>
        <strong>Shipping costs / who pays:</strong> Shipping charges for
        international orders are paid by the customer and will be
        calculated and displayed at checkout. Rates are based on the
        destination, weight, dimensions, declared value, and selected
        service level.
      </p>
      <p>
        <em>
          Disclaimer: Shipping timelines shown at checkout or shared by our
          team are estimates only and are not guaranteed. Delays may occur
          due to carrier issues, weather, customs inspections/holds, local
          delivery conditions, or other factors outside our control.
        </em>
      </p>

      <h2>4. Customs, Duties, and Taxes</h2>
      <p>
        {business.name} LLC is not responsible for any customs and taxes
        applied to your order. All fees imposed during or after shipping are
        the responsibility of the customer (tariffs, taxes, VAT, etc.).
      </p>
      <p>
        When you place an international order, you are considered the
        &ldquo;importer of record&rdquo; and must comply with all laws and
        regulations of the country in which you are receiving the goods.
        Please contact your local customs office for further information on
        potential costs.
      </p>

      <h2>5. Order Processing Time</h2>
      <p>
        All international orders are processed within 1-3 business days.
        Orders are not shipped or delivered on weekends or holidays. If we
        are experiencing a high volume of orders, shipments may be delayed
        by a few days. If there will be a significant delay in the shipment
        of your order, we will contact you via email.
      </p>

      <h2>6. Tracking Your Shipment</h2>
      <p>
        Once your order has shipped, you will receive a Shipment
        Confirmation email containing your tracking number(s). The tracking
        number will be active within 24 hours of shipment, allowing you to
        monitor your package&rsquo;s journey to your doorstep.
      </p>

      <h2>7. Incorrect Addresses and Non-Delivery</h2>
      <p>
        It is the customer&rsquo;s responsibility to ensure the shipping
        address is entered correctly at checkout. {business.name} LLC is
        not responsible for items that are non-deliverable or lost due to an
        incorrect address. If a package is returned to us due to an
        incorrect address or because it was unclaimed, the customer will be
        responsible for the original shipping charges and any return
        shipping fees incurred.
      </p>

      <h2>8. Lost, Missing, or Damaged in Transit (What To Do)</h2>
      <p>
        We pack orders with care, but once a package is in the
        carrier&rsquo;s hands, shipping events can happen. If your order
        appears lost, is missing items, or arrives damaged, please follow
        the steps below so we can help as quickly as possible:
      </p>
      <ul>
        <li>Check tracking (and any delivery photo, if available) and confirm the delivery address is correct.</li>
        <li>Inspect the package right away and save all packaging materials, including the shipping label, box, padding, and the damaged item(s).</li>
        <li>Contact us promptly with your order number, photos of the box/label/item, and a brief description of what happened.</li>
        <li>Carrier claim/cooperation: In many cases, the carrier requires the recipient (or the shipper) to cooperate with a claim, inspection, or documentation request. We&rsquo;ll guide you through what&rsquo;s needed.</li>
      </ul>
      <p>
        <strong>Resolution:</strong> Depending on the situation (and carrier
        outcome/availability), we may assist with a replacement shipment,
        parts, or another reasonable solution. Please note that
        international deliveries can involve additional steps and time due
        to carrier and customs processes.
      </p>

      <h2>9. International Returns (Customer-Paid Return Shipping &amp; Duties)</h2>
      <p>
        Returns for international orders are subject to our standard{" "}
        <a href="/legal/returns-refund-policy">Returns &amp; Refund Policy</a>.
        Please be advised that:
      </p>
      <ul>
        <li>Return shipping is the customer&rsquo;s responsibility (including arranging the shipment and paying all return shipping charges).</li>
        <li>Any customs duties, VAT, taxes, brokerage fees, or similar import charges on the return are the customer&rsquo;s responsibility.</li>
        <li>Original shipping fees, duties, and taxes are non-refundable (unless required by applicable law).</li>
        <li>Items must be returned in their original packaging and condition (and may be subject to inspection upon arrival).</li>
      </ul>
      <p>
        If you&rsquo;d like to start an international return, please contact
        us first so we can confirm return eligibility and provide return
        instructions.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        This International Shipping Policy shall be governed by and
        construed in accordance with the laws of the State of Florida,
        United States, without regard to its conflict of law provisions.
      </p>

      <h2>11. Order Cancellations (Before Shipment)</h2>
      <p>
        If you need to cancel an international order, please contact us as
        soon as possible. If your order has not shipped yet, we&rsquo;ll do
        our best to cancel it.
      </p>
      <ul>
        <li>
          <strong>Before shipment:</strong> If we can stop the order before
          it ships, you will receive a refund to your original payment
          method (processing times vary by bank/payment provider).
        </li>
        <li>
          <strong>After shipment:</strong> If the order has already shipped,
          it can&rsquo;t be canceled and will be treated as a return (see
          Section 9). Shipping charges and any duties/taxes are not
          refundable unless required by law.
        </li>
      </ul>

      <h2>12. Contact Us (International Shipping Questions)</h2>
      <p>
        If you have any questions about international eligibility, carriers,
        customs, tracking, or returns, please reach out &mdash; our team is
        happy to help:
      </p>
      <p>
        {business.name} LLC
        <br />
        {business.address.city}
        <br />
        Email: {business.email}
        <br />
        Website: https://www.moneysaverappliances.com
      </p>
    </LegalContent>
  );
}
