import { HeartHandshake, Menu, MessageCircleHeart, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { brand, navLinks } from "../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="brand-mark" aria-label="BrightPath home" onClick={() => setOpen(false)}>
        <span className="logo-dot" aria-hidden="true">
          <HeartHandshake size={23} />
        </span>
        <span>{brand.shortName}</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main navigation">
        {navLinks.map((item) => (
          <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)}>
            {item.label}
          </NavLink>
        ))}
        <a className="btn btn-whatsapp btn-small nav-whatsapp" href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
          <MessageCircleHeart size={16} />
          WhatsApp
        </a>
        <Link className="btn btn-small nav-intake" to="/intake" onClick={() => setOpen(false)}>
          Start Intake
        </Link>
      </nav>
    </header>
  );
}
