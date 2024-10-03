export default function BootstrapGrids() {
  return (
    <div id="wd-bs-grid-system">
      <h2>Bootstrap Grid System</h2>
      <div className="row">
        <div className="col bg-danger text-white">
          <h3>Left Half</h3>
        </div>
        <div className="col bg-primary text-white">
          <h3>Right Half</h3>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4 bg-warning">
          <h3>One Third</h3>
        </div>
        <div className="col-8 bg-success text-white">
          <h3>Two Thirds</h3>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-2 bg-dark text-white">
          <h3>Sidebar</h3>
        </div>
        <div className="col-8 bg-secondary text-white">
          <h3>Main Content</h3>
        </div>
        <div className="col-2 bg-info">
          <h3>Sidebar</h3>
        </div>
      </div>
    </div>
  );
}
