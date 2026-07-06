import { LegalContent } from "@/components/legal-content";
import { business } from "@/lib/business";

export const metadata = {
  title: "Cookie Policy | Money Saver Appliances",
};

export default function CookiePolicyPage() {
  return (
    <LegalContent title="Cookie Policy" subtitle="Last Updated: July 5, 2026">
      <p>
        {business.name} LLC (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;) uses cookies and similar tracking technologies on
        https://www.moneysaverappliances.com (the &ldquo;Website&rdquo;).
        This Cookie Policy explains what these technologies are, why we use
        them, and your choices and rights to control them.
      </p>

      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files that a website puts on your computer or
        mobile device when you visit. They help the site remember things
        like what&rsquo;s in your cart, whether you&rsquo;re logged in, and
        your preferences.
      </p>
      <p>
        We also use similar technologies, such as pixels, web beacons, tags,
        and scripts (often used to measure traffic, understand how pages are
        used, and help with advertising). For simplicity, we refer to all of
        these as &ldquo;cookies&rdquo; in this policy.
      </p>

      <h2>2. Types of Cookies We Use</h2>
      <p>
        We may use first-party cookies (set by us) and third-party cookies
        (set by other companies we work with). The types of cookies we may
        use include:
      </p>
      <h3>Essential / Strictly Necessary</h3>
      <p>
        These cookies are required for the Website to function and cannot be
        switched off in our systems. They are usually set in response to
        actions you take, such as:
      </p>
      <ul>
        <li>Keeping items in your cart and processing checkout</li>
        <li>Logging in to your account (if available)</li>
        <li>Security, fraud prevention, and load balancing</li>
        <li>Remembering basic site settings needed to provide the service you requested</li>
      </ul>
      <p>
        Because these cookies are strictly necessary to deliver the
        Website, you generally cannot refuse them without impacting how the
        Website functions.
      </p>
      <h3>Analytics / Performance</h3>
      <p>
        These cookies help us understand how visitors use our Website (for
        example, what pages are popular, how customers move through the
        site, and whether pages load correctly). This helps us improve the
        Website and your experience. Examples may include tools like Google
        Analytics or similar analytics providers.
      </p>
      <h3>Functional</h3>
      <p>These cookies remember choices you make to improve your experience, such as:</p>
      <ul>
        <li>Preferred language</li>
        <li>Currency (especially helpful for international shoppers)</li>
        <li>Region and other display preferences</li>
      </ul>
      <h3>Targeting / Advertising (If Applicable)</h3>
      <p>
        These cookies may be used to show you more relevant ads, limit how
        many times you see an ad, measure ad performance, and build
        audiences for retargeting. If we run retargeting or similar
        advertising, these cookies may be set by us or by advertising
        partners (for example, platforms like Meta/Facebook). If we do not
        run these campaigns, this category may not be used.
      </p>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Some cookies on our Website may be set by third parties. Depending
        on what features are enabled on the Website from time to time,
        these may include:
      </p>
      <ul>
        <li>Analytics providers (e.g., Google Analytics)</li>
        <li>Advertising/retargeting providers (e.g., Meta/Facebook Pixel)</li>
        <li>Payment processors (to help securely process payments)</li>
        <li>Shipping and logistics providers (to help quote shipping, provide tracking, or validate addresses)</li>
        <li>Customer support tools (e.g., chat or ticketing tools, if enabled)</li>
      </ul>
      <p>
        Third-party cookies and technologies are governed by those third
        parties&rsquo; own privacy and cookie policies &mdash; not ours. We
        encourage you to review their policies for more details.
      </p>

      <h2>4. Cookie Consent (GDPR, CCPA, and U.S. Practices)</h2>
      <p>
        Because we sell locally and also ship small products worldwide, we
        aim to follow applicable cookie rules based on where you are
        located.
      </p>
      <ul>
        <li>
          <strong>U.S. visitors (general approach):</strong> Essential
          cookies may be used as needed to run the Website. For
          non-essential cookies (such as analytics and advertising), we may
          treat your continued use of the Website as implied consent where
          allowed by law, and we provide options to opt out/turn off
          non-essential cookies.
        </li>
        <li>
          <strong>EU/EEA/UK visitors (GDPR/ePrivacy):</strong> We will ask
          for your explicit opt-in consent before placing non-essential
          cookies (such as analytics, functional, or advertising cookies) on
          your device. Essential cookies may still be used because they are
          required for the Website to work.
        </li>
      </ul>
      <p>
        <strong>California (CCPA/CPRA):</strong> If certain cookies or
        tracking technologies are considered &ldquo;sharing&rdquo; or
        &ldquo;selling&rdquo; of personal information (as those terms are
        defined under California law), you may have the right to opt out.
        Where required, we will provide a &ldquo;Do Not Sell or Share My
        Personal Information&rdquo; option or an equivalent mechanism.
      </p>

      <h2>5. Managing Cookies</h2>
      <p>You can manage cookies in several ways:</p>
      <ul>
        <li>
          <strong>Cookie banner/settings tool (if enabled):</strong> Use our
          cookie settings to accept, reject, or customize non-essential
          cookies.
        </li>
        <li>
          <strong>Browser controls:</strong> Most browsers let you block or
          delete cookies. If you disable cookies, some features of the
          Website (like cart and checkout) may not work correctly.
        </li>
      </ul>
      <p>You can also opt out of certain interest-based advertising via:</p>
      <ul>
        <li>Digital Advertising Alliance (US): http://www.aboutads.info/choices/</li>
        <li>Your Online Choices (EU): http://www.youronlinechoices.com</li>
      </ul>

      <h2>6. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect
        changes in the cookies we use, how we run our Website, or for
        legal/regulatory reasons. The &ldquo;Last Updated&rdquo; date at the
        top shows when this policy was last changed.
      </p>

      <h2>7. Contact Information</h2>
      <p>If you have questions about cookies or this Cookie Policy, contact us at:</p>
      <p>
        Email: {business.email}
        <br />
        Phone: {business.phone}
        <br />
        {business.name} LLC
        <br />
        {business.address.city}, United States
      </p>
    </LegalContent>
  );
}
