import React from "react";

import "./section.scss";

export default function Section({ title, children, id }) {
  return (
    <section className="section">
      <>
        <h2 className="section__title" id={id}>
          {title}
        </h2>
        {children}
      </>
    </section>
  );
}
