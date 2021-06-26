import React from "react";
import "./slideshow-header.scss";

function SlideShowHeader(props) {
  return (
    <div className="slideshow-header">
      <h1 className="project-title" style={{ color: props?.color }}>
        {props.text}
      </h1>
    </div>
  );
}

export default SlideShowHeader;
