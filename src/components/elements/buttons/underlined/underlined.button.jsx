import React from "react";
import "./underlined.styles.scss";

function UnderlinedButton(props) {
  return (
    <div className="underlined-btn">
      <a href={props?.link} target="_blank" className="underlined-btn__link" rel="noreferrer">
        <p className="underlined-btn-btn">{props?.text} &rarr;</p>
      </a>
    </div>
  );
}

export default UnderlinedButton;
