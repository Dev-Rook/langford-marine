import React, { useState } from "react";
import "../Styles/Global.scss";
import Styles from "../Styles/Component-Styles/HwdoiItem.module.scss";

import Hwdoi from "../Data/Hwdi.json";

const HwdoiItem = () => {
  const [data, setData] = useState(Hwdoi);
  return (
    <div className={"Section"}>
      <p className={Styles.Title}>How We Do It</p>
      <div className={Styles.Content_Container}>
        {data?.map((value) => {
          return (
            <a href={value.link} target={"_blank"} rel={"noreferrer"} key={value.id}>
              <div className={Styles.Video_Card}>
                <div className={Styles.Image_Container}>
                  <img src={value.image} alt="" className={Styles.Image} />
                </div>

                <p className={Styles.Video_Title}>{value.title}</p>
                <p className={Styles.Description}>{value.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HwdoiItem;
