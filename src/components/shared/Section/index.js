import React from "react";

import "./section.scss";

export default function Section({
  title,
  children,
  id,
  withPaddingBottom = false,
  withBg = false,
}) {
  return (
    <section
      className={`section ${
        withPaddingBottom ? "section--padding-bottom" : ""
      } ${withBg ? "section--bg-image" : ""}`}
    >
      <>
        <h2 className="section__title" id={id}>
          {title}
        </h2>
        {children}
      </>
    </section>
  );
}
