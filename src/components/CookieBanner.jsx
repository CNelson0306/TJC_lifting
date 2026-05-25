import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

const COOKIE_KEY = 'tjc_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
    // Google Analytics will be initialised here when you add it
    // e.g. window.gtag('consent', 'update', { analytics_storage: 'granted' });
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, 'essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__text">
          <p>
            We use cookies to improve your experience on our website. Some are essential for the site to work,
            others help us understand how you use it.{' '}
            <Link to="/privacy" className="cookie-banner__link">Privacy Policy</Link>
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button className="btn btn-ghost cookie-banner__decline" onClick={handleDecline}>
            Essential Only
          </button>
          <button className="btn btn-primary cookie-banner__accept" onClick={handleAccept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

// Export a helper so other components can check consent
export function hasAnalyticsConsent() {
  return localStorage.getItem(COOKIE_KEY) === 'accepted';
}
