import { ArrowRight, HandHeart, MessageCircleHeart } from "lucide-react";
import { Link } from "react-router-dom";
import { brand } from "../data/siteData";

export default function ContactCTA() {
  return (
    <section className="cta-band">
      <div>
        <span className="icon-bubble"><HandHeart size={22} /></span>
        <h2>Find the next clear step for your family.</h2>
        <p>Explore OAP and AccessOAP preparation, family resources, intake questions, and official Ontario support links in one warm place.</p>
      </div>
      <div className="cta-actions">
        <Link className="btn" to="/intake">Start Intake <ArrowRight size={18} /></Link>
        <Link className="btn btn-muted" to="/funding-impact">View Resources</Link>
        <a className="btn btn-whatsapp" href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
          <MessageCircleHeart size={18} />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
