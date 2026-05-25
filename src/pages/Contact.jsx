import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Send,
} from "lucide-react";
import "./Contact.css";
import SEO from "../components/SEO";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const openingHours = [
  { day: "Monday", hours: "8:00am – 5:00pm" },
  { day: "Tuesday", hours: "8:00am – 5:00pm" },
  { day: "Wednesday", hours: "8:00am – 5:00pm" },
  { day: "Thursday", hours: "8:00am – 5:00pm" },
  { day: "Friday", hours: "8:00am – 5:00pm" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

const today = new Date().toLocaleDateString("en-GB", { weekday: "long" });

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ from_name: "", reply_to: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact TJC Lifting Gear | Ammanford, Wales"
        description="Get in touch with TJC Lifting Gear for LOLER testing, lifting equipment examinations and gear supply in Ammanford, Carmarthenshire and across South and West Wales."
        keywords="contact TJC Lifting Gear, LOLER testing Ammanford, lifting gear Carmarthenshire, lifting equipment Wales contact"
        path="/contact"
      />

      {/* Hero */}
      <div className="contact-page__hero">
        <div className="container">
          <span className="section-eyebrow">Get In Touch</span>
          <h1 className="section-title">Contact Us</h1>
          <p className="section-body">
            Whether you need a LOLER examination, want to order lifting gear, or
            just have a question we're here to help.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container contact-page__body">
        {/* Left column — info */}
        <div className="contact-page__info">
          {/* Contact details */}
          <div className="info-card">
            <h2 className="info-card__title">Contact Information</h2>
            <ul className="info-card__list">
              <li>
                <div className="info-card__icon">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="info-card__label">Phone</span>
                  <a href="tel:01269593399" className="info-card__value">
                    01269 593399
                  </a>
                </div>
              </li>
              <li>
                <div className="info-card__icon">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="info-card__label">Email</span>
                  <a
                    href="mailto:info@tjcliftinggear.co.uk"
                    className="info-card__value"
                  >
                    info@tjclifting.co.uk{" "}
                  </a>
                </div>
              </li>
              <li>
                <div className="info-card__icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="info-card__label">Address</span>
                  <address className="info-card__value">
                    Unit 2, Llewellyns Court Yard
                    <br />
                    Maesquarre Road
                    <br />
                    Ammanford, Wales
                    <br />
                    SA18 2HQ
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div className="info-card">
            <h2 className="info-card__title">
              <Clock size={16} /> Opening Hours
            </h2>
            <ul className="hours-list">
              {openingHours.map(({ day, hours }) => {
                const isToday = day === today;
                const isClosed = hours === "Closed";
                return (
                  <li
                    key={day}
                    className={`hours-list__item ${isToday ? "hours-list__item--today" : ""}`}
                  >
                    <span className="hours-list__day">
                      {day}
                      {isToday && (
                        <span className="hours-list__today-badge">Today</span>
                      )}
                    </span>
                    <span
                      className={`hours-list__hours ${isClosed ? "hours-list__hours--closed" : ""}`}
                    >
                      {hours}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right column — form + map */}
        <div className="contact-page__right">
          {/* Contact form */}
          <div className="contact-form-card">
            <h2 className="info-card__title">Send Us a Message</h2>
            <p className="contact-form-card__sub">
              We aim to respond to all enquiries within 1 business day.
            </p>

            {status === "success" ? (
              <div className="form-feedback form-feedback--success">
                <CheckCircle2 size={28} />
                <div>
                  <strong>Message sent!</strong>
                  <p>
                    Thanks for getting in touch. We'll get back to you as soon
                    as possible.
                  </p>
                </div>
                <button
                  className="btn btn-ghost form-feedback__reset"
                  onClick={() => setStatus("idle")}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="contact-form"
                noValidate
              >
                {status === "error" && (
                  <div className="form-feedback form-feedback--error">
                    <AlertCircle size={20} />
                    <p>
                      Something went wrong. Please try again or call us on 01269
                      593399.
                    </p>
                  </div>
                )}

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="from_name">
                      Full Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="reply_to">
                      Email Address <span>*</span>
                    </label>
                    <input
                      type="email"
                      id="reply_to"
                      name="reply_to"
                      value={formData.reply_to}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="01234 567890"
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="message">
                    Message <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need — LOLER testing, lifting gear, or a general enquiry..."
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact-form__submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="contact-map">
            <iframe
              title="TJC Lifting Gear Location"
              src="https://maps.google.com/maps?q=51.7938888,-3.9731935&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
