import React from "react";
import SliderButton from "../../../elements/buttons/sliderButton/sliderButton.component";
import "./slideshow-top.styles.scss";
import ImageWithOverlay from "../../../elements/overlay/overlay-image.element";

function SlideShowTop(props) {


  return (
    <div
      className="slideshow--content"
      style={{ backgroundColor: props?.backgroundTop }}
    >
      {props.isNext > 0 && <SliderButton handleClick={props?.leftClick} className="left" isPrevious={props.isPrevious} direction="left" />}
      {props.isNext !== props.dataLength && <SliderButton handleClick={props?.rightClick} className="right" isNext={props.isNext} direction="right" />}
      <ImageWithOverlay image={props?.image} />
    </div>
  );
}

export default SlideShowTop;
