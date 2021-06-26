import React from "react";
import Avatar from "../avatar/avatar";
import "./avatar-circle.element.styles.scss";

function AvatarCircle(props) {
  return (
    <div className="avatar">
      <div className="avatar__middle">
        <div className="avatar__inner">
          <Avatar image={props?.image} />
        </div>
      </div>
    </div>
  );
}

export default AvatarCircle;
