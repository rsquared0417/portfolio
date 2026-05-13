import { useParams, Link } from "react-router";
import workExperience from "../../data/workExperience";
import "./ExperienceSingle.css";

export function ExperienceSingle() {
  const { slug } = useParams();
  const item = workExperience.find((exp) => exp.id === slug);

  if (!item) {
    return (
      <main className="exp-single-notfound container">
        <p>Experience not found.</p>
        <Link to="/experience" className="exp-single-back">
          ← Back to Experience
        </Link>
      </main>
    );
  }

  return (
    <main className="exp-single container">
      {/* Back link */}
      <Link to="/experience" className="exp-single-back">
        <i className="fa-solid fa-arrow-left"></i>
        <span>Back to Experience</span>
      </Link>

      {/* Header */}
      <div className="default-card card-color-1 exp-single-header">
        <div className="exp-single-header__top">
          <div className="exp-single-icon">{item.role.charAt(0)}</div>
          <div className="exp-single-heading">
            <h1 className="exp-single-role">{item.role}</h1>
            <p className="exp-single-company">
              {item.company} · {item.location}
            </p>
          </div>
          <span className="exp-single-type">{item.type}</span>
        </div>

        <div className="exp-single-meta">
          <div className="exp-single-meta-item">
            <span className="exp-single-meta-label">Duration</span>
            <span className="exp-single-meta-value">{item.duration}</span>
          </div>
          <div className="exp-single-meta-item">
            <span className="exp-single-meta-label">Location</span>
            <span className="exp-single-meta-value">{item.location}</span>
          </div>
          <div className="exp-single-meta-item">
            <span className="exp-single-meta-label">Type</span>
            <span className="exp-single-meta-value">{item.type}</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="default-card card-color-1 exp-single-section">
        <div className="card-label">
          <h2 className="section-label">Overview</h2>
        </div>
        <div className="card-content">
          <p className="exp-single-summary">{item.shortSummary}</p>
        </div>
      </div>

      {/* Highlights */}
      <div className="default-card card-color-1 exp-single-section">
        <div className="card-label">
          <h2 className="section-label">Key Responsibilities</h2>
        </div>
        <div className="exp-single-highlights">
          {item.highlights.map((h, index) => (
            <div key={h.title} className="exp-single-highlight">
              <div className="exp-single-highlight__number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="exp-single-highlight__body">
                <h3 className="exp-single-highlight__title">{h.title}</h3>
                <p className="exp-single-highlight__desc">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="default-card card-color-1 exp-single-section">
        <div className="card-label">
          <h2 className="section-label">Tools & Technologies</h2>
        </div>
        <div className="card-content">
          <div className="exp-single-tools">
            {item.tools.map((tool) => (
              <span key={tool} className="exp-single-tool-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="exp-single-footer">
        <Link to="/experience" className="exp-single-footer-btn">
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back to Experience</span>
        </Link>
        <Link
          to="/contact"
          className="exp-single-footer-btn exp-single-footer-btn--dark"
        >
          <span>Get in touch</span>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </main>
  );
}
