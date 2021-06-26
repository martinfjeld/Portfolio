import React from "react";
import Certificate from "../../elements/certificate/certificate.component";
import ContactDivider from "../../elements/dividers/contact/contact-divider.element";
import SectionHeader from "../../elements/typography/headings/section-header/section-header.component";
import "./certificates.styles.scss";
import {certificates} from '../../../data/certificates';

console.log(certificates);

function Certificates(props) {
  return (
    <div>
      <div className={`certificates ${props?.classes}`}>
        <SectionHeader color="var(--color-primary-light)" text="Certificates" />
        <div className="certificates--wrapper">

        {
          certificates.map(post => {
            return <Certificate key={post.id} image={post.image} duration={post.duration} description={post.description} ymh={post.ymh} />
          })
        }

        </div>

        <ContactDivider
          fill="var(--color-secondary)"
          background="var(--color-tertiary-dark)"
        />
      </div>
    </div>
  );
}

export default Certificates;
