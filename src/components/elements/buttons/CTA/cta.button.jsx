import React from "react";
import "./cta.styles.scss";

function CTAButton(props) {
  return (
    <a
      href={props?.link || "#"}
      className="CTA-button"
      style={{
        backgroundImage: `linear-gradient(to right bottom, ${props?.firstColor}, ${props?.secondColor})`,
        borderBottom: `2px solid ${props?.secondColor}`,
      }}
    >
      {props?.text} {props?.emoji}
    </a>
  );
}

export default CTAButton;
