import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScrollUp from "../Utilities/useScrollUp";
import Styles from "../Styles/Sections/OfferSample.module.scss";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StartIcon from "@mui/icons-material/Start";

import OfferData from "../Data/Offer.json";

const OfferSample = () => {
  const [data, setData] = useState(OfferData);
  const {scrollUp} = useScrollUp();
  return (
    <div className={"Section"}>
      <p className={"Title"}>What We Do</p>
      <div className={Styles.Content_Container}>
        {data?.slice(0, 3).map((value) => {
          return (
            <div className={Styles.Card} key={value.id}>
              <div className={Styles.Background}>
                <img src={value.Preview} alt="" className={Styles.Image} />
              </div>
              <div className={Styles.Diffuser}></div>
              <p className={Styles.Title}>{value.Title}</p>
            </div>
          );
        })}
      </div>
      <div className={Styles.CallToActionBox}>
        <Link to={"/services"} onClick={scrollUp}>
          <button className={Styles.View_Button}>Vew All</button>
        </Link>
        <StartIcon sx={{ color: "black", fontSize: 25 }} />
      </div>
    </div>
  );
};

export default OfferSample;
