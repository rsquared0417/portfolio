import { Link } from "react-router";
import "./Work.css";

export function Work() {
  return (
    <section className="work-section container">
      <div className="work-main">
        <div className="work-header">
          <Link to="/work">
            <h2 className="section-header work-header-text">Selected Work</h2>
          </Link>
        </div>
        <div className="work-list">
          <div className="work-item">
            <div className="default-card work-item-card">
              <div className="work-item-header">
                <i className="fa-solid fa-icons"></i>
                <div className="work-title">
                  <h3>Project Title</h3>
                  <p>Short project description or tagline.</p>
                </div>
              </div>
              <div className="work-item-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt error sapiente totam natus id mollitia laborum,
                  ducimus voluptatibus maxime. Veniam alias ullam esse, rem
                  praesentium odio eum veritatis assumenda vitae.
                </p>
              </div>
              <div className="work-item-footer">
                <div className="work-item-year">
                  <p>Year</p>
                  <p>2023</p>
                </div>
                <div className="work-item-url">
                  <p>Project URL</p>
                  <p>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://example.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="work-item-link">
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="work-item-link-button">
                  View Project
                  <i className="fa-solid fa-square-arrow-up-right"></i>
                </span>
              </a>
            </div>
            <div className="work-item-image">Placeholder</div>
          </div>
        </div>
      </div>
      <div className="work-view-more">
        <div className="work-view-more-link">
          <Link to="/work">
            <span className="work-view-more-button">
              <p>Full Case Studies</p>
              <i className="fa-solid fa-square-arrow-up-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
