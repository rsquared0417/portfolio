import { useState } from "react";
import "./Hero.css";
import portfolioData from "../../../data/portfolioData";

const skills = [
  "WordPress",
  "Site Maintenance",
  "Security Hardening",
  "Quality Assurance",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
];

const highlights = [
  {
    number: "150+",
    label: "Production WordPress sites managed",
  },
  {
    number: "3+",
    label: "Years in production environments",
  },
  {
    number: "40+",
    label: "Sites security hardened in a single sprint",
  },
];

const workStatus = [
  "Open to work",
  "Open to collaborate",
  "Currently employed",
];

export function Hero() {
  const { name, bio, email, github, linkedin } = portfolioData;
  const [current, setCurrent] = useState(0);
  const hasMultiple = highlights.length > 1;

  const next = () => {
    setCurrent((prev) => (prev + 1) % highlights.length);
  };

  return (
    <section className="hero-section container">
      <div className="default-card card-color-1 hero-card-hero">
        <div className="hero-card-hero-top">
          <div className="hero-card-photo-container">
            <div>RMTR</div>
          </div>
        </div>
        <div className="hero-card-hero-bottom">
          <h1 className="hero-card-hero-title">
            Crafting reliable web experiences, from WordPress to React.
          </h1>
          <div className="hero-card-hero-subtitle">
            <p className="hero-card-hero-name">{name}</p>
            <p className="hero-card-hero-work-status">{workStatus[0]}</p>
          </div>
        </div>
      </div>
      <div className="default-card card-color-1 hero-card-about">
        <div className="card-label">
          <h2 className="section-label">About</h2>
        </div>
        <div className="card-content">
          <p className="hero-card-about-bio">{bio}</p>
          <a href="/work" className="button button-about">
            <span>View my work</span>
            <i className="fa-solid fa-arrow-turn-up"></i>
          </a>
        </div>
      </div>
      <div className="default-card card-color-1 hero-card-feature">
        <div className="feature-card__content">
          <span className="feature-card__number">
            {highlights[current].number}
          </span>
          <span className="feature-card__label">
            {highlights[current].label}
          </span>
        </div>
        {hasMultiple && (
          <button className="button-round button-cv" onClick={next}>
            <i className="fa-solid fa-caret-right"></i>
          </button>
        )}
      </div>
      {/* CARD 4 — CV */}
      <div className="default-card card-color-1 hero-card-cv">
        <span className="hero-card-cv-title">CV</span>
        <a href="/cv.pdf" download className="button-round button-cv">
          <i className="fa-solid fa-caret-down"></i>
        </a>
      </div>
      {/* CARD 5 — DESIGN */}
      <div className="default-card card-color-1 hero-card-design-1">
        <h2 className="section-label">DESIGN</h2>
      </div>
      {/* CARD 6 — DESIGN 2 */}
      <div className="default-card card-color-1 hero-card-design-2">
        <h2 className="section-label">DESIGN 2</h2>
      </div>
      <div className="default-card card-color-1 hero-card-skills">
        <div className="card-label">
          <h2 className="section-label">Skills</h2>
        </div>
        <div className="card-content">
          <div className="hero-card-skills-tags">
            {skills.map((skill) => (
              <span key={skill} className="hero-card-skills-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* CARD 8 — Social */}
      <div className="default-card card-color-1 hero-card-social">
        <p className="social-card__note">Let's connect</p>
        <div className="social-card__links">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="social-card__link"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-card__link"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href={`mailto:${email}`} className="social-card__link">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a href={`mailto:${email}`} className="social-card__link">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href={`mailto:${email}`} className="social-card__link">
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
