import { Link } from "react-router";
import portfolioData from "../../data/portfolioData";
import "./Footer.css";

const quickLinks = [
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  const { name, email, github, linkedin } = portfolioData;

  return (
    <footer className="footer container">
      <div className="footer-grid">
        {/* CTA Card */}
        <div className="default-card card-color-2 footer-card footer-card--cta">
          <p className="footer-cta-label">Open to work</p>
          <h2 className="footer-cta-heading">
            Let's build something great together.
          </h2>
          <a href={`mailto:${email}`} className="footer-cta-btn">
            <span>Get in touch</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Quick Links Card */}
        <div className="default-card card-color-1 footer-card footer-card--links">
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
        <div className="default-card card-color-1 footer-card footer-card--social">
          <div className="card-label">
            <h3 className="section-label">Connect</h3>
          </div>
          <div className="footer-social-links">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
            >
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
            <a
              href={linkedin}
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

        {/* Copyright strip */}
        <div className="footer-copyright">
          <p className="footer-copyright-name">{name}</p>
          <p className="footer-copyright-text">
            &copy; {new Date().getFullYear()} — Built with React
          </p>
        </div>
      </div>
    </footer>
  );
}
