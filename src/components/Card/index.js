import React from "react";
import { motion } from "framer-motion";

import { GatsbyImage } from "gatsby-plugin-image";

import "./card.scss";

const card = {
  hidden: { opacity: 0.6, transformPerspective: 1000, rotateX: 45 },
  show: {
    opacity: 1,
    transformPerspective: 1000,
    rotateX: 0,
  },
};

export default function Card({
  title,
  description,
  categories,
  image,
  siteUrl,
  repoUrl,
}) {
  return (
    <motion.article
      className="card"
      variants={card}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={title}
        className="card__img"
      />
      <ul className="card__categories" role="list">
        {categories.map((category, id) => (
          <li className="card__category" key={id}>
            {category}
          </li>
        ))}
      </ul>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{description}</p>
      <div className="card__links">
        <a
          href={siteUrl}
          target="_blank"
          rel="noreferrer"
          className="card__link"
        >
          Live demo
        </a>
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="card__link"
        >
          Code
        </a>
      </div>
    </motion.article>
  );
}
