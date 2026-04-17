import { useState } from "react";
import { Link } from "react-router";
import "./Navbar.css";

const navLinks = [
  { label: "About", link: "/about" },
  { label: "Skills", link: "/skills" },
  { label: "Experience", link: "/experience" },
  { label: "Work", link: "/work" },
  { label: "Contact", link: "/contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          Ricky Roman / Front End Developer
        </Link>

        <nav className="navbar-links">
          <ul className={`navbar-menu ${menuOpen ? "navbar-menu--open" : ""}`}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className="navbar-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`navbar-hamburger ${menuOpen ? "navbar-hamburger--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
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
