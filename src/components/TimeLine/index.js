import React from "react";
import { motion } from "framer-motion";

import "./timeline.scss";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: "-200px" },
  show: { opacity: 1, x: "0"},
};

const TimeLine = () => {
  return (
    <motion.ul
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="timeline"
    >
      <motion.li variants={item} className="timeline__item">
        <time dateTime="2019-10-02" className="timeline__time">
          2019-10-02
        </time>
        <p>
          Before I finished my career as a petroleum engineer I wasn't entirely
          happy with it, I was interested in the web development world, how nice
          the websites looked, and how useful they were. So I started learning
          about web development, all the important topics, from what HTTP means,
          and how browsers work, to HTML, CSS, git, and javascript.
        </p>
      </motion.li>
      <motion.li variants={item} className="timeline__item">
        <time dateTime="2020-03-10" className="timeline__time">
          2020-03-10
        </time>
        <p>
          After some time learning, I had a solid foundation, so I decided it
          was time to take the leap and learn a javascript framework, I chose
          React. In the meantime, I started working as a Freelancer, building
          websites, landing pages, and doing some mailings.
        </p>
      </motion.li>
      <motion.li variants={item} className="timeline__item">
        <span className="timeline__time">
          It's time <span className="timeline__emoji"></span>
        </span>
        <p>
          Now, after gaining a good knowledge about the React ecosystem, having
          played with some of the most popular libraries, such as Redux, React
          Query, Framer and having improved my UI skills I am ready to start
          looking for my first job opportunity as a frontend developer.{" "}
        </p>
      </motion.li>
    </motion.ul>
  );
};

export default TimeLine;
