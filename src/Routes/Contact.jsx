import React from "react";
import "../Styles/Global.scss";

import Hero from "../Sections/Hero";
import FindUs from "../Sections/FindUs";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <div className={"Page"}>
      <Hero />
      <FindUs />
      <ContactForm />
    </div>
  );
};

export default Contact;
