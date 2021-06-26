import React from "react";

import "./social-media-links.styles.scss";

function SocialMediaLinks(props) {
  return <div className="social-media-links">{props.children}</div>;
}

export default SocialMediaLinks;
