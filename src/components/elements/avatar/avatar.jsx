import React from "react";

function Avatar(props) {
  return (
    <img
      src={process.env.PUBLIC_URL + props?.image}
      alt={props.description}
      className="avatar__photo"
    />
  );
}

export default Avatar;
