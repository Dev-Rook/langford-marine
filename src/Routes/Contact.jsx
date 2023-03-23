import React from "react";
import {TabTitle} from "../Utilities/TabTitle"
import "../Styles/Global.scss";

import Hero from "../Sections/Hero";
import FindUs from "../Sections/FindUs";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  TabTitle("D&E | Contact")
  return (
    <div className={"Page"}>
      <FindUs />
      <ContactForm />
    </div>
  );
};

export default Contact;
