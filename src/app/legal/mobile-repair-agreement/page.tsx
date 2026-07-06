import { LegalContent } from "@/components/legal-content";
import { business } from "@/lib/business";

export const metadata = {
  title: "Mobile Repair Service Agreement | Money Saver Appliances",
};

export default function MobileRepairAgreementPage() {
  return (
    <LegalContent title="Mobile Repair Service Agreement">
      <p>
        This Mobile Repair Service Agreement (&ldquo;Agreement&rdquo;) is
        entered into by and between {business.name} LLC, a Florida limited
        liability company located in Chattahoochee, FL (&ldquo;Company,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), and the
        customer (&ldquo;Customer,&rdquo; &ldquo;you,&rdquo; or
        &ldquo;your&rdquo;) requesting appliance repair services. By
        scheduling a service appointment, you agree to be bound by the
        following terms and conditions.
      </p>

      <h2>1. Scope of Services</h2>
      <p>
        {business.name} LLC provides on-site diagnostic and repair services
        for a variety of major home appliances, including but not limited to
        refrigerators, ranges, washers, dryers, and similar household
        appliances. We service many brands, including appliances you did
        not purchase from us. Our &ldquo;Mobile Repair&rdquo; service means a
        qualified technician will travel to your provided location to
        diagnose and, where feasible, repair the appliance.
      </p>
      <p>
        <strong>Service limitations:</strong> Some repairs may not be
        possible due to parts availability, appliance condition, safety
        concerns, prior improper repairs, code/safety compliance issues,
        manufacturer restrictions, or because the repair is not economically
        reasonable compared to replacement. We may stop work if we believe
        continuing would be unsafe or could cause additional damage.
      </p>

      <h2>2. Service Area, Appointments, and Access</h2>
      <ul>
        <li>
          <strong>Service Area:</strong> We provide mobile repair service in
          Chattahoochee, FL and surrounding areas. Availability, trip fees,
          and scheduling may vary by distance and route. If you are outside
          our normal service area, we may decline the job or quote an
          additional travel charge.
        </li>
        <li>
          <strong>Access to Premises:</strong> You must ensure that our
          technician has safe, legal, and clear access to the appliance and
          the premises, including parking/entry access and any required
          gate codes.
        </li>
        <li>
          <strong>Authorized Adult:</strong> An adult (18 years or older)
          must be present at the service location for the duration of the
          visit. If no authorized adult is present, the technician will not
          enter the premises, and a missed appointment fee may apply.
        </li>
        <li>
          <strong>Environment:</strong> The work area must be safe,
          sanitary, well-lit, and free from hazards (including unrestrained
          pets, pests, unsafe flooring, standing water, or exposed wiring).
        </li>
        <li>
          <strong>Appliance Accessibility / Workspace:</strong> You agree to
          have the appliance accessible (including shutoff valves/breakers
          where applicable) and to provide a clear workspace around the unit
          so our technician can safely move, open, and service the
          appliance.
        </li>
      </ul>

      <h2>3. Diagnostic Fees, Estimates, Parts, and Payment Terms</h2>
      <ul>
        <li>
          <strong>Diagnostic / Service Call Fee:</strong> A diagnostic
          (service call) fee is charged for the technician&rsquo;s travel
          and initial evaluation/diagnosis. The diagnostic fee is due even
          if (a) you choose not to proceed with the recommended repair, (b)
          the appliance is deemed unrepairable, (c) parts are
          discontinued/unavailable, or (d) the condition is caused by
          factors outside the appliance (for example, plumbing, electrical
          supply, ventilation, or installation issues).
        </li>
        <li>
          <strong>Estimate and Approval:</strong> After diagnosis, we will
          provide an estimate (or estimate range) for labor and parts when
          reasonably possible. We will not proceed with billable repair work
          beyond the diagnostic without your approval. Your approval may be
          provided verbally, by text, email, invoice approval, or other
          method we make available.
        </li>
        <li>
          <strong>Additional Findings / Revised Estimates:</strong> Estimates
          are based on the visible condition of the appliance and
          information available at the time. If additional issues are
          discovered during the repair, we will pause (when practical) and
          communicate a revised estimate for your approval before
          continuing.
        </li>
        <li>
          <strong>Parts Sourcing and Charges:</strong>
          <ul>
            <li>
              <strong>Company-Sourced Parts:</strong> We may supply parts
              directly. Parts charges may include our cost,
              shipping/handling, and a reasonable markup.
            </li>
            <li>
              <strong>Customer-Supplied Parts:</strong> If you provide
              parts, we may refuse to install them for quality,
              compatibility, safety, or warranty reasons. If we agree to
              install customer-supplied parts, you are responsible for
              correct part selection, condition, and completeness. Labor
              and diagnostic fees still apply.
            </li>
            <li>
              <strong>Special Orders / Discontinued Parts:</strong> If parts
              must be ordered to complete a repair, we may require a
              deposit or full payment for the parts prior to ordering.
              Special-order parts may be non-cancelable and non-refundable
              once ordered, unless the supplier accepts a return.
            </li>
          </ul>
        </li>
        <li>
          <strong>Payment Due Date:</strong> Unless otherwise agreed in
          writing, payment for diagnostic, approved labor, and parts is due
          at the time of service completion. For multi-visit repairs (for
          example, when parts are ordered), payment for the diagnostic is
          due on the first visit, and remaining balances are due when the
          repair is completed or when parts are delivered/installed (as
          applicable).
        </li>
        <li>
          <strong>Accepted Payment Methods:</strong> We accept major
          credit/debit cards and other payment methods as specified at the
          time of service.
        </li>
        <li>
          <strong>Non-Payment:</strong> If payment is not made when due, we
          may charge any lawful late fees, and we may suspend further
          service until the balance is paid.
        </li>
      </ul>

      <h2>4. Repair Warranty</h2>
      <ul>
        <li>
          <strong>Labor Warranty (90 Days):</strong> We provide a 90-day
          limited warranty on labor performed during the repair. If the same
          problem recurs within 90 days due to our workmanship, we will
          return to correct it at no additional labor cost. This warranty
          applies only to the specific repair performed and does not cover
          unrelated failures or new issues.
        </li>
        <li>
          <strong>Parts Warranty:</strong> Parts installed by {business.name}{" "}
          LLC are subject to the manufacturer&rsquo;s warranty (if any). We
          do not provide an independent warranty on parts. If a part fails
          under a manufacturer warranty, we will assist with reasonable
          documentation, but the manufacturer/supplier decides coverage.
        </li>
        <li>
          <strong>Warranty Exclusions:</strong> This warranty does not cover
          issues resulting from misuse/abuse, improper installation or
          venting, power surges, water quality issues, pests, normal wear
          and tear, cosmetic issues, secondary failures, or
          repairs/alterations attempted by anyone other than a technician
          from {business.name} LLC. Installing customer-supplied parts may
          limit or void warranty coverage to the extent permitted by law.
        </li>
      </ul>

      <h2>5. Limitation of Liability</h2>
      <ul>
        <li>
          <strong>Pre-existing Conditions:</strong> {business.name} LLC is
          not responsible for any damage caused by pre-existing conditions,
          including but not limited to brittle plastic, rust/corrosion,
          seized fittings, prior leaks, prior electrical issues, improper
          installation, code violations, or faulty plumbing/electrical
          wiring at the service site.
        </li>
        <li>
          <strong>Damage During Repair / Inherent Risks:</strong> Appliance
          repair sometimes involves opening sealed compartments,
          disconnecting water/gas/electrical connections, moving units for
          access, and working with aged components. You understand there is
          a risk of incidental damage or additional component failure due to
          the appliance&rsquo;s condition and normal repair procedures. We
          will use reasonable care; however, we are not responsible for
          damage or failure caused by (a) normal wear, (b) hidden defects,
          (c) manufacturer design/defects, (d) parts no longer supported, or
          (e) conditions beyond our control.
        </li>
        <li>
          <strong>Property Damage:</strong> While we take precautions to
          protect your home, we are not liable for incidental damage to
          flooring, cabinetry, counters, trim, or walls that may occur when
          moving appliances for access, unless caused by our gross
          negligence or willful misconduct.
        </li>
        <li>
          <strong>Consequential Damages:</strong> To the maximum extent
          permitted by law, {business.name} LLC shall not be liable for any
          consequential, special, indirect, or incidental damages, including
          but not limited to food loss, loss of use, lost profits, lost
          wages, water damage, mold, or spoilage resulting from appliance
          failure or service delays.
        </li>
        <li>
          <strong>Maximum Liability:</strong> To the maximum extent
          permitted by law, our total liability for any claim arising out of
          or relating to the services shall not exceed the total amount
          paid by the Customer to {business.name} LLC for the specific
          service visit (or specific repair) giving rise to the claim.
        </li>
      </ul>

      <h2>6. Cancellations and Rescheduling</h2>
      <p>
        We understand that plans change. We request at least 24
        hours&rsquo; notice for any cancellations or rescheduling.
      </p>
      <ul>
        <li>
          <strong>Late Cancellations / No-Show:</strong> Failure to provide
          sufficient notice, or failure to provide access to the technician
          at the scheduled time (including no authorized adult present), may
          result in a &ldquo;No-Show&rdquo; or late-cancellation fee up to
          the service call/diagnostic rate.
        </li>
        <li>
          <strong>Rescheduling Windows:</strong> If you need to reschedule,
          we&rsquo;ll do our best to find the next available time. Same-day
          reschedule requests may be treated as late cancellations depending
          on route and technician availability.
        </li>
        <li>
          <strong>Company Rescheduling:</strong> Occasionally, we may need
          to reschedule due to emergencies, traffic, weather, technician
          illness, or parts delays. If we reschedule, we will work with you
          to book the next available appointment.
        </li>
      </ul>

      <h2>7. Governing Law</h2>
      <p>
        This Agreement and all services provided hereunder shall be governed
        by and construed in accordance with the laws of the State of
        Florida. Any legal action or proceeding relating to this Agreement
        shall be instituted in a state or federal court in Gadsden County,
        Florida.
      </p>

      <h2>8. Entire Agreement</h2>
      <p>
        This Agreement constitutes the entire understanding between{" "}
        {business.name} LLC and the Customer regarding mobile repair
        services and supersedes all prior agreements or representations,
        whether written or oral.
      </p>
      <p>
        <strong>
          By booking a repair service with {business.name} LLC, you
          acknowledge that you have read, understood, and agreed to these
          terms.
        </strong>
      </p>
    </LegalContent>
  );
}
