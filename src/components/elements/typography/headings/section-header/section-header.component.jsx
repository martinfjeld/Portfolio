import React from "react";
import "./section-header.styles.scss";

function SectionHeader(props) {
  return (
    <h1
      className={`section-header ${props?.classes}`}
      style={{ color: props?.color }}
    >
      {props?.text}
    </h1>
  );
}

export default SectionHeader;
