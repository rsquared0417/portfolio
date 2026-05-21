import { useState } from "react";
import "./Hero.css";
import portfolioData from "../../../data/portfolioData";

export function Hero() {
  const data = { ...portfolioData };

  const [currentHighlight, setCurrentHighlight] = useState(0);
  const hasMultipleHighlights = data.achievements.length > 1;
  const next = () => {
    setCurrentHighlight((prev) => (prev + 1) % data.achievements.length);
  };

  return (
    <section className="hero-section container">
      {/* CARD 1 — HERO */}
      <div className="default-card card-color-1 hero-card-hero">
        <div className="hero-card-hero-top">
          <div className="hero-card-photo-container">
            <img src={data.portrait} alt={data.name} />
          </div>
        </div>
        <div className="hero-card-hero-bottom">
          <h1 className="hero-card-hero-title">{data.tagline}</h1>
          <div className="hero-card-hero-subtitle">
            <p className="hero-card-hero-name">{data.name}</p>
            <p className="hero-card-hero-work-status">{data.workStatus[0]}</p>
          </div>
        </div>
      </div>
      {/* CARD 2 — ABOUT */}
      <div className="default-card card-color-1 hero-card-about">
        <div className="card-label">
          <h2 className="section-label">About</h2>
        </div>
        <div className="card-content">
          <p className="hero-card-about-bio">{data.bio}</p>
          <a href="/work" className="button button-about">
            <span>View my work</span>
            <i className="fa-solid fa-arrow-turn-up"></i>
          </a>
        </div>
      </div>
      {/* CARD 3 — HIGHLIGHTS */}
      <div className="default-card card-color-1 hero-card-feature">
        <div className="feature-card__content">
          <span className="feature-card__number">
            {data.achievements[currentHighlight].value}
          </span>
          <span className="feature-card__label">
            {data.achievements[currentHighlight].label}
          </span>
        </div>
        {/* Feature card button */}
        {hasMultipleHighlights && (
          <button className="button-feature" onClick={next}>
            <i className="fa-solid fa-caret-right"></i>
          </button>
        )}
      </div>
      {/* CARD 4 — CV */}
      <div className="default-card card-color-1 hero-card-cv">
        <span className="hero-card-cv-title">CV</span>
        {/* CV button */}
        <a href="/cv.pdf" download className="button-cv">
          <i className="fa-solid fa-arrow-down"></i>
          <span>Download</span>
        </a>
      </div>
      {/* CARD 5 — DESIGN 1*/}
      <div className="default-card card-color-1 hero-card-design-1">
        <img src="/images/design-images/design-1.jpg" alt="Design 1" />
      </div>
      {/* CARD 6 — DESIGN 2 */}
      <div className="default-card card-color-1 hero-card-design-2">
        <img src="/images/design-images/design-2.jpeg" alt="Design 2" />
      </div>
      {/* CARD 7 — SKILLS */}
      <div className="default-card card-color-1 hero-card-skills">
        <div className="card-label">
          <h2 className="section-label">Skills</h2>
        </div>
        <div className="card-content">
          <div className="hero-card-skills-tags">
            {data.coreSkills.map((skill) => (
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
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="social-card__link"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-card__link"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href={`mailto:${data.email}`} className="social-card__link">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a href={`mailto:${data.email}`} className="social-card__link">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href={`mailto:${data.email}`} className="social-card__link">
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
