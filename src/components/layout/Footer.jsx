import { Link } from "react-router";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer container">
      <div className="default-card card-color-1 footer-note">
        <p>Let's Create Something Amazing Together!</p>
      </div>
      <div className="default-card card-color-1 footer-quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="default-card card-color-1 footer-social-links">
        <h2>Connect with Me</h2>
        <ul>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="default-card card-color-1 footer-copyright">
        <h2>Legal</h2>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
