import { Link } from "react-router-dom";
import { brand, navLinks } from "../data/siteData";
import { HeartHandshake, MessageCircleHeart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand-mark footer-brand">
            <span className="logo-dot" aria-hidden="true"><HeartHandshake size={23} /></span>
            <span>{brand.shortName}</span>
          </div>
          <p>{brand.tagline}</p>
          <p>{brand.location}<br />{brand.phone}<br />{brand.email}</p>
          <a className="footer-whatsapp" href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
            <MessageCircleHeart size={18} />
            Chat on WhatsApp
          </a>
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
          <h3>Resource Safety</h3>
          <p>BrightPath is a fictional brand concept. The autism, Ontario Autism Program, AccessOAP, DTC, SSAH, ACSD, and Autism Ontario links point families toward official or reliable resources.</p>
          <p>This website does not provide medical, clinical, legal, tax, financial, or therapeutic advice. Families should consult qualified professionals for assessment, diagnosis, therapy, tax credits, funding, and support decisions.</p>
          <p>Do not submit personal health information through these presentation forms unless a privacy-reviewed production workflow is connected.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MSPixelPulse concept site.</span>
        <span>Ontario-focused, accessible, resource-forward layout.</span>
      </div>
    </footer>
  );
}
