import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Global.scss";
import Styles from "../Styles/Component-Styles/ErrorLabel.module.scss";

import StartIcon from "@mui/icons-material/Start";

const ErrorLabel = () => {
  return (
    <div className={"Section"}>
      <div className={Styles.Content_Container}>
        <h1 className={Styles.Title}>404</h1>
        <h3 className={Styles.Subtitle}>Oops, Page Not Found</h3>
        <p className={Styles.Text}>
        But if you don't change your direction, and if you keep looking, you may end up where you are heading.
        </p>
        <div className={Styles.CallToActionBox}>
          <Link to={"/"}>
            <button className={Styles.View_Button}>Home</button>
          </Link>
          <StartIcon sx={{ color: "black", fontSize: 25 }} />
        </div>
      </div>
    </div>
  );
};

export default ErrorLabel;
