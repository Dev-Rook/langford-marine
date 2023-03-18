import React, { useState, useEffect } from "react";
import "../Styles/Global.scss";
import Styles from "../Styles/Component-Styles/ContactForm.module.scss";

const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <div className={"Section"}>
      <p className={Styles.Title}>Contact</p>
      <form action="POST" className={Styles.Contact_Form}>
        <input type="text" name="Name" placeholder="Name" className={Styles.Input} required />
        <input type="email" name="Email" placeholder="Email" className={Styles.Input} required />
        <textarea
          name="Message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className={Styles.Input}
        ></textarea>
        <button type="Submit" className={Styles.Submit_Button}>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
