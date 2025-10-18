import React from "react";
import "./sidebar.css";

function Sidebar({
  currentFilter,
  setCurrentFilter,
  theme,
  setTheme,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  const filters = ["All Tasks", "Active", "Completed"];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div>
        <div className="sidebar-header">
          <h1 className="sidebar-title">Next-Do</h1>

          <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
            ✕
          </button>
        </div>

        <ul className="filter-list">
          {filters.map((filter) => (
            <li
              key={filter}
              className={`filter-item ${
                currentFilter === filter ? "active" : ""
              }`}
              onClick={() => setCurrentFilter(filter)}
            >
              {filter}
            </li>
          ))}
        </ul>
      </div>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default Sidebar;
