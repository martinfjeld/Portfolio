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
        onLoad={props?.handleImageLoaded}
      />
      <img
        alt="Loader"
        className="overlay__loader"
        src={process.env.PUBLIC_URL + props?.loader}
      />
    </div>
  );
}

export default ImageWithOverlay;
