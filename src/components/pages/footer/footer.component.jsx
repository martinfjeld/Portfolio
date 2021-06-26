import React from "react";
import "./footer.styles.scss";

function Footer(props) {
  return (
    <div className={`footer ${props?.classes}`}>
      <h2>Footer section</h2>
    </div>
  );
}

export default Footer;
