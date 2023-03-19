import React from "react";
import {TabTitle} from "../Utilities/TabTitle"
import "../Styles/Global.scss";

// Section Imports Start
import Hero from "../Sections/Hero";
import Introduction from "../Sections/Introduction";
import OfferSample from "../Sections/OfferSample";
import ProjectsList from "../Sections/ProjectsList";
import Crew from "../Sections/Crew";
import FindUs from "../Sections/FindUs";
import ContactForm from "../Components/ContactForm";
// Section Imports End


const Index = () => {
  TabTitle("D&E | Home")
  return (
    <div className={"Page"}>
      <Hero />
      <Introduction />
      <OfferSample />
      <ProjectsList />
      <Crew />
      <FindUs />
      <ContactForm />
    </div>
  );
};

export default Index;
