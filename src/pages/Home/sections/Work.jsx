import { Link } from "react-router";
import workExperience from "../../../data/workExperience";
import "./Work.css";

export function Work() {
  const featured = workExperience.slice(0, 2);

  return (
    <section className="work-section container">
      <div className="work-main">
        <div className="work-header">
          <Link to="/experience" className="work-header-link">
            <h2 className="section-header work-header-text">Selected Work</h2>
          </Link>
        </div>

        <div className="work-list">
          {featured.map((item) => (
            <div key={item.id} className="work-item">
              <div className="default-card work-item-card">
                <div className="work-item-header">
                  <div className="work-item-icon">{item.role.charAt(0)}</div>
                  <div className="work-title">
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                </div>

                <div className="work-item-description">
                  <p>{item.shortSummary}</p>
                </div>

                <div className="work-item-tags">
                  {item.tools.slice(0, 4).map((tool) => (
                    <span key={tool} className="work-item-tag">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="work-item-footer">
                  <div className="work-item-year">
                    <p className="work-meta-label">Duration</p>
                    <p className="work-meta-value">{item.duration}</p>
                  </div>
                  <div className="work-item-type">
                    <p className="work-meta-label">Type</p>
                    <p className="work-meta-value">{item.type}</p>
                  </div>
                </div>
              </div>

              <Link to={`/experience/${item.id}`} className="work-item-link">
                <span className="work-item-link-button">
                  View Case Study
                  <i className="fa-solid fa-square-arrow-up-right"></i>
                </span>
              </Link>

              <div className="work-item-image">
                <div className="work-item-image-placeholder">
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link to="/experience" className="work-view-more">
        <span className="work-view-more-button">
          <p>Full Case Studies</p>
          <i className="fa-solid fa-square-arrow-up-right"></i>
        </span>
      </Link>
    </section>
  );
}
