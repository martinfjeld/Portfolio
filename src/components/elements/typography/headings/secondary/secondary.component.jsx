import React from "react";
import "./secondary.styles.scss";

function SecondaryHeader(props) {
  return (
    <h2
      className={`secondary--header ${props?.classes}`}
      style={{ color: props?.color }}
    >
      {props?.text}
    </h2>
  );
}

export default SecondaryHeader;
