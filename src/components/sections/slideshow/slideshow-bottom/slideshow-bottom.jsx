import React from "react";
import SlideShowHeader from "../../../elements/typography/headings/slideshow-header/slideshow-header";
import ProjectParagraph from "../../../elements/typography/text/project-paragraph/project-paragraph";
import Details from "../../details/details.section";
import UnderlinedButton from "../../../elements/buttons/underlined/underlined.button";
import "./slideshow-bottom.styles.scss";

function SlideShowBottom(props) {
  return (
    <div
      style={{ backgroundColor: props?.background }}
      className="slideshow-description"
    >
      <SlideShowHeader color="var(--color-primary-dark)" text={props.text} />

      <div className="slideshow-description__info">
        <div className="details">
          <ProjectParagraph text={props?.description} />
          <Details
            ymh={props.ymh}
            size="2.5rem"
            time={props.time}
            languages={props.languages}
            difficulty={props.difficulty}
          />
        </div>
        <div className="slideshow-description__cta-section">
          <UnderlinedButton link={props?.link} text="Visit project" />
        </div>
      </div>
    </div>
  );
}

export default SlideShowBottom;
