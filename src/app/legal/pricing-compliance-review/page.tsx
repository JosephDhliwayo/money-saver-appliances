import { LegalContent } from "@/components/legal-content";
import { business } from "@/lib/business";

export const metadata = {
  title: "Pricing Compliance Review | Money Saver Appliances",
};

export default function PricingComplianceReviewPage() {
  return (
    <LegalContent
      title="Pricing Compliance Review"
      subtitle="Effective Date: July 5, 2026 · Document ID: PCR-2026-001"
    >
      <p>
        <strong>Subject:</strong> Internal and External Pricing Standards
        and Regulatory Compliance
      </p>

      <h2>1. Purpose and Scope</h2>
      <p>
        The purpose of this Pricing Compliance Review is to provide a
        clear, plain-language set of pricing compliance standards for{" "}
        {business.name} LLC (&ldquo;the Company&rdquo;). It is designed to
        reduce the risk of deceptive or unfair pricing, improve price
        transparency, and help ensure consistent pricing practices across
        the Company&rsquo;s retail store, website, and advertising.
      </p>
      <p>This Review covers:</p>
      <ul>
        <li><strong>In-store pricing:</strong> Shelf tags, signage, register/POS pricing, and quotes given by staff.</li>
        <li><strong>Online pricing:</strong> Website product pages, cart/checkout pricing, and online ads.</li>
        <li>
          <strong>Sale pricing and comparison pricing:</strong>{" "}
          &ldquo;Sale,&rdquo; &ldquo;Was/Now,&rdquo; &ldquo;Compare
          at,&rdquo; &ldquo;List price,&rdquo; &ldquo;MSRP,&rdquo; &ldquo;%
          off,&rdquo; &ldquo;save $X,&rdquo; &ldquo;clearance,&rdquo; and
          similar claims.
        </li>
        <li><strong>Price matching (if offered):</strong> Requirements to ensure any price match offer is clear, consistently applied, and not misleading.</li>
        <li><strong>Fees treated as part of the advertised total price:</strong> Delivery fees, service/repair diagnostic fees, and any other add-on charges that are material to the customer&rsquo;s purchase decision.</li>
      </ul>
      <p>
        <em>
          Note: This document is for informational and internal review
          purposes only and is not legal advice. The Company should have a
          licensed Florida attorney review these standards before final
          implementation.
        </em>
      </p>

      <h2>2. Federal Regulations (FTC and Related Standards)</h2>
      <p>
        {business.name} LLC&rsquo;s pricing and advertising must comply with
        federal consumer protection standards, including Section 5 of the
        FTC Act (unfair or deceptive acts or practices) and the FTC&rsquo;s
        Guides Against Deceptive Pricing (16 CFR Part 233). Key federal
        compliance points include:
      </p>
      <ul>
        <li>
          <strong>Truth-in-advertising (general rule):</strong> Price claims
          must be truthful, not misleading, and supported by documentation
          (for example, price history, competitor price checks, and
          promotion terms).
        </li>
        <li>
          <strong>Deceptive &ldquo;former price&rdquo; / &ldquo;regular price&rdquo; claims (16 CFR Part 233):</strong>{" "}
          If the Company advertises a &ldquo;regular,&rdquo; &ldquo;was,&rdquo;
          or &ldquo;former&rdquo; price, that reference price must be a
          bona fide price &mdash; meaning it was actually offered to the
          public in good faith for a meaningful period, not created just to
          make the discount look bigger.
        </li>
        <li>
          <strong>Deceptive comparison to competitor prices (16 CFR Part 233):</strong>{" "}
          If the Company compares its price to a competitor price, the
          competitor price should be real, current, and reasonably
          verifiable in the Company&rsquo;s trade area (or clearly
          described if it&rsquo;s outside the area or online-only).
        </li>
        <li>
          <strong>MSRP / &ldquo;list price&rdquo; claims (16 CFR Part 233):</strong>{" "}
          If the Company references MSRP or &ldquo;list price,&rdquo; it
          must not suggest savings from a list price that is not actually
          used in the relevant market. &ldquo;MSRP&rdquo; should be labeled
          clearly as a manufacturer suggestion, and claims of savings should
          be supportable.
        </li>
        <li>
          <strong>Bait-and-switch prohibitions:</strong> The Company must
          not advertise a product at an attractive price to draw customers
          in and then refuse to show/sell it, claim it&rsquo;s unavailable
          when it is (or should reasonably be), steer customers to a
          higher-priced item, or impose undisclosed conditions that make
          getting the advertised deal unrealistic.
        </li>
        <li>
          <strong>Availability and quantity limitations:</strong> If stock
          is limited (or the offer is &ldquo;while supplies last&rdquo;),
          that limitation must be disclosed clearly and early in the
          customer&rsquo;s decision-making process.
        </li>
        <li>
          <strong>&ldquo;Free,&rdquo; BOGO, and similar offers:</strong> Any
          conditions (minimum purchase, limited models, exclusions,
          shipping costs, or time limits) must be disclosed clearly; the
          &ldquo;regular&rdquo; price used to describe the value of the deal
          must be legitimate.
        </li>
      </ul>

      <h2>3. Florida State Regulations (FDUTPA and Related Florida Considerations)</h2>
      <p>
        {business.name} LLC must comply with Florida consumer protection
        laws, including the Florida Deceptive and Unfair Trade Practices Act
        (FDUTPA), Fla. Stat. &sect; 501.201 et seq. Under FDUTPA, deceptive,
        misleading, unfair, or unconscionable acts or practices in trade or
        commerce may lead to enforcement actions and civil liability.
      </p>
      <p>Key Florida compliance points for pricing include:</p>
      <ul>
        <li>
          <strong>No misleading price representations:</strong> Price tags,
          ads, and online listings should not mislead customers about the
          price, savings, exclusions, or required conditions to receive an
          advertised price.
        </li>
        <li>
          <strong>Clear disclosure of material terms:</strong> Florida
          standards generally expect that material restrictions (model
          limitations, exclusions, required add-ons, short time limits, or
          &ldquo;limited quantities&rdquo;) are disclosed clearly.
        </li>
        <li>
          <strong>Consistency between advertised and charged price:</strong>{" "}
          The Company should ensure that the price a customer is charged
          matches what was advertised or displayed, subject to documented
          error correction protocols.
        </li>
        <li>
          <strong>Unconscionable pricing during declared emergencies:</strong>{" "}
          During a declared state of emergency, the Company should avoid any
          price increases on covered essential commodities that could be
          viewed as unconscionable under Florida law. (Even when appliances
          are not &ldquo;essential commodities,&rdquo; the Company should
          use extra caution in emergency periods and document any cost
          increases from suppliers.)
        </li>
      </ul>

      <h2>4. Sale Pricing Compliance (Regular vs. Sale, Comparison Pricing, and MAP)</h2>
      <p>
        To avoid deceptive pricing, sale and promotion claims must be based
        on real, supportable reference points.
      </p>
      <h3>A. &ldquo;Regular&rdquo; / &ldquo;Was&rdquo; / &ldquo;Former&rdquo; price rules</h3>
      <ul>
        <li>
          The Company should only claim a discount from a
          &ldquo;regular,&rdquo; &ldquo;was,&rdquo; or &ldquo;former&rdquo;
          price if that reference price was actually offered to the public
          in good faith and not just set for advertising purposes.
        </li>
        <li>
          The &ldquo;regular price&rdquo; should be a bona fide price
          offered for a reasonable period before the sale. Because federal
          guidance does not set a single universal number of days, the
          Company should adopt an internal rule (for example, &ldquo;regular
          price offered for at least 30 consecutive days&rdquo; or another
          attorney-approved standard) and keep records to support it.
        </li>
        <li>
          If an item is almost always sold at the &ldquo;sale&rdquo; price,
          the Company should not present the higher price as the
          &ldquo;regular&rdquo; price.
        </li>
      </ul>
      <h3>B. &ldquo;Compare at&rdquo; / competitor comparisons</h3>
      <ul>
        <li>
          Any &ldquo;compare at&rdquo; claim should identify the basis
          (Company former price, competitor price, MSRP) and must be
          supportable with documentation.
        </li>
        <li>Do not cherry-pick unrealistic competitor prices or outdated screenshots to inflate the claimed savings.</li>
      </ul>
      <h3>C. MAP (Minimum Advertised Price) compliance (major brands)</h3>
      <ul>
        <li>
          MAP is a manufacturer/distributor policy (contractual), not a
          consumer price law, but violating it can cause serious business
          consequences (loss of co-op advertising, supply restrictions, or
          termination).
        </li>
        <li>
          The Company should keep current MAP sheets/policies on file, apply
          MAP to all &ldquo;advertised&rdquo; pricing channels covered by
          the policy (website, email, online ads, printed flyers, etc.),
          confirm whether &ldquo;in-cart,&rdquo; &ldquo;at checkout,&rdquo;
          &ldquo;call for price,&rdquo; or &ldquo;in-store only&rdquo;
          language is permitted under each brand&rsquo;s MAP policy, and
          train staff not to publish sub-MAP prices in public advertising
          when prohibited.
        </li>
      </ul>

      <h2>5. Price Display Requirements (In-Store and Online)</h2>
      <p>
        The Company&rsquo;s general rule is simple: the customer should be
        able to understand the price before committing to buy.
      </p>
      <h3>A. In-store price display</h3>
      <ul>
        <li>
          <strong>Accuracy:</strong> Shelf tags and signage should match POS
          pricing. If they don&rsquo;t, staff should follow the
          Company&rsquo;s error correction protocol and document the
          correction.
        </li>
        <li>
          <strong>Clarity:</strong> Prices should be clearly associated with
          the correct product (model number/description) to avoid confusion
          when multiple similar items are displayed.
        </li>
        <li>
          <strong>Sale signage:</strong> Sale signs should include the key
          conditions (dates, exclusions, limited quantities, &ldquo;select
          models,&rdquo; etc.) in readable format.
        </li>
      </ul>
      <h3>B. Online price display</h3>
      <ul>
        <li><strong>Upfront product price:</strong> The product price should be clearly displayed on the product page.</li>
        <li><strong>Fees and totals:</strong> Shipping/delivery fees and any required fees should be disclosed before final checkout confirmation.</li>
        <li>
          <strong>Taxes:</strong> Taxes should be calculated and shown at
          checkout (or earlier where practical). If taxes are not included
          in the displayed product price, the Company should avoid implying
          &ldquo;out-the-door&rdquo; totals unless stated.
        </li>
        <li>
          <strong>Currency display:</strong> Prices should be shown in USD
          unless the site clearly offers a customer-selected currency view.
          If a currency conversion is provided, it should be labeled as an
          estimate and the final charge currency should be disclosed.
        </li>
        <li>
          <strong>International duties/taxes disclosure:</strong> For
          international shipping of small items, the Company should clearly
          state that customs duties/taxes are the customer&rsquo;s
          responsibility (unless the Company explicitly offers
          delivered-duty-paid terms).
        </li>
      </ul>

      <h2>6. Price Matching Policy Guidelines (If Offered)</h2>
      <p>
        If the Company offers price matching, it must be described
        accurately and applied consistently to avoid deceptive practices.
      </p>
      <ul>
        <li>
          <strong>Define who qualifies:</strong> public retail competitors
          (local or online), and whether marketplace sellers (third-party
          sellers) are excluded.
        </li>
        <li>
          <strong>Define what qualifies:</strong> same brand, exact model
          number, same condition (new vs. used), same included
          accessories/warranty, and in-stock/available for immediate
          purchase by the customer.
        </li>
        <li>
          <strong>Define what is excluded:</strong> clearance, closeout,
          open-box, refurbished, liquidation, bundle/contract pricing,
          membership-only pricing, limited quantity doorbusters, or pricing
          requiring financing or add-on services.
        </li>
        <li>
          <strong>Verification process:</strong> require a current ad,
          website listing, or verifiable quote; keep a screenshot or copy in
          the deal file.
        </li>
        <li>
          <strong>Timing:</strong> state whether price matches are available
          only at time of purchase (not retroactive) and whether they apply
          online, in-store, or both.
        </li>
        <li>
          <strong>No &ldquo;phantom&rdquo; price match claims:</strong> Do
          not advertise &ldquo;We match any price&rdquo; unless the Company
          truly does, because broad claims can be misleading if many
          exclusions exist.
        </li>
      </ul>

      <h2>7. Discount &amp; Promotional Pricing (BOGO, % Off, Clearance, Limited-Time)</h2>
      <p>Promotional pricing must be clear about the deal, the conditions, and the true value.</p>
      <ul>
        <li>
          <strong>BOGO / &ldquo;Free&rdquo; offers:</strong> Clearly state
          what is free (same item vs. equal/lesser value), whether the
          customer must pay for the higher-priced item, and any limits (one
          per household, select models, etc.). Avoid inflating the base
          price before running the promo.
        </li>
        <li>
          <strong>Percentage-off discounts:</strong> The Company should
          clearly state what the percentage is applied to (regular price,
          MSRP, or specific category price) and ensure the reference price
          is legitimate and documented.
        </li>
        <li>
          <strong>Clearance pricing:</strong> Mark clearance items clearly
          and disclose that quantities are limited and sales may be final
          if the Returns &amp; Refund Policy excludes clearance.
        </li>
        <li>
          <strong>Limited-time offers:</strong> If the Company says
          &ldquo;today only,&rdquo; &ldquo;this weekend,&rdquo; or
          &ldquo;limited time,&rdquo; it should be true. Include start/end
          dates and avoid repeatedly extending the same &ldquo;limited-time&rdquo;
          sale without a good-faith reason.
        </li>
        <li>
          <strong>Coupons and promo codes:</strong> Disclose material
          exclusions (brands, categories, minimum purchase, expiration,
          one-time use, non-stackable rules).
        </li>
      </ul>

      <h2>8. Recommended Compliance Procedures (Audits, Training, Records)</h2>
      <p>
        To make compliance easy and consistent, the Company should adopt
        written procedures and keep basic documentation.
      </p>
      <ul>
        <li>
          <strong>Pricing audits:</strong> Perform at least semi-annual
          audits (and spot-checks during major promotions). Include store
          signage, POS price files, and website pricing.
        </li>
        <li>
          <strong>Promotion checklist:</strong> Before launching any
          promotion, confirm start/end dates, eligible SKUs/models,
          inventory availability and raincheck approach (if any), reference
          price support, MAP compliance for applicable brands, and
          disclosure language for exclusions and limits.
        </li>
        <li>
          <strong>Staff training:</strong> Train sales, customer service,
          and marketing staff on what they can and cannot say about
          &ldquo;regular price,&rdquo; &ldquo;lowest price,&rdquo;
          &ldquo;price match,&rdquo; &ldquo;free,&rdquo; and &ldquo;limited
          time,&rdquo; when to escalate questions to management, and how to
          document price overrides and customer resolutions.
        </li>
        <li>
          <strong>Documentation and retention:</strong> Maintain organized
          records such as price history logs by SKU, promotion approval
          forms and ad copies, competitor price match verification
          screenshots, MAP policy sheets and updates, and corrected error
          logs. A reasonable retention period is at least 2 years (or
          longer if attorney-advised due to warranty or dispute timelines).
        </li>
      </ul>

      <h2>9. Liability &amp; Disclaimers (Website and In-Store)</h2>
      <p>
        The Company should include clear disclaimers to reduce confusion
        and help manage mistakes &mdash; without using disclaimers to
        &ldquo;hide&rdquo; material terms. Recommended disclaimers (use
        where appropriate):
      </p>
      <ul>
        <li>
          <strong>Pricing errors / typos:</strong> &ldquo;We make every
          effort to display accurate pricing. If a pricing or typographical
          error occurs, {business.name} LLC reserves the right to correct
          the error and cancel or refuse any order placed for an item
          listed at an incorrect price, subject to applicable law.&rdquo;
        </li>
        <li>
          <strong>Availability:</strong> &ldquo;Prices and availability are
          subject to change without notice. In-stock status is not
          guaranteed until your order is confirmed.&rdquo;
        </li>
        <li>
          <strong>Limited quantities:</strong> &ldquo;Limited quantities
          available. No rainchecks unless expressly stated.&rdquo;
        </li>
        <li>
          <strong>Taxes and fees:</strong> &ldquo;Sales tax (where
          applicable) and delivery/shipping fees are calculated at checkout
          or at time of purchase.&rdquo;
        </li>
        <li>
          <strong>Price matching disclaimer (if offered):</strong>{" "}
          &ldquo;Price match is subject to eligibility requirements and
          exclusions. Ask in-store or see our policy online for
          details.&rdquo;
        </li>
      </ul>

      <h2>10. Error Correction Protocol</h2>
      <p>
        In the event of a clerical or typographical error resulting in the
        publication of an incorrect price (online or in-store):
      </p>
      <ul>
        <li>The Company reserves the right to cancel orders placed at the erroneous price before fulfillment, as per the Terms &amp; Conditions.</li>
        <li>Corrective action must be taken within 24 hours of discovery to update the website and point-of-sale systems.</li>
        <li>Customers affected by pricing errors shall be notified immediately and offered the option to proceed at the correct price or receive a full refund.</li>
      </ul>

      <h2>11. Audit and Review Frequency</h2>
      <p>
        {business.name} LLC shall conduct a pricing audit on a semi-annual
        basis. This review will include:
      </p>
      <ul>
        <li>Verification of current MSRP/MAP data from suppliers.</li>
        <li>Assessment of local competitor pricing to ensure &ldquo;Small Store Prices&rdquo; remain accurate.</li>
        <li>Evaluation of international shipping cost-to-charge ratios to ensure global customers are not overcharged.</li>
      </ul>

      <h2>12. Authorization</h2>
      <p>
        This Pricing Compliance Review has been reviewed and approved for
        implementation by the Company Owner.
      </p>
      <p>
        King JAS
        <br />
        CEO / Owner
        <br />
        {business.name} LLC
      </p>
    </LegalContent>
  );
}
