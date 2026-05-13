import portfolioData from "../../data/portfolioData";
import "./About.css";

export function About() {
  const {
    name,
    headline,
    bio,
    email,
    github,
    linkedin,
    education,
    certifications,
    achievements,
    coreSkills,
  } = portfolioData;

  return (
    <main className="about-page container">
      {/* Headline */}
      <div className="default-card card-color-1 about-headline">
        <h1 className="about-headline__text">{headline}</h1>
      </div>

      {/* Three column grid */}
      <div className="about-grid">
        {/* LEFT COLUMN */}
        <div className="about-col about-col--left">
          {/* Bio */}
          <div className="default-card card-color-1 about-card about-card--bio">
            <p className="about-bio">{bio}</p>
          </div>

          {/* Key Achievements */}
          <div className="default-card card-color-1 about-card">
            <div className="card-label">
              <h2 className="section-label">Key Achievements</h2>
            </div>
            <div className="about-achievements">
              {achievements.map((item) => (
                <div key={item.label} className="about-achievement-item">
                  <span className="about-achievement-value">{item.value}</span>
                  <span className="about-achievement-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CENTER COLUMN */}
        <div className="about-col about-col--center">
          {/* Education */}
          <div className="default-card card-color-1 about-card">
            <div className="card-label">
              <h2 className="section-label">Education</h2>
            </div>
            <div className="about-education">
              {education.map((item) => (
                <div key={item.degree} className="about-education-item">
                  <h3 className="about-education-degree">{item.degree}</h3>
                  <p className="about-education-school">
                    {item.school}, {item.year}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="card-label"
              style={{
                borderTop: "1px solid var(--color-border)",
                borderBottom: "none",
              }}
            >
              <h2 className="section-label">Certifications</h2>
            </div>
            <div className="about-education">
              {certifications.map((item) => (
                <div key={item.title} className="about-education-item">
                  <h3 className="about-education-degree">{item.title}</h3>
                  <p className="about-education-school">
                    {item.issuer}, {item.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div className="default-card card-color-1 about-card">
            <div className="card-label">
              <h2 className="section-label">Core Skills</h2>
            </div>
            <div className="about-skills">
              {coreSkills.map((item) => (
                <div key={item.category} className="about-skill-item">
                  <h3 className="about-skill-category">{item.category}</h3>
                  <p className="about-skill-list">{item.skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="about-col about-col--right">
          {/* Photo */}
          <div className="default-card card-color-1 about-card about-card--photo">
            <div className="about-photo-placeholder">
              <span>Photo</span>
            </div>
          </div>

          {/* Social grid */}
          <div className="about-social-grid">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="default-card card-color-1 about-social-card"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="default-card card-color-1 about-social-card"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href={`mailto:${email}`}
              className="default-card card-color-1 about-social-card"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="default-card card-color-1 about-social-card"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="default-card card-color-1 about-social-card"
            >
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              className="default-card card-color-1 about-social-card"
            >
              <i className="fa-brands fa-behance"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
