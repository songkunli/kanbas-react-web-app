import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
          <div className="card h-100">
            <Link
              to="/Kanbas/Courses/1234/Home"
              className="text-decoration-none"
            >
              <img
                src="/images/reactjs.jpg"
                className="card-img-top"
                alt="React JS"
              />
              <div className="card-body">
                <h5 className="card-title">CS1234 React JS</h5>
                <p className="card-text">Full Stack Software Developer</p>
                <button className="btn btn-primary">Go</button>
              </div>
            </Link>
          </div>
        </div>
        {/* Add more courses as needed */}
        <div className="col">...</div>
        <div className="col">...</div>
      </div>
    </div>
  );
}
