import React from "react";
import "../Styles/Global.scss"
import Styles from "../Styles/Component-Styles/Fallback.module.scss";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Fallback = () => {
  return (
    <div className={Styles.Page}>
      <Box className={Styles.Box} sx={{ display: "flex" }}>
        <CircularProgress sx={{color: "black", fontSize: 30}} />
      </Box>
    </div>
  );
};

export default Fallback;
