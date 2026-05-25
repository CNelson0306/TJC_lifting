import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import { LocalBusinessSchema } from './SEO';

export default function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <LocalBusinessSchema />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
