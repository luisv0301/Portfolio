import * as React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h4 className="navbar__logo">Logo</h4>
      <ul className="navbar__list">
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
  );
};

export default Navbar;
