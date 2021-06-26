import React from "react";
import "./underlined.styles.scss";

function UnderlinedButton() {
  return (
    <div className="underlined-btn">
      <a href="https://www.example.com" className="underlined-btn__link">
        <p className="underlined-btn-btn">Visit project &rarr;</p>
      </a>
    </div>
  );
}

export default UnderlinedButton;
