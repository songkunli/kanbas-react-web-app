import { FaPlus } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button
        id="wd-add-module-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
      <div className="dropdown d-inline me-1 float-end">
        <button
          id="wd-publish-all-btn"
          className="btn btn-lg btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              id="wd-publish-all-modules-and-items-btn"
              className="dropdown-item"
            >
              <GreenCheckmark />
              Publish all modules and items
            </button>
          </li>
          <li>
            <button
              id="wd-publish-modules-only-button"
              className="dropdown-item"
            >
              <GreenCheckmark />
              Publish modules only
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
