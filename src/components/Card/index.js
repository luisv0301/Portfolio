import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import "./card.scss";

export default function Card({
  title,
  description,
  categories,
  image,
  siteUrl,
  repoUrl,
}) {
  return (
    <article className="card">
      <GatsbyImage image={image.gatsbyImageData} alt={title} />
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
    </article>
  );
}
