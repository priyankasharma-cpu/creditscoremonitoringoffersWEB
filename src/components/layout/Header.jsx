import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Brand from "./Brand";
import { navigationLinks } from "../../data/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const key = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [open]);
  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"}>
      <div className="container nav-row">
        <Brand />
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={open ? "open" : ""}
        >
          {navigationLinks.map(([url, label]) => (
            <NavLink key={url} to={url} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link className="button nav-cta" to="/compare">
          COMPARE NOW <ArrowRight size={18} />
        </Link>
      </div>
    </header>
  );
}
