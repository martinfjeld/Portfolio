import React from "react";
import "./intro.styles.scss";
import PrimaryHeading from "../../elements/typography/headings/primary/primary.component";

function Intro(props) {
  return (
    <div className={`intro ${props?.classes}`}>
      <PrimaryHeading text="My name is Martin" />
    </div>
  );
}

export default Intro;
