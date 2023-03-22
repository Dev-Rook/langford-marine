import React, { useState, useEffect } from "react";
import "../Styles/Global.scss";
import Styles from "../Styles/Component-Styles/ContactForm.module.scss";

import StartIcon from "@mui/icons-material/Start";

const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <div className={"Section"}>
      <p className={"Title"}>Contact</p>
      <form action="POST" className={Styles.Contact_Form}>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          className={Styles.Input}
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          className={Styles.Input}
          required
        />
        <textarea
          name="Message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className={Styles.Input}
        ></textarea>
        <div className={Styles.CallToActionBox}>
          <button className={Styles.Submit_Button}>Submit</button>

          <StartIcon sx={{ color: "black", fontSize: 25 }} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
