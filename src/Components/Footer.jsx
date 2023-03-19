import React from "react";
import Styles from "../Styles/Component-Styles/Footer.module.scss";

const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <div className={Styles.Footer}>
      <p className={Styles.Copyright_Tag}>
        © {Year} D&E Marine Ltd. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
