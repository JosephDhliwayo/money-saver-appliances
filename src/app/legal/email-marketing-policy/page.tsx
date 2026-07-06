import { LegalContent } from "@/components/legal-content";
import { business } from "@/lib/business";

export const metadata = {
  title: "Email Marketing & Anti-Spam Policy | Money Saver Appliances",
};

export default function EmailMarketingPolicyPage() {
  return (
    <LegalContent title="Email Marketing & Anti-Spam Policy" subtitle="Effective Date: July 5, 2026">
      <p>
        {business.name} LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) respects your inbox. This Email Marketing &amp;
        Anti-Spam Policy explains how we handle commercial email
        communications and how we comply with applicable anti-spam and
        privacy laws, including the CAN-SPAM Act (United States), CASL
        (Canada), and GDPR (European Union), since we sell locally and ship
        certain small products worldwide. This policy applies to all
        commercial email communications sent by or on behalf of{" "}
        {business.name} LLC.
      </p>

      <h2>1. Purpose</h2>
      <p>
        We only want to send email that you actually want to receive. We do
        not tolerate spam, and we work to keep our email marketing
        transparent, honest, and easy to stop at any time. We also follow
        compliance practices designed to meet the requirements of CAN-SPAM,
        CASL, GDPR, and other applicable laws.
      </p>

      <h2>2. Consent (Opt-In)</h2>
      <p>
        <strong>Opt-In only:</strong> We only send marketing emails to
        people who have expressly opted in (for example, during checkout,
        via a signup form, or by signing up in-store).
      </p>
      <p>
        <strong>Double opt-in (recommended):</strong> Double opt-in (where
        you confirm your subscription by clicking a link in a follow-up
        email) is a recommended best practice &mdash; especially for EU/EEA
        customers &mdash; and we may use it to help support GDPR compliance.
      </p>
      <p>
        <strong>Records of consent:</strong> We maintain records of consent
        when required. This may include the date/time of signup, the
        method used, and the source form or webpage.
      </p>

      <h2>3. What We Send</h2>
      <p>Depending on what you sign up for or request, our emails may include:</p>
      <ul>
        <li>Promotional offers and discounts</li>
        <li>New product announcements (including appliances and small items we can ship)</li>
        <li>Service reminders (when requested or relevant to your service history)</li>
        <li>Appointment confirmations and updates (for mobile repair service)</li>
      </ul>
      <p>
        <strong>Transactional (non-marketing) emails:</strong> Transactional
        emails are not marketing and are sent as needed to provide our
        services. These include order confirmations, shipping updates,
        invoices/receipts, delivery scheduling notifications, repair
        appointment confirmations/changes, and other account or service
        notices. These emails may still be sent even if you opt out of
        marketing.
      </p>

      <h2>4. Required Email Elements (CAN-SPAM Compliance)</h2>
      <p>
        Our marketing emails are designed to include the required elements
        under CAN-SPAM (and similar standards), including:
      </p>
      <ul>
        <li>Accurate &ldquo;From&rdquo; name and email address (and accurate reply-to details)</li>
        <li>Clear and accurate subject lines (not misleading)</li>
        <li>Identification that the message is an advertisement where applicable</li>
        <li>
          Our physical mailing address: {business.name} LLC,{" "}
          {business.address.street}, {business.address.city}
        </li>
        <li>A clear explanation of how to unsubscribe</li>
      </ul>

      <h2>5. Unsubscribe Mechanism (Opt-Out)</h2>
      <p>Every marketing email includes a visible, working unsubscribe link.</p>
      <ul>
        <li>
          <strong>No login, no fees:</strong> Unsubscribing will not require
          a login, and we will not charge any fees or require additional
          steps beyond what is necessary to process your request.
        </li>
        <li>
          <strong>Timing:</strong> We honor opt-out requests within ten (10)
          business days as required by CAN-SPAM, though we aim to process
          them within 48 hours.
        </li>
        <li>
          <strong>Removal from marketing lists:</strong> Once unsubscribed,
          your email address is removed from our marketing lists (we may
          keep a minimal suppression record so we don&rsquo;t accidentally
          email you again).
        </li>
      </ul>

      <h2>6. Data &amp; Privacy</h2>
      <p>
        Email addresses are collected and stored according to our{" "}
        <a href="/legal/privacy-policy">Privacy Policy</a>.
      </p>
      <ul>
        <li>We do not sell email addresses.</li>
        <li>We do not share email addresses with third parties for their own marketing.</li>
        <li>We store email data securely and limit access to authorized personnel and service providers.</li>
      </ul>

      <h2>7. Third-Party Compliance</h2>
      <p>
        If we use an email marketing or communications platform (for
        example, Mailchimp or Klaviyo), we require that provider to support
        CAN-SPAM compliant sending practices (including a working
        unsubscribe function). We also require our vendors to adhere to
        these same standards and to use your information only to send our
        authorized communications.
      </p>

      <h2>8. Penalties for Non-Compliance</h2>
      <p>
        We take compliance seriously to protect our customers and our
        business. Depending on the circumstances, non-compliance may lead
        to significant penalties, including:
      </p>
      <ul>
        <li><strong>CAN-SPAM:</strong> Fines up to $50,120 per email (amount may change over time).</li>
        <li><strong>GDPR:</strong> Fines up to &euro;20,000,000 or 4% of global annual revenue (whichever is higher).</li>
      </ul>

      <h2>9. Contact</h2>
      <p>
        If you believe you received an email from us that you did not
        request, if you are having trouble unsubscribing, or if you have
        any spam/compliance concerns, contact us at:
      </p>
      <p>
        Email: {business.email}
        <br />
        Mailing Address: {business.name} LLC, {business.address.street},{" "}
        {business.address.city}
      </p>
    </LegalContent>
  );
}
