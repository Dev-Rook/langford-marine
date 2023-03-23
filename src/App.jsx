import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScrollUp from "./Utilities/useScrollUp";
import Styles from "./App.module.scss";

import NavigationIcon from "@mui/icons-material/Navigation";

// Component Imports Start
import Navbar from "./Components/Navbar";
import Hero from "./Sections/Hero";
import Footer from "./Components/Footer";
// Component Imports End

// Routes Import Start
import Index from "./Routes/Index";
import Services from "./Routes/Services";
import Platforms from "./Routes/Platforms";
import Facilities from "./Routes/Facilities";
import HowWeDoIt from "./Routes/HowWeDoIt";
import Contact from "./Routes/Contact";
import Template from "./Routes/Projects/Template";
import Error from "./Routes/Error";
// Routes Import End

const App = () => {
  const { scrollUp, backToTop } = useScrollUp();

  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Navbar />
        <Hero />
          <Routes>
            <Route path={"/"} element={<Index />} />
            <Route path={"services"} element={<Services />} />
            <Route path={"platforms"} element={<Platforms />} />
            <Route path={"facilities"} element={<Facilities />} />
            <Route path={"how we do it"} element={<HowWeDoIt />} />
            <Route path={"contact"} element={<Contact />} />
            <Route path={"template"} element={<Template />} />
            <Route path={"*"} element={<Error />} />
          </Routes>
        <Footer />
      </BrowserRouter>
      <NavigationIcon
        onClick={scrollUp}
        sx={{ fontSize: 30, color: "black" }}
        className={`${Styles.Back_To_Top_Icon} ${
          backToTop ? Styles.Show_Back_To_Top : ""
        }`}
      />
    </div>
  );
};

export default App;
