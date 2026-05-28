import { Link } from "react-router";
import projects from "../../../data/projects";
import "./Work.css";

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

export function Work() {
  const featured = projects.filter((p) => p.status === "completed").slice(0, 3);

  return (
    <section className="work-section container">
      <div className="work-main">
        <div className="work-header">
          <Link
            to="/experience"
            state={{ tab: "work" }}
            className="work-header-link"
          >
            <h2 className="section-header work-header-text">Selected Work</h2>
          </Link>
        </div>
        <div className="work-list">
          {featured.map((item) => (
            <div key={item.id} className="work-item">
              {/* Info card */}
              <div className="default-card work-item-card">
                <div className="work-item-header">
                  <div className="work-item-icon">{item.title.charAt(0)}</div>
                  <div className="work-title">
                    <h3>{item.title}</h3>
                    <p>{item.type}</p>
                  </div>
                </div>

                <div className="work-item-description">
                  <p>{item.shortSummary}</p>
                </div>

                <div className="work-item-tags">
                  {item.tools.map((tool) => (
                    <span key={tool} className="work-item-tag">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="work-item-footer">
                  <div>
                    <p className="work-meta-label">Year</p>
                    <p className="work-meta-value">{item.year}</p>
                  </div>
                  <div>
                    <p className="work-meta-label">Status</p>
                    <span
                      className={`cs-status-badge ${STATUS_CLASSES[item.status]}`}
                    >
                      {STATUS_LABELS[item.status]}
                    </span>
                  </div>
                  <Link
                    to={`/experience/case-studies/${item.id}`}
                    className="work-item-link"
                  >
                    <span className="button-with-icon">
                      View Case Study
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              {/* Image / screenshot panel */}
              <div className="work-item-image">
                {item.thumbnail ? (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                ) : (
                  <div className="work-item-image-placeholder">
                    <span>{item.title}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        to="/experience"
        state={{ tab: "case-studies" }}
        className="work-view-more"
      >
        <span className="button-with-icon">
          <p>View All Projects</p>
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </Link>
    </section>
  );
}
