import { ClipboardList, HandHeart, Layers3, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MobileBottomBar() {
  return (
    <nav className="mobile-bar" aria-label="Mobile quick actions">
      <NavLink to="/programs"><Layers3 size={18} />Programs</NavLink>
      <NavLink to="/intake"><ClipboardList size={18} />Intake</NavLink>
      <NavLink to="/funding-impact"><HandHeart size={18} />Funding</NavLink>
      <NavLink to="/contact"><Mail size={18} />Contact</NavLink>
    </nav>
  );
}
