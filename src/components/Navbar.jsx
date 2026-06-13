import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { brand, navLinks } from "../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="brand-mark" aria-label="BrightPath home" onClick={() => setOpen(false)}>
        <span className="logo-dot">B</span>
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
        <Link className="btn btn-small" to="/intake" onClick={() => setOpen(false)}>
          Start Intake
        </Link>
      </nav>
    </header>
  );
}
