import { useState } from "react";
import { Link } from "react-router";
import workExperience from "../../data/workExperience";
import projects from "../../data/projects";
import "./Experience.css";

const STATUS_LABELS = {
  completed: "Completed",
  "in-progress": "In Progress",
  planned: "Planned",
};

const STATUS_CLASSES = {
  completed: "badge--completed",
  "in-progress": "badge--in-progress",
  planned: "badge--planned",
};

export function Experience() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <main className="experience-page container">
      <div className="experience-header">
        <span className="exp-pill-label">Experience</span>
      </div>

      {/* Filter Tabs */}
      <div className="exp-tabs">
        <button
          className={`exp-tab ${activeTab === "work" ? "exp-tab--active" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          Work Experience
        </button>
        <button
          className={`exp-tab ${activeTab === "case-studies" ? "exp-tab--active" : ""}`}
          onClick={() => setActiveTab("case-studies")}
        >
          Case Studies
        </button>
      </div>

      {/* Work Experience Tab */}
      {activeTab === "work" && (
        <div className="exp-list">
          {workExperience.map((item) => (
            <div key={item.id} className="default-card card-color-1 exp-card">
              <div className="exp-card__header">
                <div className="exp-card__icon">{item.role.charAt(0)}</div>
                <div className="exp-card__heading">
                  <h2 className="exp-card__role">{item.role}</h2>
                  <p className="exp-card__company">
                    {item.company} · {item.location}
                  </p>
                </div>
                <span className="exp-card__type">{item.type}</span>
              </div>

              <div className="exp-card__summary">
                <p>{item.shortSummary}</p>
              </div>

              {/*<div className="exp-card__highlights">
                {item.highlights.map((h) => (
                  <div key={h.title} className="exp-highlight">
                    <h4 className="exp-highlight__title">{h.title}</h4>
                    <p className="exp-highlight__desc">{h.description}</p>
                  </div>
                ))}
              </div>*/}

              <div className="exp-card__footer">
                <div className="exp-card__meta">
                  <div className="exp-card__meta-item">
                    <span className="exp-meta-label">Duration</span>
                    <span className="exp-meta-value">{item.duration}</span>
                  </div>
                  <div className="exp-card__meta-item">
                    <span className="exp-meta-label">Type</span>
                    <span className="exp-meta-value">{item.type}</span>
                  </div>
                </div>

                <div className="exp-card__tools">
                  {item.tools.map((tool) => (
                    <span key={tool} className="exp-tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/experience/work-experience/${item.id}`}
                  className="exp-card__cta"
                >
                  <span>View Full Details</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Case Studies Tab */}
      {activeTab === "case-studies" && (
        <div className="cs-grid">
          {projects.map((project) => (
            <div key={project.id} className="default-card card-color-1 cs-card">
              <div className="cs-card__image">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={project.title} />
                ) : (
                  <div className="cs-card__image-placeholder">
                    <span>{project.title}</span>
                  </div>
                )}
              </div>

              <div className="cs-card__body">
                <div className="cs-card__top">
                  <div className="cs-card__labels">
                    <span className="cs-type-tag">{project.type}</span>
                    <span
                      className={`cs-status-badge ${STATUS_CLASSES[project.status]}`}
                    >
                      {STATUS_LABELS[project.status]}
                    </span>
                  </div>
                  <span className="cs-year">{project.year}</span>
                </div>

                <h2 className="cs-card__title">{project.title}</h2>
                <p className="cs-card__summary">{project.shortSummary}</p>

                <div className="cs-card__tools">
                  {project.tools.map((tool) => (
                    <span key={tool} className="exp-tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cs-card__footer">
                <Link
                  to={`/experience/case-studies/${project.id}`}
                  className="cs-card__link"
                >
                  <span>View Case Study</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cs-card__link cs-card__link--secondary"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
