import React from "react";
import AvatarCircle from "../../elements/avatar-circle/avatar-circle.element";
import SocialMediaLinks from "../../sections/social-media-links/social-media-links.section";
import IconLink from "../../elements/buttons/icon-link/icon-link.button";
import GithubIcon from "../../elements/icons/social-media/github/github";
import CodepenIcon from "../../elements/icons/social-media/codepen/codepen";
import LinkedinIcon from "../../elements/icons/social-media/linkedin/linkedin";
import "./contact.styles.scss";
import CTAButton from "../../elements/buttons/CTA/cta.button";

function Contact(props) {
  return (
    <div
      style={{ backgroundColor: props?.background }}
      className={`contact ${props?.classes}`}
    >
      <AvatarCircle image={"/images/avatar.png"} />
      <CTAButton
        text="Shall we?"
        emoji="☕️"
        firstColor="#ffbd91"
        secondColor="#f58a8f"
      />
      <SocialMediaLinks>
        <IconLink link="#" text="Github" color="#eee">
          <GithubIcon />
        </IconLink>

        <IconLink link="#" text="Linkedin" color="#eee">
          <LinkedinIcon />
        </IconLink>

        <IconLink link="#" text="Codepen" color="#eee">
          <CodepenIcon />
        </IconLink>
      </SocialMediaLinks>
    </div>
  );
}

export default Contact;
