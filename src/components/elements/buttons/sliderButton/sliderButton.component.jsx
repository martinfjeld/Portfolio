import React from "react";
import Right from "../../icons/right/right.icon";
import Left from "../../icons/left/left.icon";
import "./sliderButton.styles.scss";

function SliderButton(props) {
  
  return (
    <div className={`slider-button ${props.direction}--btn`} onClick={props?.handleClick}>
      {props?.direction === "right" && (
        <Right color="var(--color-primary-dark)" />
      )}
      {props?.direction === "left" && (
        <Left color="var(--color-primary-dark)" />
      )}
    </div>
  );
}

export default SliderButton;
