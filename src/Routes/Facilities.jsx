import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import "../Styles/Global.scss";

import Hero from "../Sections/Hero";
import Facilitiesitem from "../Components/Facilitiesitem";

const Facilities = () => {
  TabTitle("D&E | Facilities");
  return (
    <div className={"Page"}>
      <Hero />
      <Facilitiesitem />
    </div>
  );
};

export default Facilities;
