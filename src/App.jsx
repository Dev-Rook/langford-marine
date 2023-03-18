import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.scss";

import NavigationIcon from "@mui/icons-material/Navigation";

// Component Imports Start
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// Component Imports End

// Routes Import Start
import Index from "./Routes/Index";
import Services from "./Routes/Services";
import Contact from "./Routes/Contact";
// Routes Import End

const App = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Index />} />
          <Route path={"services"} element={<Services />} />
          <Route path={"contact"} element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      {/* <NavigationIcon
        onClick={scrollUp}
        sx={{ fontSize: 30, color: "black" }}
        className={`${Styles.Back_To_Top_Icon} ${
          backToTop ? Styles.Show_Back_To_Top : ""
        }`}
      /> */}
    </div>
  );
};

export default App;
