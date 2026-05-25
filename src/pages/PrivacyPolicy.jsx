import "./Legal.css";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  return (
    <div className="legal">
      <SEO
        title="Privacy Policy | TJC Lifting Gear"
        description="Privacy Policy for TJC Lifting Gear Ltd. How we collect, use and protect your personal data in accordance with UK GDPR."
        path="/privacy"
      />
      <div className="legal__hero">
        <div className="container">
          <span className="section-eyebrow">Legal</span>
          <h1 className="section-title">Privacy Policy</h1>
          <p className="legal__last-updated">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="container legal__body">
        <section className="legal__section">
          <h2>1. Who We Are</h2>
          <p>
            TJC Lifting Gear Ltd ("we", "our", "us") is a company registered in
            England and Wales (Company No: 08305727), with our principal place
            of business at Unit 2, Llewellyns Court Yard, Maesquarre Road,
            Ammanford, Wales, SA18 2HQ.
          </p>
          <p>
            We are committed to protecting and respecting your privacy. This
            policy explains how we collect, use, and safeguard your personal
            data when you visit our website or contact us.
          </p>
        </section>

        <section className="legal__section">
          <h2>2. What Data We Collect</h2>
          <p>We may collect and process the following personal data:</p>
          <ul>
            <li>
              <strong>Contact information</strong> — your name, email address,
              phone number, and company name when you contact us via our contact
              form or by email.
            </li>
            <li>
              <strong>Enquiry details</strong> — information you provide when
              requesting a quote or asking about our services.
            </li>
            <li>
              <strong>Usage data</strong> — technical information about how you
              use our website, including your IP address, browser type, and
              pages visited (collected via cookies).
            </li>
          </ul>
        </section>

        <section className="legal__section">
          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data to:</p>
          <ul>
            <li>
              Respond to your enquiries and provide the services you have
              requested
            </li>
            <li>
              Send you quotes, certificates, and other documentation related to
              our services
            </li>
            <li>
              Maintain records required for LOLER compliance and examination
              certificates
            </li>
            <li>Improve our website and services</li>
            <li>Comply with our legal obligations</li>
          </ul>
          <p>
            We will not use your data for marketing purposes without your
            explicit consent, and we will never sell your personal data to third
            parties.
          </p>
        </section>

        <section className="legal__section">
          <h2>4. Legal Basis for Processing</h2>
          <p>We process your personal data on the following legal bases:</p>
          <ul>
            <li>
              <strong>Contract</strong> — where processing is necessary to
              provide our services to you
            </li>
            <li>
              <strong>Legitimate interests</strong> — to respond to enquiries
              and improve our services
            </li>
            <li>
              <strong>Legal obligation</strong> — where we are required to
              retain records under LOLER 1998 or other applicable legislation
            </li>
            <li>
              <strong>Consent</strong> — where you have given us explicit
              permission to contact you
            </li>
          </ul>
        </section>

        <section className="legal__section">
          <h2>5. Data Retention</h2>
          <p>
            We retain your personal data for as long as necessary to fulfil the
            purposes for which it was collected. LOLER examination records are
            retained for a minimum of 2 years as required by regulation. General
            enquiry data is retained for up to 3 years.
          </p>
        </section>

        <section className="legal__section">
          <h2>6. Cookies</h2>
          <p>
            Our website may use cookies to improve your browsing experience.
            Cookies are small text files stored on your device. We use:
          </p>
          <ul>
            <li>
              <strong>Essential cookies</strong> — required for the website to
              function correctly
            </li>
            <li>
              <strong>Analytics cookies</strong> — to understand how visitors
              use our site (if applicable)
            </li>
          </ul>
          <p>
            You can control cookies through your browser settings at any time.
          </p>
        </section>

        <section className="legal__section">
          <h2>7. Sharing Your Data</h2>
          <p>
            We do not sell or rent your personal data. We may share your data
            with trusted third parties only where necessary, such as:
          </p>
          <ul>
            <li>IT service providers who host or maintain our website</li>
            <li>Professional advisers such as accountants or solicitors</li>
            <li>Regulatory or law enforcement bodies where required by law</li>
          </ul>
        </section>

        <section className="legal__section">
          <h2>8. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (where legally permissible)</li>
            <li>Object to or restrict our processing of your data</li>
            <li>Request a portable copy of your data</li>
            <li>
              Withdraw consent at any time (where processing is based on
              consent)
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:info@tjclifting.co.uk">info@tjclifting.co.uk</a>. We
            will respond within 30 days.
          </p>
        </section>

        <section className="legal__section">
          <h2>9. Complaints</h2>
          <p>
            If you are unhappy with how we handle your personal data, you have
            the right to lodge a complaint with the Information Commissioner's
            Office (ICO) at{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              ico.org.uk
            </a>{" "}
            or by calling 0303 123 1113.
          </p>
        </section>

        <section className="legal__section">
          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated date. We encourage you
            to review this policy periodically.
          </p>
        </section>

        <section className="legal__section">
          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@tjclifting.co.uk">info@tjclifting.co.uk</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:01269593399">01269 593399</a>
            </li>
            <li>
              <strong>Post:</strong> TJC Lifting Gear Ltd, Unit 2, Llewellyns
              Court Yard, Maesquarre Road, Ammanford, Wales, SA18 2HQ
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
