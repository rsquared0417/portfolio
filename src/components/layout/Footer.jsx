import { Link } from "react-router";
import { useState } from "react";
import portfolioData from "../../data/portfolioData";
import "./Footer.css";

const quickLinks = [
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  const { name, email, socialLinks, workStatus } = portfolioData;
  const [currWorkStatus, setCurrWorkStatus] = useState(workStatus[0]);

  const statusColors = {
    "Open to work": "var(--color-green)",
    "Open to collaborate": "var(--color-blue)",
    "Currently employed": "var(--color-red)",
  };

  return (
    <footer className="footer container">
      <div className="default-card card-color-2 footer-cta">
        <p
          className="footer-cta-label"
          style={{
            color: statusColors[currWorkStatus],
            borderColor: statusColors[currWorkStatus],
          }}
        >
          • {currWorkStatus}
        </p>
        <h2 className="footer-cta-heading">
          Let's build something great together.
        </h2>
        <Link to="/contact" className="button-main footer-cta-button">
          <span>Get in touch</span>
        </Link>
        <div className="footer-copyright">
          <p className="footer-copyright-name">{name}</p>
          <p className="footer-copyright-text">{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Quick Links Card */}
      <div className="default-card card-color-1 footer-links">
        <div className="card-label">
          <h3 className="section-label">Quick Links</h3>
        </div>
        <ul className="footer-links-list">
          {quickLinks.map((link) => (
            <li key={link.label} className="footer-links-item">
              <Link to={link.to} className="footer-link">
                <span>{link.label}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Card */}
      <div className="default-card card-color-1 footer-social">
        <div className="card-label">
          <h3 className="section-label">Connect</h3>
        </div>
        <div className="footer-social-links">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer-social-link"
          >
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href={`mailto:${email}`} className="footer-social-link">
            <i className="fa-regular fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
