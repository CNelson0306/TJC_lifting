import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Placeholder({ title }) {
  return (
    <section className="section" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-eyebrow">Coming Soon</span>
        <h1 className="section-title" style={{ marginBottom: 16 }}>{title}</h1>
        <p className="section-body" style={{ margin: '0 auto 32px' }}>
          This page is being built. Check back soon.
        </p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
