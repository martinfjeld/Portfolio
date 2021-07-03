import React from "react";
import "./technologies.element.scss";
import JavaScriptIcon from "../../icons/code-languages/javascript/javascript.icon";
import SassIcon from "../../icons/code-languages/sass/sass.icon";
import HTMLIcon from "../../icons/code-languages/HTML/html.icon";
import CSSIcon from "../../icons/code-languages/CSS/css.icon";
import ReactIcon from "../../icons/code-languages/react/react.icon";

function TechnologiesDetails(props) {
  const tagNames = {
    js: JavaScriptIcon,
    sass: SassIcon,
    html: HTMLIcon,
    css: CSSIcon,
    react: ReactIcon,
  };

  const languages = props.languages.map((language) => language);
  console.log(languages);

  return (
    <div className="technologies-details">
      <div className="technologies-details__container">
        {languages.map((language, i) => {
          const TagName = tagNames[language];
          return <TagName key={i} />;
        })}
      </div>
      <p>Technologies</p>
    </div>
  );
}

export default TechnologiesDetails;
