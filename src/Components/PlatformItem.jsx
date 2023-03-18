import React from "react";
import Styles from "../../Styles/Component-Styles/PlatformItem.module.scss";

import "../../Styles/Global.scss";



const PlatformItem = () => {
  return (
    <div className={"Section"}>
      <div className={Styles.Platform_Container}>
        <div className={Styles.Video_Preview_Box}>
          <video src={""} className={Styles.Preview}></video>
          <a
          id="play-video"
          className="video-play-button"
          href={`https://youtube.com`}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <span></span>
        </a>
        </div>

        <div className={Styles.Descrption_Box}>
          <p className={Styles.Title}>This is the title</p>
          <p className={Styles.Text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            vero omnis harum deserunt corrupti neque tempore inventore optio,
            sit quisquam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlatformItem;
