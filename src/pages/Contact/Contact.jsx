import { useState } from "react";
import portfolioData from "../../data/portfolioData";
import "./Contact.css";

const contactMethods = [
  {
    id: "email",
    label: "Email",
    description: "Best way to reach me for work inquiries.",
    icon: "fa-regular fa-envelope",
    href: (data) => `mailto:${data.email}`,
    cta: "Send an email",
  },
  {
    id: "github",
    label: "GitHub",
    description: "Check out my repositories and open source work.",
    icon: "fa-brands fa-github",
    href: (data) => data.socialLinks.github,
    cta: "View GitHub",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    description: "Connect with me professionally.",
    icon: "fa-brands fa-linkedin",
    href: (data) => data.socialLinks.linkedin,
    cta: "View LinkedIn",
  },
];

export function Contact() {
  const { workStatus } = portfolioData;
  const [currWorkStatus, setCurrWorkStatus] = useState(workStatus[0]);
  const statusColors = {
    "Open to work": "var(--color-green)",
    "Open to collaborate": "var(--color-blue)",
    "Currently employed": "var(--color-red)",
  };

  return (
    <main className="contact-page container">
      {/* Header */}
      <div className="contact-header">
        <div className="contact-header__status">
          <p
            className="footer-cta-label"
            style={{
              color: statusColors[currWorkStatus],
              borderColor: statusColors[currWorkStatus],
            }}
          >
            • {currWorkStatus}
          </p>
        </div>
        <h1 className="contact-header__headline">Let's Work Together</h1>
        <p className="contact-header__sub">
          I'm currently open to front-end roles and freelance opportunities.
          Whether you have a project in mind or just want to connect — feel free
          to reach out.
        </p>
      </div>

      {/* Contact method cards */}
      <div className="contact-methods">
        {contactMethods.map((method) => (
          <a
            key={method.id}
            href={method.href(portfolioData)}
            target={method.id !== "email" ? "_blank" : undefined}
            rel={method.id !== "email" ? "noreferrer" : undefined}
            className="default-card card-color-1 contact-card"
          >
            <div className="contact-card__top">
              <div className="contact-card__icon">
                <i className={method.icon}></i>
              </div>
              <h2 className="contact-card__label">{method.label}</h2>
            </div>
            <p className="contact-card__description">{method.description}</p>
            <div className="contact-card__footer">
              <span className="contact-card__cta">{method.cta}</span>
              <i className="fa-solid fa-arrow-right contact-card__arrow"></i>
            </div>
          </a>
        ))}
      </div>

      {/* Availability card */}
      <div className="default-card card-color-2 contact-availability">
        <div className="contact-availability__left">
          <p className="contact-availability__label">Current Status</p>
          <h2 className="contact-availability__heading">
            Open to Front-End, Web Developer and WordPress Roles.
          </h2>
          <p className="contact-availability__body">
            Based in the Philippines. Available for remote work and open to
            relocation opportunities. Response time is usually within 24–48
            hours.
          </p>
        </div>
        <div className="contact-availability__right">
          <div className="contact-availability__stat">
            <span className="contact-availability__stat-value">24–48h</span>
            <span className="contact-availability__stat-label">
              Average response time
            </span>
          </div>
          <div className="contact-availability__stat">
            <span className="contact-availability__stat-value">
              Remote / Hybrid
            </span>
            <span className="contact-availability__stat-label">
              Work preference
            </span>
          </div>
          <div className="contact-availability__stat">
            <span className="contact-availability__stat-value">PH</span>
            <span className="contact-availability__stat-label">
              Based in Philippines
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
