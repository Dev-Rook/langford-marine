import React, { useState } from "react";
import "../Styles/Global.scss";
import Styles from "../Styles/Sections/Crew.module.scss";

import CrewData from "../Data/Crew.json";

const Crew = () => {
  const [data, setData] = useState(CrewData);

  return (
    <div className={"Section"}>
      <p className={Styles.Title}>Crew</p>
      <div className={Styles.Content_Container}>
        {data?.map((value) => {
          return (
            <div className={Styles.Card} key={value.id}>
              <div className={Styles.Image_Container}>
                <img src={value.image} alt="" className={Styles.Image} />
              </div>
              <div className={Styles.Description_Box}>
                <span>
                  <p className={Styles.Name}>{value.name}</p>
                  <p className={Styles.Personel_Title}>◻ {value.title}</p>
                </span>
                <p className={Styles.Bio}>{value.bio}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Crew;
