import { Link } from "react-router-dom";
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  Shield,
  Truck,
  FileCheck,
  Package,
  ChevronRight,
} from "lucide-react";
import "./Home.css";
import SEO from "../components/SEO";

const services = [
  {
    icon: <FileCheck size={28} />,
    title: "LOLER Examinations",
    desc: "Statutory thorough examinations of all lifting equipment under LOLER 1998, carried out by qualified inspectors.",
    link: "/services/loler-testing",
  },
  {
    icon: <Shield size={28} />,
    title: "Certification",
    desc: "Official certificates issued promptly after every examination, keeping you legally compliant and audit-ready.",
    link: "/services/examinations",
  },
  {
    icon: <Truck size={28} />,
    title: "Collection & Delivery",
    desc: "Flexible collection and delivery across South Wales and surrounding regions. We work around your schedule.",
    link: "/services/loler-testing",
  },
  {
    icon: <Package size={28} />,
    title: "Gear Supply",
    desc: "We supply all types of lifting gear. Chains, slings, shackles, hooks, lever blocks, wire rope and more.",
    link: "/services/lifting-gear",
  },
];

const products = [
  "Chains",
  "Slings",
  "Shackles",
  "Lifting Eyes",
  "Hoist Rings",
  "Hooks",
  "Lever Blocks",
  "Wire Rope Assemblies",
];

const reasons = [
  "Qualified & experienced LOLER inspectors",
  "Fast certificate turnaround",
  "Competitive, transparent pricing",
  "Locally based. Fast response across South Wales",
  "Supply of quality lifting gear",
  "Friendly, professional service",
];

export default function Home() {
  return (
    <>
      <SEO
        title="TJC Lifting Gear | LOLER Testing & Lifting Equipment Wales"
        description="Expert LOLER thorough examinations, certification and supply of all types of lifting gear. Based in Ammanford, serving Carmarthenshire, South and West Wales."
        keywords="LOLER testing Wales, lifting gear Ammanford, LOLER examination Carmarthenshire, lifting equipment South Wales, lifting gear supply West Wales"
        path="/"
      />
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__eyebrow">Based in Ammanford, Wales</span>
            <h1 className="hero__title">
              Lifting Gear &amp;
              <br />
              <span className="hero__title--red">LOLER Testing</span>
              <br />
              You Can Trust
            </h1>
            <p className="hero__subtitle">
              TJC Lifting Gear provides expert LOLER examinations,
              certification, and supply of lifting equipment to businesses
              across South Wales and beyond.
            </p>
            <div className="hero__actions">
              <a href="tel:01269593399" className="btn btn-primary">
                <Phone size={15} /> 01269 593399
              </a>
              <Link to="/services" className="btn btn-outline">
                Our Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div className="hero__badges">
            <div className="hero__badge">
              <CheckCircle2 size={20} />
              <span>LOLER Certified</span>
            </div>
            <div className="hero__badge">
              <CheckCircle2 size={20} />
              <span>Certificates Issued</span>
            </div>
            <div className="hero__badge">
              <CheckCircle2 size={20} />
              <span>Collection &amp; Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section--alt">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-eyebrow">What We Do</span>
              <h2 className="section-title">Our Services</h2>
            </div>
            <Link to="/services" className="btn btn-ghost">
              View All <ArrowRight size={15} />
            </Link>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <Link to={s.link} key={i} className="service-card">
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <span className="service-card__cta">
                  Learn more <ChevronRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOLER CALLOUT ── */}
      <section className="callout">
        <div className="container callout__inner">
          <div className="callout__loler">LOLER</div>
          <div className="callout__text">
            <h2>Is your lifting equipment due for inspection?</h2>
            <p>
              Under LOLER 1998, all lifting equipment must be thoroughly
              examined at regular intervals. Stay compliant and get in touch
              today.
            </p>
          </div>
          <a href="tel:01269593399" className="btn btn-outline callout__cta">
            <Phone size={15} /> Call Now
          </a>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="section">
        <div className="container">
          <span className="section-eyebrow">What We Supply</span>
          <h2 className="section-title">Lifting Gear &amp; Equipment</h2>
          <p className="section-body" style={{ marginBottom: "40px" }}>
            We stock and supply a wide range of quality lifting gear from
            trusted manufacturers, all available for LOLER examination.
          </p>
          <div className="products-list">
            {products.map((p) => (
              <div key={p} className="product-tag">
                <span className="product-tag__dot" />
                {p}
              </div>
            ))}
          </div>
          <Link to="/products" className="btn btn-ghost products-more">
            View All Products <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section--dark">
        <div className="container why__inner">
          <div className="why__text">
            <span className="section-eyebrow">Why TJC</span>
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-body">
              We're a trusted local business with the expertise and flexibility
              to keep your operations safe, compliant and running smoothly.
            </p>
            <Link to="/about" className="btn btn-primary why__cta">
              About Us <ArrowRight size={15} />
            </Link>
          </div>
          <ul className="why__list">
            {reasons.map((r, i) => (
              <li key={i} className="why__item">
                <CheckCircle2 size={18} className="why__icon" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section--alt">
        <div className="container contact__inner">
          <div>
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title">Ready to get started?</h2>
            <p className="section-body">
              Whether you need a LOLER examination, certificates, or lifting
              gear. Give us a call or drop us a message.
            </p>
          </div>
          <div className="contact__cards">
            <a href="tel:01269593399" className="contact-card">
              <div className="contact-card__label">Call Us</div>
              <div className="contact-card__value">01269 593399</div>
            </a>
            <div className="contact-card">
              <div className="contact-card__label">Visit Us</div>
              <div className="contact-card__value">
                Unit 2, Llewellyns Court Yard,
                <br />
                Ammanford, SA18 2HQ
              </div>
            </div>
            <Link to="/contact" className="contact-card contact-card--red">
              <div className="contact-card__label">Send a Message</div>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
