import React from "react";
import { motion } from "framer-motion";

import ButtonLink from "../shared/Buttons/ButtonLink.js";
import "./header.scss";

const Header = () => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <p className="header__title">Luis Vasquez</p>
        <motion.h1
          className="header__subtitle"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          Frontend developer
        </motion.h1>
        <p className="header__text">
          Self taught frontend developer, passionate about designing fantastic
          user interfaces and accessible experiences.
        </p>
        <div className="header__button">
          <ButtonLink />
        </div>
      </header>
    </div>
  );
};

export default Header;
