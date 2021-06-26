import React, { useEffect } from "react";
import TechnologiesElement from "../../elements/SVG/technologiesElement/technologies.element";
import SecondaryHeader from "../../elements/typography/headings/secondary/secondary.component";
import "./technologies.styles.scss";
import { TechnologiesAnimation } from "../../../js/animations";

function Technologies(props) {
  useEffect(() => {
    TechnologiesAnimation();
  }, []);

  return (
    <div className={`technologies ${props?.classes}`}>
      <div>
        <SecondaryHeader text="I've learned that these technologies..." />
      </div>
      <div className="technologies-animation">
        <TechnologiesElement />
      </div>
    </div>
  );
}

export default Technologies;
