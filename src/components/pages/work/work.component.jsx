import React from "react";
import CertificatesDivider from "../../elements/dividers/certificates/certificates-divider.element";
import Slideshow from "../../sections/slideshow/slideshow.component";
import "./work.styles.scss";
import {posts} from '../../../data/posts'

console.log(posts);

function Work(props) {
  return (
    <div
      className={`work ${props?.classes}`}
      style={{ backgroundColor: props?.background, color: props?.color }}
    >
      <Slideshow background="var(--color-tertiary-light)" />
      <CertificatesDivider
        background="var(--color-tertiary-light)"
        fill="var(--color-tertiary-dark)"
      />
    </div>
  );
}

export default Work;
