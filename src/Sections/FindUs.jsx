import React from "react";
import "../Styles/Global.scss";
import Styles from "../Styles/Sections/FindUs.module.scss";

const FindUs = () => {
  return (
    <div className={"Section"}>
      <p className={"Title"}>Find Us</p>
      <div className={Styles.Map_Container}>
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          src=" https://maps.google.com/maps?q=D+%26+E+Marine+Ltd&t=k&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>

      <p className={Styles.Tiny_Title}>Info</p>
      <ul className={Styles.Information_Container}>
        <li className={Styles.List_Item}>
          <span>Phone</span>1 876-192-1687
        </li>
        <li className={Styles.List_Item}>
          <span>Email</span>
          <a href={`https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDsMwzDnkHmVQwHkCKNZbWJdTCKpsTZvMBTlHSTdjMcfWtfKVwPQBmvblSbDjlNPDcBvSF`} target={"_blank"} rel={"noreferrer"}>
            captain.cws@gmail.com
          </a>
        </li>
        <li className={Styles.List_Item}>
          <span>Address</span>The Marina, Lot #26, Mahoe Bay, Ironshore
        </li>
        <li className={Styles.List_Item}>
          <span>P.O Box</span>#3, Fantana Fairview Center
        </li>
      </ul>
    </div>
  );
};

export default FindUs;
