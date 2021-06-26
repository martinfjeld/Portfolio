import React from "react";
import "./project-paragraph.styles.scss";

function ProjectParagraph(props) {
  return <p className="project-paragraph">{props?.text}</p>;
}

export default ProjectParagraph;
