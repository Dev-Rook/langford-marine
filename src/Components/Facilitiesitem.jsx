import React, { useState } from "react";
import "../Styles/Global.scss";
import "../Styles/Imported/YTPlayIcon.css";
import Styles from "../Styles/Component-Styles/HwdoiItem.module.scss";

import FacilitiesData from "../Data/Facilities.json";

const Facilitiesitem = () => {
  const [data, setData] = useState(FacilitiesData);
  return (
    <div className={"Section"}>
      <p className={"Title"}>Facilities</p>
      <div className={Styles.Content_Container}>
        {data?.map((value) => {
          return (
            <div className={Styles.Video_Card} key={value.id}>
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

export default Facilitiesitem;
