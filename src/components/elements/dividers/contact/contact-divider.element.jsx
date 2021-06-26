import React from "react";
import "./contact-divider.styles.scss";

function ContactDivider(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      x="0"
      y="0"
      enableBackground="new 0 0 1920 428.398"
      overflow="visible"
      viewBox="0 0 1920 428.398"
      style={{ backgroundColor: props?.background }}
    >
      <path
        fill={props?.fill}
        d="M0 360.862c96.396 20.724 250.511 45.795 439 38.536 271.479-10.454 456.409-81.895 842.263-205.574C1428.025 146.782 1647.42 78.218 1920 0v428.398H0v-67.536z"
      ></path>
    </svg>
  );
}

export default ContactDivider;
