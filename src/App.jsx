import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Placeholder from "./pages/Placeholder";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/services"
            element={<Placeholder title="Our Services" />}
          />
          <Route
            path="/services/loler-testing"
            element={<Placeholder title="LOLER Testing" />}
          />
          <Route
            path="/services/lifting-gear"
            element={<Placeholder title="Lifting Gear Supply" />}
          />
          <Route
            path="/services/examinations"
            element={<Placeholder title="Thorough Examinations" />}
          />
          <Route
            path="/products"
            element={<Placeholder title="Our Products" />}
          />
          <Route
            path="/about"
            element={<Placeholder title="About TJC Lifting Gear" />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Placeholder title="Page Not Found" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
