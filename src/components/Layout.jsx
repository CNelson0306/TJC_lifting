import Navbar from './Navbar';
import Footer from './Footer';
import { LocalBusinessSchema } from './SEO';

export default function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <LocalBusinessSchema />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
