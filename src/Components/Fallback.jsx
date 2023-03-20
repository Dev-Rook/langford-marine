import React from "react";
import "../Styles/Global.scss"
import Styles from "../Styles/Component-Styles/Fallback.module.scss";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Fallback = () => {
  return (
    <div className={"Page"}>
      <Box className={Styles.Box} sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Fallback;
