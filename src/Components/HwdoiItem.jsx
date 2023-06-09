import React, { useState } from "react";
import "../Styles/Global.scss";
import "../Styles/Imported/YTPlayIcon.css";
import Styles from "../Styles/Component-Styles/HwdoiItem.module.scss";

import Hwdoi from "../Data/Hwdi.json";

const HwdoiItem = () => {
  const [data, setData] = useState(Hwdoi);
  return (
    <div className={"Section"}>
      <p className={"Title"}>How We Do It</p>
      <div className={Styles.Content_Container}>
        {data?.map((value) => {
          return (
            <div className={Styles.Video_Card}>
              <div className={Styles.Image_Container}>
                <a
                  id="play-video"
                  className="video-play-button"
                  href={value.link}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <span></span>
                </a>
                <img src={value.image} alt="" className={Styles.Image} />
              </div>

              <p className={Styles.Video_Title}>{value.title}</p>
              <p className={Styles.Description}>{value.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HwdoiItem;
