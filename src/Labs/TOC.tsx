import { Link, useLocation } from "react-router-dom"; // Import useLocation from react-router

export default function TOC() {
  const { pathname } = useLocation(); // Get the current path

  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link
          to="/Labs"
          className={`nav-link ${pathname === "/Labs" ? "active" : ""}`} // Highlight if path matches
        >
          Labs
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Labs/Lab1"
          className={`nav-link ${
            pathname.includes("/Labs/Lab1") ? "active" : ""
          }`}
        >
          Lab 1
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Labs/Lab2"
          className={`nav-link ${
            pathname.includes("/Labs/Lab2") ? "active" : ""
          }`}
        >
          Lab 2
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Labs/Lab3"
          className={`nav-link ${
            pathname.includes("/Labs/Lab3") ? "active" : ""
          }`}
        >
          Lab 3
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Kanbas"
          className={`nav-link ${pathname.includes("/Kanbas") ? "active" : ""}`}
        >
          Kanbas
        </Link>
      </li>
      <li className="nav-item">
        <a
          href="https://github.com/songkunli"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </li>
    </ul>
  );
}
