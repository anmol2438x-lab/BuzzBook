import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "200px" }}
    >
      <span className=" logo3d">BuzzBook</span>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/saved"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Saved
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/settings"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Settings
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            to="/help"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Help
          </NavLink>
        </li>
      </ul>

      <hr />

      <div className="mt-auto">
        <div className="d-flex align-items-center">
          <img
            src="public\Ak img.png"
            alt="profile"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Λnmol</strong>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
