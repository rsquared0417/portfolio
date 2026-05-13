import { useParams, Link } from "react-router";
import projects from "../../data/projects";
import "./CaseStudySingle.css";

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

export function CaseStudySingle() {
  const { slug } = useParams();
  const currentIndex = projects.findIndex((p) => p.id === slug);
  const project = projects[currentIndex];

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <main className="cs-single-notfound container">
        <p>Case study not found.</p>
        <Link to="/experience" className="cs-single-back">
          ← Back to Experience
        </Link>
      </main>
    );
  }

  return (
    <main className="cs-single container">
      {/* Back link */}
      <Link to="/experience" className="cs-single-back">
        <i className="fa-solid fa-arrow-left"></i>
        <span>Back to Experience</span>
      </Link>

      {/* Header */}
      <div className="cs-single-header">
        <div className="cs-single-header__meta">
          <span className={`cs-status-badge ${STATUS_CLASSES[project.status]}`}>
            {STATUS_LABELS[project.status]}
          </span>
          <span className="cs-single-type">{project.type}</span>
          <span className="cs-single-year">{project.year}</span>
        </div>
        <h1 className="cs-single-title">{project.title}</h1>
        <p className="cs-single-summary">{project.shortSummary}</p>

        <div className="cs-single-header__actions">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="cs-single-btn cs-single-btn--dark"
            >
              <span>View Live</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          ) : (
            <span className="cs-single-btn cs-single-btn--disabled">
              No live URL yet
            </span>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="cs-single-btn"
            >
              <i className="fa-brands fa-github"></i>
              <span>View Repo</span>
            </a>
          )}
        </div>
      </div>

      {/* Full screenshot */}
      <div className="cs-single-screenshot">
        {project.screenshot ? (
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            className="cs-single-screenshot__img"
          />
        ) : (
          <div className="cs-single-screenshot__placeholder">
            <i className="fa-regular fa-image"></i>
            <span>Screenshot coming soon</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="default-card card-color-1 cs-single-section">
        <div className="card-label">
          <h2 className="section-label">About this project</h2>
        </div>
        <div className="card-content">
          <p className="cs-single-description">{project.description}</p>
        </div>
      </div>

      {/* Tools */}
      <div className="default-card card-color-1 cs-single-section">
        <div className="card-label">
          <h2 className="section-label">Tools & Technologies</h2>
        </div>
        <div className="card-content">
          <div className="cs-single-tools">
            {project.tools.map((tool) => (
              <span key={tool} className="cs-single-tool-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project details */}
      <div className="default-card card-color-1 cs-single-section">
        <div className="card-label">
          <h2 className="section-label">Project Details</h2>
        </div>
        <div className="cs-single-details">
          <div className="cs-single-detail-item">
            <span className="cs-single-detail-label">Year</span>
            <span className="cs-single-detail-value">{project.year}</span>
          </div>
          <div className="cs-single-detail-item">
            <span className="cs-single-detail-label">Type</span>
            <span className="cs-single-detail-value">{project.type}</span>
          </div>
          <div className="cs-single-detail-item">
            <span className="cs-single-detail-label">Status</span>
            <span
              className={`cs-status-badge ${STATUS_CLASSES[project.status]}`}
            >
              {STATUS_LABELS[project.status]}
            </span>
          </div>
          <div className="cs-single-detail-item">
            <span className="cs-single-detail-label">Live URL</span>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="cs-single-detail-link"
              >
                {project.liveUrl}
              </a>
            ) : (
              <span className="cs-single-detail-value cs-single-detail-value--faint">
                Not deployed yet
              </span>
            )}
          </div>
          <div className="cs-single-detail-item">
            <span className="cs-single-detail-label">Repository</span>
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="cs-single-detail-link"
              >
                {project.repoUrl}
              </a>
            ) : (
              <span className="cs-single-detail-value cs-single-detail-value--faint">
                Not available
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div className="cs-single-nav">
        {prevProject ? (
          <Link
            to={`/experience/case-studies/${prevProject.id}`}
            className="cs-single-nav-btn"
          >
            <i className="fa-solid fa-arrow-left"></i>
            <div className="cs-single-nav-btn__text">
              <span className="cs-single-nav-btn__label">Previous</span>
              <span className="cs-single-nav-btn__title">
                {prevProject.title}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            to={`/experience/case-studies/${nextProject.id}`}
            className="cs-single-nav-btn cs-single-nav-btn--right"
          >
            <div className="cs-single-nav-btn__text">
              <span className="cs-single-nav-btn__label">Next</span>
              <span className="cs-single-nav-btn__title">
                {nextProject.title}
              </span>
            </div>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </main>
  );
}
