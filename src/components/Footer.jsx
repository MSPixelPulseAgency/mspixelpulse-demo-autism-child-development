import { Link } from "react-router-dom";
import { brand, navLinks } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand-mark footer-brand">
            <span className="logo-dot">B</span>
            <span>{brand.shortName}</span>
          </div>
          <p>{brand.tagline}</p>
          <p>{brand.location}<br />{brand.phone}<br />{brand.email}</p>
        </div>
        <div>
          <h3>Pages</h3>
          {navLinks.slice(0, 8).map((item) => (
            <Link key={item.path} to={item.path}>{item.label}</Link>
          ))}
          <Link to="/partners">Community Partners</Link>
          <Link to="/faq">FAQ</Link>
        </div>
        <div>
          <h3>Demo Safety</h3>
          <p>This is a fictional demo website created by MSPixelPulseAgency. BrightPath Autism & Child Development Center is a placeholder brand for demonstration purposes.</p>
          <p>This website does not provide medical, clinical, legal, financial, or therapeutic advice. Families should consult qualified professionals for assessment, diagnosis, therapy, and support decisions.</p>
          <p>Funding goals, impact numbers, programs, and partnership details are placeholders only. Do not submit real personal health information through demo forms.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MSPixelPulse demo concept.</span>
        <span>Accessible, demo-safe, and funding-ready layout.</span>
      </div>
    </footer>
  );
}
