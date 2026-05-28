import portfolioData from "../../data/portfolioData";
import "./About.css";

export function About() {
  const data = { ...portfolioData };

  return (
    <main className="about-page container">
      {/* Headline */}
      <div className="default-card card-color-1 about-headline">
        <h1 className="about-headline__text">{data.headline}</h1>
      </div>

      <div className="about-grid">
        {/* LEFT COLUMN */}
        <div className="about-col about-col--left">
          <div className="default-card card-color-1 about-card about-card--bio">
            {data.detailedBio.map((paragraph, index) => (
              <p key={index} className="about-bio">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="default-card card-color-1 about-card">
            <div className="card-label">
              <h2 className="section-label">Key Achievements</h2>
            </div>
            <div className="about-achievements">
              {data.achievements.map((item) => (
                <div key={item.label} className="about-achievement-item">
                  <span className="about-achievement-value">{item.value}</span>
                  <span className="about-achievement-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CV / Resume card */}
          <div className="default-card card-color-1 about-card">
            <div className="card-label">
              <h2 className="section-label">CV / Resume</h2>
            </div>
            <div className="about-cv-download">
              <a
                href="/documents/Ricky_Martin_Roman_Resume_General.pdf"
                download
                className="button-with-icon"
              >
                <span>Download CV</span>
                <i className="fa-solid fa-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN */}
        <div className="about-col about-col--center">
          <div className="default-card card-color-1 about-card">
            <div className="card-label">
              <h2 className="section-label">Education</h2>
            </div>
            <div className="about-education">
              {data.education.map((item) => (
                <div key={item.degree} className="about-education-item">
                  <h3 className="about-education-degree">{item.degree}</h3>
                  <p className="about-education-school">
                    {item.school}, {item.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="default-card card-color-1 about-card">
            <div className="card-label">
              <h2 className="section-label">Certifications</h2>
            </div>
            <div className="about-education">
              {data.certifications.map((item) => (
                <div key={item.title} className="about-education-item">
                  <h3 className="about-education-degree">{item.title}</h3>
                  <p className="about-education-school">
                    {item.issuer}, {item.year} ({item.status})
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="default-card card-color-1 about-card">
            <div className="card-label">
              <h2 className="section-label">Core Skills</h2>
            </div>
            <div className="about-skills">
              {data.skills.map((skill) => (
                <div key={skill.category} className="about-skill-item">
                  <h3 className="about-skill-category">{skill.category}</h3>
                  <p className="about-skill-list">{skill.skills}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="default-card card-color-1 about-card">
            <div className="card-label">
              <h2 className="section-label">Hobbies & Interests</h2>
            </div>
            <div className="card-content">
              <div className="about-hobbies">
                {data.hobbies.map((hobby) => (
                  <span key={hobby} className="about-hobby-tag">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="about-col about-col--right">
          <div className="default-card card-color-1 about-card about-card--photo">
            <div className="about-photo-placeholder">
              {data.portrait ? (
                <img
                  src={data.portrait}
                  alt={`${data.name}'s portrait`}
                  className="about-photo"
                />
              ) : (
                <span>Photo</span>
              )}
            </div>
          </div>

          <div className="about-social-grid">
            <a
              href={data.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="default-card card-color-1 about-social-card"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={data.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="default-card card-color-1 about-social-card"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href={`mailto:${data.email}`}
              className="default-card card-color-1 about-social-card"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a
              href={data.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="default-card card-color-1 about-social-card"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href={data.socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              className="default-card card-color-1 about-social-card"
            >
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
