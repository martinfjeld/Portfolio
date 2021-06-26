import React, { useEffect } from "react";
import "./primary.styles.scss";

function PrimaryHeading(props) {
  useEffect(() => {}, []);

  return <h1 className="primary-heading">{props?.text}</h1>;
}

export default PrimaryHeading;
