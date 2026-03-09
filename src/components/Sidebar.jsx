const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "200px" }}
    >
      {/* Logo Section */}
      <button
        type="button"
        onClick={() => handleTabChange("Home")}
        className="d-flex align-items-center mb-3 text-white text-decoration-none bg-transparent border-0"
      >
        <span className="fs-4">Sidebar</span>
      </button>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link text-white ${
              selectedTab === "Home" ? "active" : ""
            }`}
            onClick={() => handleTabChange("Home")}
          >
            Home
          </button>
        </li>

        <li className="nav-item">
          <button
            type="button"
            className={`nav-link text-white ${
              selectedTab === "CreatePost" ? "active" : ""
            }`}
            onClick={() => handleTabChange("CreatePost")}
          >
            Create Post
          </button>
        </li>

        <li className="nav-item">
          <button
            type="button"
            className={`nav-link text-white ${
              selectedTab === "Dashboard" ? "active" : ""
            }`}
            onClick={() => handleTabChange("Dashboard")}
          >
            Dashboard
          </button>
        </li>

        <li className="nav-item">
          <button
            type="button"
            className={`nav-link text-white ${
              selectedTab === "Reels" ? "active" : ""
            }`}
            onClick={() => handleTabChange("Reels")}
          >
            Reels
          </button>
        </li>

        <li className="nav-item">
          <button
            type="button"
            className={`nav-link text-white ${
              selectedTab === "Help" ? "active" : ""
            }`}
            onClick={() => handleTabChange("Help")}
          >
            Help
          </button>
        </li>
      </ul>

      <hr />

      {/* Profile Section */}
      <div className="mt-auto text-white">
        <div className="d-flex align-items-center">
          <img
            src="https://github.com/mdo.png"
            alt="profile"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
