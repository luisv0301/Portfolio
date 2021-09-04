import React from "react";
import Card from "../Card";

import "./cards.scss";

export default function Cards({ data }) {
  return (
    <div className="cards">
      {data.projects.nodes.map((project, id) => (
        <Card key={id} {...project} />
      ))}
    </div>
  );
}
