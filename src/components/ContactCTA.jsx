import { ArrowRight, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="cta-band">
      <div>
        <span className="icon-bubble"><HandHeart size={22} /></span>
        <h2>Support a brighter path for children and families.</h2>
        <p>Explore intake, funding goals, and partnership pathways in this premium MSPixelPulse demo website.</p>
      </div>
      <div className="cta-actions">
        <Link className="btn" to="/intake">Start Intake <ArrowRight size={18} /></Link>
        <Link className="btn btn-muted" to="/funding-impact">View Funding Goals</Link>
        <Link className="btn btn-light" to="/contact">Contact Us</Link>
      </div>
    </section>
  );
}
