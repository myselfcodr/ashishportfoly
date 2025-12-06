// src/components/Navbar.jsx
import React from "react";

const Navbar = ({ activePage, setActivePage }) => {
  const items = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {items.map((item) => (
          <li className="navbar-item" key={item.id}>
            <button
              className={`navbar-link ${
                activePage === item.id ? "active" : ""
              }`}
              data-nav-link
              onClick={() => setActivePage(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
