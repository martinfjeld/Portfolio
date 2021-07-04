import React from "react";
import "./icon-link.button.styles.scss";

function IconLink(props) {
  return (
    <div className="icon__link-box">
      <a
        href={props?.link}
        style={{ color: props?.color }}
        target="_blank"
        rel="noreferrer"
      >
        {props?.children}
        {props?.text}
      </a>
    </div>
  );
}

export default IconLink;
