import { Link } from "react-router-dom";

export default function Syllabus() {
  return (
    <div id="wd-syllabus">
      <h1>Course Syllabus</h1>
      <p>
        Welcome to CS1234. This course will cover the fundamentals of web
        development including HTML, CSS, and JavaScript.
      </p>
      <h3>Important Dates:</h3>
      <ul>
        <li>Assignment 1 due: January 15, 2024</li>
        <li>Midterm exam: February 10, 2024</li>
        <li>Final project due: April 20, 2024</li>
      </ul>
      <h3>Course Policies:</h3>
      <p>Please review the course policies on late submissions and grading.</p>
      <Link to="/Kanbas/Courses/1234/Assignments" className="btn btn-primary">
        View Assignments
      </Link>
    </div>
  );
}
