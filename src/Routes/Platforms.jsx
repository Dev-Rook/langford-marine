import React from "react";
import "../Styles/Global.scss";

import Hero from "../Sections/Hero";
import PlatformItem from "../Components/PlatformItem";

const Platforms = () => {
  return (
    <div className={"Page"}>
        <Hero />
      <PlatformItem />
    </div>
  );
};

export default Platforms;
