import React from "react";
import "./certificate.styles.scss";
import TimeSpent from "../details/time-spent/time-spent.element";

function Certificate(props) {
  return (
    <div className="certificate">
      <div className="certificate__wrapper">
        <div className="certificate__image-container">
          <img
            alt={`Certificate ${props.name}`}
            className="certificate__image"
            src={process.env.PUBLIC_URL + props?.image}
          />
        </div>
        <div className="certificate__info">
          <div className="certificate__description">{props.description}</div>

          <div className="certificate__duration">
            <TimeSpent
              size="2rem"
              time={props.duration}
              ymh={props.ymh}
              fill="var(--color-primary-dark)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
