import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            className="wd-assignment-link"
            to="/Kanbas/Courses/1234/Assignments/123"
          >
            A1 - ENV + HTML
          </Link>
          <p>
            Multiple Modules | Not available until May 6 at 12:00am | Due May 13
            at 11:59pm | 100 pts
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            className="wd-assignment-link"
            to="/Kanbas/Courses/1234/Assignments/124"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
          <p>
            Multiple Modules | Not available until May 13 at 12:00am | Due May
            20 at 11:59pm | 100 pts
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            className="wd-assignment-link"
            to="/Kanbas/Courses/1234/Assignments/125"
          >
            A3 - JAVASCRIPT + REACT
          </Link>
          <p>
            Multiple Modules | Not available until May 20 at 12:00am | Due May
            27 at 11:59pm | 100 pts
          </p>
        </li>
      </ul>
    </div>
  );
}
