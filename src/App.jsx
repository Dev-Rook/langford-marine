import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScrollUp from "./Utilities/useScrollUp";
import Styles from "./App.module.scss";

import NavigationIcon from "@mui/icons-material/Navigation";

// Component Imports Start
import Navbar from "./Components/Navbar";
import Fallback from "./Components/Fallback";
import Footer from "./Components/Footer";
// Component Imports End

// Routes Import Start
const Index = lazy(() => import("./Routes/Index"))
const Services = lazy(() => import("./Routes/Services"))
const HowWeDoIt = lazy(() => import("./Routes/HowWeDoIt"))
const Contact = lazy(() => import("./Routes/Contact"))
const Error = lazy(() => import("./Routes/Error"))
// Routes Import End

const App = () => {
  const { scrollUp, backToTop } = useScrollUp();

  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Navbar />
        <Suspense Fallback={<Fallback />}>
          <Routes>
            <Route path={"/"} element={<Index />} />
            <Route path={"services"} element={<Services />} />
            <Route path={"how we do it"} element={<HowWeDoIt />} />
            <Route path={"contact"} element={<Contact />} />
            <Route path={"*"} element={<Error />} />
          </Routes>
        </Suspense>
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
