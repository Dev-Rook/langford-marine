import React from "react";
import Styles from "../Styles/Component-Styles/Footer.module.scss";

const Footer = (scrollUp) => {
  return (
    <div className={Styles.Footer}>
      <p className={Styles.Copyright_Tag}>© 2023 D&E Marine Ltd. All Right Reserved</p>
    </div>
  );
};

export default Footer;
