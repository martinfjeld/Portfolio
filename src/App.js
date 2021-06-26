import "./styles/base.scss"
import React from 'react';

// SECTIONS
import Intro from "./components/pages/intro/intro.component";
// import Menu from "./components/sections/menu/menu.component";
import Phone from "./components/pages/phone/phone.component";
import Work from "./components/pages/work/work.component";
import Contact from "./components/pages/contact/contact.component";
import Technologies from "./components/pages/technologies/technologies.component";
import Certificates from "./components/pages/certificates/certificates.component";

// ELEMENTS

function App() {
  return (
    <div className="App">
      {/* <Menu /> */}
      <Intro classes="section" />
      <Technologies classes="section flex-50-50" />
      <Phone
        classes="section flex-50-50"
        headerColor="var(--color-primary-dark)"
      />
      <Work
        classes="section flex-100-column"
        color="var(--color-primary-dark)"
      />
      <Certificates />
      <Contact
        background="var(--color-secondary)"
        classes="section flex-100-column"
      />
    </div>
  );
}

export default App;
