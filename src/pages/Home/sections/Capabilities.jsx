import { Link } from "react-router";
import workExperience from "../../../data/workExperience";
import "./Capabilities.css";

const whatIDo = [
  {
    number: "01",
    title: "WordPress Engineering",
    description:
      "Managing and maintaining production WordPress sites through structured daily, weekly, and monthly routines — updates, backups, security, and uptime monitoring.",
  },
  {
    number: "02",
    title: "Security & Hardening",
    description:
      "Identifying vulnerabilities and applying systematic hardening — file permissions, login protection, plugin audits, and malware remediation.",
  },
  {
    number: "03",
    title: "Quality Assurance",
    description:
      "Running structured QA processes across production environments — catching regressions, visual bugs, and broken functionality before they reach end users.",
  },
  {
    number: "04",
    title: "Front-End Development",
    description:
      "Building with HTML, CSS, JavaScript, and React — focused on clean, responsive, accessible interfaces grounded in strong fundamentals.",
  },
];

export function Capabilities() {
  return (
    <section className="capabilities-section container">
      <div className="what-i-do-sub-section">
        <h2 className="section-header what-i-do-title">What I Do</h2>
        <div className="what-i-do-list">
          {whatIDo.map((item) => (
            <div key={item.number} className="what-i-do-item">
              <h3 className="card-label what-i-do-label">
                <span className="what-i-do-number">{item.number}.</span>
                {item.title}
              </h3>
              <p className="card-content">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="about-sub-section">
        <h2 className="section-header about-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-heading">
              From keeping sites alive to building them from scratch.
            </h3>
            <p className="card-content">
              I spent years managing 150+ production WordPress sites — keeping
              them stable, secure, and reliable. Now I'm applying that same
              engineering mindset to front-end development, building with React
              and core web technologies.
            </p>
          </div>
          <div className="about-misc">
            <div className="about-misc-image">
              <img
                src="/images/portrait/casual-portrait.jpeg"
                alt="Ricky Roman"
              />
            </div>
            <Link to="/about" className="about-learn-more">
              <span>Learn More</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
