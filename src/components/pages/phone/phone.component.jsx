import React, { useEffect } from "react";
import PhoneElement from "../../elements/SVG/phoneElement/phone.element";
import SecondaryHeader from "../../elements/typography/headings/secondary/secondary.component";
import { PhoneAnimation } from "../../../js/animations";
import "./phone.styles.scss";

function Phone(props) {
  useEffect(() => {
    PhoneAnimation();
  }, []);

  return (
    <div className={`phone ${props?.classes}`}>
      <div>
        <PhoneElement classes="phone-element" />
      </div>
      <div className="flex-start">
        <SecondaryHeader
          classes="secondary-phone-header"
          color={props?.headerColor}
          text="Can make advanced feel..."
        />
      </div>
    </div>
  );
}

export default Phone;
