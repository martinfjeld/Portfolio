import React from "react";
import TimerIcon from "../../icons/timer/timer.icon";
import "./time-spent.styles.scss";

function TimeSpent(props) {
  return (
    <div className="time" style={{ color: props?.color || "currentColor" }}>
      <div
        className="time-icon"
        style={{ width: props?.size, height: props?.size }}
      >
        <TimerIcon fill={props.fill} />
      </div>
      <span className="hours-spent" style={{ fontSize: props?.size }}>
        {props?.time}
        {props?.ymh.length > 2 && " "}
        {props?.ymh.toLowerCase()}
      </span>
    </div>
  );
}

export default TimeSpent;
