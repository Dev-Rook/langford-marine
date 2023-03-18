import React, { useState } from "react";
import "../Styles/Global.scss";
import Styles from "../Styles/Component-Styles/ServiceItem.module.scss";

import ServiceData from "../Data/Offer.json";

const ServiceItem = () => {
  const [data, setData] = useState(ServiceData);
  return (
    <div className={"Section"}>
      <div className={Styles.Content_Container}>
        {data?.map((value) => {
          return (
            <div className={Styles.Service_Block} key={value.id}>
              <div className={Styles.Image_Container}>
                <img src={value.Preview} alt="" className={Styles.Image} />
              </div>

              <div className={Styles.Information_Container}>
                <p className={Styles.Service_Title}>{value.Title}</p>
                <p className={Styles.Description}>{value.Description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceItem;
