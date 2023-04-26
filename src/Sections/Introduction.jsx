import React from "react";
import useScroll from "../Utilities/useScrollUp";
import { Link } from "react-router-dom";
import "../Styles/Global.scss";
import Styles from "../Styles/Sections/Introudction.module.scss";

import StartIcon from "@mui/icons-material/Start";

const Introduction = () => {
  const { scrollUp } = useScroll();
  return (
    <div className={"Section"}>
      <div className={Styles.Content_Container}>
        <p className={Styles.Bio}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, atque
          cumque recusandae doloremque voluptas omnis eos nostrum fuga ea
          adipisci et aperiam voluptate illum deserunt enim itaque facere libero
          voluptatum voluptatibus mollitia nobis, modi incidunt veritatis qui.{" "}
          <Link to={"hwdi"} onClick={scrollUp} className={Styles.Link}>
            How We Do it{" "}
            <StartIcon
              sx={{ color: "red", fontSize: 18 }}
              className={Styles.Arrow}
            />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
