import React from "react";
import Styles from "../Styles/Sections/Hero.module.scss";

import Video from "../Assets/Videos/Video.mp4"

const Hero = () => {
  return (
    <div className={Styles.Hero}>
      <div className={Styles.Background}>
        <video autoPlay loop muted src={Video} className={Styles.Video}></video>
      </div>
      <div className={Styles.Diffuser}></div>
      <div className={Styles.Content_Container}>
        <h1 className={Styles.Title}>D&E Marine</h1>
      </div>
    </div>
  );
};

export default Hero;
