import "./Legal.css";
import SEO from "../components/SEO";

export default function Terms() {
  return (
    <div className="legal">
      <SEO
        title="Terms & Conditions | TJC Lifting Gear"
        description="Terms and Conditions for TJC Lifting Gear Ltd. Services, pricing, payment terms and legal information."
        path="/terms"
      />
      <div className="legal__hero">
        <div className="container">
          <span className="section-eyebrow">Legal</span>
          <h1 className="section-title">Terms &amp; Conditions</h1>
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
          <h2>1. About Us</h2>
          <p>
            TJC Lifting Gear Ltd is a company registered in England and Wales
            (Company No: 08305727), with our principal place of business at Unit
            2, Llewellyns Court Yard, Maesquarre Road, Ammanford, Wales, SA18
            2HQ.
          </p>
          <p>
            These Terms and Conditions govern your use of our website and the
            services we provide. By using our website or engaging our services,
            you agree to these terms. Please read them carefully.
          </p>
        </section>

        <section className="legal__section">
          <h2>2. Our Services</h2>
          <p>TJC Lifting Gear Ltd provides the following services:</p>
          <ul>
            <li>LOLER thorough examinations of lifting equipment</li>
            <li>Issuance of examination certificates</li>
            <li>
              Collection and delivery of lifting equipment for examination
            </li>
            <li>
              Supply of lifting gear including chains, slings, shackles, hooks,
              and associated equipment
            </li>
          </ul>
          <p>
            All examinations are carried out in accordance with the Lifting
            Operations and Lifting Equipment Regulations 1998 (LOLER) and the
            Provision and Use of Work Equipment Regulations 1998 (PUWER).
          </p>
        </section>

        <section className="legal__section">
          <h2>3. Quotations and Pricing</h2>
          <ul>
            <li>
              All quotations provided are valid for 30 days from the date of
              issue unless otherwise stated.
            </li>
            <li>
              Prices are subject to change without notice until a formal order
              has been accepted.
            </li>
            <li>
              VAT will be added to all prices where applicable at the prevailing
              rate.
            </li>
            <li>
              We reserve the right to adjust pricing if the scope of work
              changes following initial assessment.
            </li>
          </ul>
        </section>

        <section className="legal__section">
          <h2>4. Orders and Acceptance</h2>
          <p>
            A contract between you and TJC Lifting Gear Ltd is formed when we
            accept your order in writing (including by email) or begin work on
            your instruction. We reserve the right to decline any order at our
            discretion.
          </p>
        </section>

        <section className="legal__section">
          <h2>5. Payment Terms</h2>
          <ul>
            <li>Payment terms will be agreed at the time of order.</li>
            <li>
              For new customers, payment may be required in full prior to work
              commencing or goods being released.
            </li>
            <li>
              Invoices are due for payment within 30 days of the invoice date
              unless otherwise agreed in writing.
            </li>
            <li>
              We reserve the right to charge interest on overdue invoices in
              accordance with the Late Payment of Commercial Debts (Interest)
              Act 1998.
            </li>
          </ul>
        </section>

        <section className="legal__section">
          <h2>6. Examination Certificates</h2>
          <ul>
            <li>
              Certificates will be issued following satisfactory completion of a
              LOLER thorough examination.
            </li>
            <li>
              Where equipment is found to be defective or unsafe, we will notify
              you and a certificate will not be issued until the defect has been
              rectified.
            </li>
            <li>
              It is your responsibility as the equipment owner to ensure that
              any defects identified are remedied before the equipment is
              returned to service.
            </li>
            <li>
              Certificates remain the property of TJC Lifting Gear Ltd until
              full payment has been received.
            </li>
          </ul>
        </section>

        <section className="legal__section">
          <h2>7. Collection and Delivery</h2>
          <ul>
            <li>
              Where collection and delivery is agreed, we will endeavour to meet
              agreed timescales but cannot guarantee collection or delivery
              times.
            </li>
            <li>
              Risk in equipment remains with you at all times during transit
              unless otherwise agreed in writing.
            </li>
            <li>
              We recommend that you ensure your equipment is adequately insured
              during any period it is in our care.
            </li>
          </ul>
        </section>

        <section className="legal__section">
          <h2>8. Supply of Goods</h2>
          <ul>
            <li>
              All goods supplied by TJC Lifting Gear Ltd are sourced from
              reputable manufacturers and supplied with relevant documentation.
            </li>
            <li>
              It is your responsibility to ensure that goods supplied are
              appropriate for their intended use.
            </li>
            <li>
              Returns will only be accepted within 14 days of delivery and must
              be in original, unused condition with all documentation.
            </li>
            <li>
              Custom or specially ordered items cannot be returned unless they
              are faulty.
            </li>
          </ul>
        </section>

        <section className="legal__section">
          <h2>9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, TJC Lifting Gear Ltd shall
            not be liable for any indirect, consequential, or special loss
            arising from the use of our services or goods. Our total liability
            to you shall not exceed the value of the contract under which the
            claim arises.
          </p>
          <p>
            Nothing in these terms limits our liability for death or personal
            injury caused by our negligence, fraud or fraudulent
            misrepresentation, or any other liability that cannot be excluded by
            law.
          </p>
        </section>

        <section className="legal__section">
          <h2>10. Your Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>
              Provide accurate information about the equipment to be examined or
              the goods required
            </li>
            <li>
              Ensure that equipment presented for examination is reasonably
              clean and safe to handle
            </li>
            <li>
              Not return defective equipment to service until any identified
              faults have been remedied
            </li>
            <li>
              Comply with all applicable health and safety legislation in
              relation to lifting equipment
            </li>
          </ul>
        </section>

        <section className="legal__section">
          <h2>11. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, and the TJC
            Lifting Gear logo, is the property of TJC Lifting Gear Ltd and may
            not be reproduced without our prior written consent.
          </p>
        </section>

        <section className="legal__section">
          <h2>12. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of England and
            Wales. Any disputes arising from these terms or our services shall
            be subject to the exclusive jurisdiction of the courts of England
            and Wales.
          </p>
        </section>

        <section className="legal__section">
          <h2>13. Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms and Conditions at any
            time. Changes will be posted on this page with an updated date.
            Continued use of our website or services following any changes
            constitutes your acceptance of the revised terms.
          </p>
        </section>

        <section className="legal__section">
          <h2>14. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us:
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
