import { Link } from "react-router";
import "./Capabilities.css";

export function Capabilities() {
  return (
    <section className="capabilities-section container">
      <div className="what-i-do-sub-section">
        <h2 className="section-header what-i-do-title">What I Do</h2>
        <div className="what-i-do-list">
          <div className="what-i-do-item">
            <h3 className="card-label what-i-do-label">Web Development</h3>
            <p className="card-content">
              I build responsive and interactive websites using modern
              technologies.
            </p>
          </div>
          <div className="what-i-do-item">
            <h3 className="card-label what-i-do-label">UI/UX Design</h3>
            <p className="card-content">
              I create intuitive and visually appealing user interfaces.
            </p>
          </div>
          <div className="what-i-do-item">
            <h3 className="card-label what-i-do-label">Content Creation</h3>
            <p className="card-content">
              I develop engaging content for various digital platforms.
            </p>
          </div>
        </div>
        <div className="about-sub-section">
          <h2 className="section-header about-title">About</h2>
          <div className="about-content">
            <div className="about-text">
              <h3 className="card-label what-i-do-label">My Story</h3>
              <p className="card-content">
                I am a passionate web developer with experience in creating
                modern and responsive websites.
              </p>
            </div>
            <div className="about-misc">
              <div className="about-misc-image">PLACEHOLDER</div>
              <Link to="/about">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
