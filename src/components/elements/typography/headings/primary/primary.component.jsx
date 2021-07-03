import React from "react";
import "./primary.styles.scss";

function PrimaryHeading(props) {
  return <h1 className="primary-heading">{props?.text}</h1>;
}

export default PrimaryHeading;
