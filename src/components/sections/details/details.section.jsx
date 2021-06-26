import React from "react";
import DifficultyElement from "../../elements/details/difficulty/difficulty.element";
import TechnologiesDetails from "../../elements/details/technologies/technologies.element";
import TimeSpent from "../../elements/details/time-spent/time-spent.element";

import "./details.section.styles.scss";

function Details(props) {
  return (
    <div className="details-section">
      <TimeSpent
        size={props.size}
        time={props.time}
        ymh={props.ymh}
        color="var(--color-primary-dark)"
        fill="currentColor"
      />
      <DifficultyElement difficulty={props.difficulty} />
      <TechnologiesDetails languages={props.languages} />
    </div>
  );
}

export default Details;
