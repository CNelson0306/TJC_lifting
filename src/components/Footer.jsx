import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  ArrowRight,
  Share2,
  Link2,
} from "lucide-react";
import tjcLogo from "../assets/tjc-logo.png";
import "./Footer.css";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "LOLER Testing", path: "/services/loler-testing" },
  { label: "Lifting Gear Supply", path: "/services/lifting-gear" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

const servicesList = [
  "LOLER Thorough Examinations",
  "Certificates Issued",
  "Collection & Delivery",
  "Chains & Slings",
  "Shackles & Lifting Eyes",
  "Wire Rope Assemblies",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={tjcLogo} alt="TJC Lifting Gear" />
            </div>
            <p className="footer__desc">
              Based in Ammanford, Wales, TJC Lifting Gear provides expert LOLER
              testing, thorough examinations, and supply of all types of lifting
              equipment.
            </p>
            <div className="footer__social">
              <a
                href="https://www.facebook.com/profile.php?id=61572823955890"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <Share2 size={15} /> Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/tjc-lifting-gear-limited/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <Link2 size={15} /> LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="footer__link">
                    <ArrowRight size={11} /> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              {servicesList.map((s) => (
                <li key={s}>
                  <span className="footer__link footer__link--plain">
                    <ArrowRight size={11} /> {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__contact">
              <li>
                <Phone size={14} />
                <a href="tel:01269593399">01269 593399</a>
              </li>
              <li>
                <Mail size={14} />
                <a href="mailto:info@tjcliftinggear.co.uk">
                  info@tjcliftinggear.co.uk
                </a>
              </li>
              <li>
                <MapPin size={14} />
                <address>
                  Unit 2, Llewellyns Court Yard,
                  <br />
                  Maesquarre Road, Ammanford,
                  <br />
                  Wales, SA18 2HQ
                </address>
              </li>
              <li>
                <Clock size={14} />
                <span>Mon–Fri: 8:00am – 5:00pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__strip">
        <div className="container footer__strip-inner">
          <span className="footer__badge footer__badge--red">
            ✓ LOLER Tested
          </span>
          <span className="footer__badge">✓ Certificates Issued</span>
          <span className="footer__badge">✓ Collection &amp; Delivery</span>
          <span className="footer__badge">✓ All Types of Lifting Gear</span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>
            © {new Date().getFullYear()} TJC Lifting Gear Ltd · Company No:
            08305727
          </span>
          <div className="footer__bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
