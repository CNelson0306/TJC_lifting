import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import tjcLogo from "../assets/tjc-logo.png";
import "./Navbar.css";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "LOLER Testing", path: "/services/loler-testing" },
      { label: "Lifting Gear Supply", path: "/services/lifting-gear" },
      { label: "Thorough Examinations", path: "/services/examinations" },
    ],
  },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimeout = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__left">
            <span className="topbar__item">
              <MapPin size={12} />
              Ammanford, Wales
            </span>
          </div>
          <a href="tel:01269593399" className="topbar__phone">
            <Phone size={13} />
            01269 593399
          </a>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            <img src={tjcLogo} alt="TJC Lifting Gear" />
          </Link>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="navbar__item"
                onMouseEnter={() => {
                  if (closeTimeout.current) clearTimeout(closeTimeout.current);
                  if (link.children) setActiveDropdown(link.label);
                }}
                onMouseLeave={() => {
                  closeTimeout.current = setTimeout(
                    () => setActiveDropdown(null),
                    150,
                  );
                }}
              >
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? "navbar__link--active" : ""}`}
                >
                  {link.label}
                  {link.children && (
                    <span style={{ fontSize: 10, marginLeft: 2 }}>▾</span>
                  )}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <ul
                    className="dropdown"
                    onMouseEnter={() => {
                      if (closeTimeout.current)
                        clearTimeout(closeTimeout.current);
                    }}
                    onMouseLeave={() => {
                      closeTimeout.current = setTimeout(
                        () => setActiveDropdown(null),
                        150,
                      );
                    }}
                  >
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <Link to={child.path} className="dropdown__link">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <a href="tel:01269593399" className="navbar__cta btn btn-primary">
            <Phone size={14} />
            Call Us
          </a>

          <button
            className="navbar__burger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
          <div className="mobile-menu__inner">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link to={link.path} className="mobile-menu__link">
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mobile-menu__children">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="mobile-menu__child"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:01269593399"
              className="btn btn-primary mobile-menu__phone"
            >
              <Phone size={15} /> 01269 593399
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
