import { FaFileAlt } from "react-icons/fa";

export default function GradesTable() {
  return (
    <div id="wd-grades-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-assignment text-nowrap">
              <FaFileAlt className="me-2 fs-5 text-secondary" />
              Assignment 1
            </td>
            <td>2024-01-15</td>
            <td>Submitted</td>
            <td>85/100</td>
          </tr>
          {/* Add more assignments */}
        </tbody>
      </table>
    </div>
  );
}
