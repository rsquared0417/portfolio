import { Link } from "react-router";
import "./Navbar.css";

export function Navbar() {
  const navBarLinks = [
    { name: "About", link: "/about" },
    { name: "Skills", link: "/skills" },
    { name: "Experience", link: "/experience" },
    { name: "Work", link: "/work" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Ricky Roman / Front End Developer
      </Link>
      <a href="" className="navbar-toggle">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <ul className="navbar-menu">
        {navBarLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
