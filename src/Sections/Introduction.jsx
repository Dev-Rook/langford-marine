import React from "react";
import "../Styles/Global.scss";
import Styles from "../Styles/Sections/Introudction.module.scss";

const Introduction = () => {
  return (
    <div className={"Section"}>
      <div className={Styles.Content_Container}>
        <p className={Styles.Bio}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, atque
          cumque recusandae doloremque voluptas omnis eos nostrum fuga ea
          adipisci et aperiam voluptate illum deserunt enim itaque facere libero
          voluptatum voluptatibus mollitia nobis, modi incidunt veritatis qui.
          Magnam, doloremque libero!
        </p>
      </div>
    </div>
  );
};

export default Introduction;
