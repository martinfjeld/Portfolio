import React from "react";
import "./overlay-image.styles.scss";

function ImageWithOverlay(props) {
  return (
    <div className="overlay">
      <div className="overlay__layer"></div>
      <img
        alt="Work"
        className="overlay__img"
        src={process.env.PUBLIC_URL + props?.image}
      />
    </div>
  );
}

export default ImageWithOverlay;
