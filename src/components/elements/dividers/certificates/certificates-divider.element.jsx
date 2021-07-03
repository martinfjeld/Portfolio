import React from "react";
import "./certificates-divider.styles.scss";

function CertificatesDivider(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      x="0"
      y="0"
      enableBackground="new 0 0 1535 97"
      viewBox="0 0 1535 97"
      style={{ backgroundColor: props?.background }}
      className="divider certificates-divider"
    >
      <path
        fill={props?.fill}
        d="M0 97h1535V0a5764.517 5764.517 0 00-177 9c-298.873 19.798-499.42 56.535-590 69C595.656 101.717 343.007 103.397 0 0v97z"
      ></path>
    </svg>
  );
}

export default CertificatesDivider;
