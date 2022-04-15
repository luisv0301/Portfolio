import React from "react";
import "./navbar.scss";

const Navbar = () => {


  return (
    <div className="navbar__wrapper">
      <nav className="navbar">
        <span className="navbar__logo"></span>
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
    </div>
  );
};

export default Navbar;
