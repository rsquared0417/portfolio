import { useState, useEffect } from "react";
import { Link } from "react-router";
import "./Navbar.css";
import portfolioData from "../../data/portfolioData";

const navLinks = [
  { label: "About", link: "/about" },
  { label: "Experience", link: "/experience" },
  { label: "Contact", link: "/contact" },
];

export function Navbar() {
  const { shortName, role } = portfolioData;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          {shortName} / {role[2]}
        </Link>

        <nav className={`navbar-menu ${menuOpen ? "navbar-menu--open" : ""}`}>
          <ul className="navbar-list">
            {navLinks.map((link, index) => (
              <li key={index} className="navbar-item">
                <Link
                  to={link.link}
                  className="navbar-link"
                  onClick={closeMenu}
                >
                  <span className="navbar-link-label">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`navbar-hamburger ${menuOpen ? "navbar-hamburger--open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
