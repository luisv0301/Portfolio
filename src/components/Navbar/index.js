import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar__wrapper">
      <nav className="navbar">
        <p className="navbar__logo">LV.</p>
        <button
          className="navbar__hamburmenu"
          aria-label="menu"
          aria-haspopup="true"
          aria-expanded={isMenuOpen ? true : false}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7.95 11.95h32" />
              <path d="M7.95 23.95h32" />
              <path d="M7.95 35.95h32" />
            </g>
          </svg>
        </button>

        <ul className={` navbar__list ${isMenuOpen ? "isVisible" : ""} `}>
          <li className="navbar__items">
            <a href="#skills" className="navbar__link">
              Skills
            </a>
          </li>
          <li className="navbar__items">
            <a href="#projects" className="navbar__link">
              Projects
            </a>
          </li>
          <li className="navbar__items">
            <a href="#contact" className="navbar__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
