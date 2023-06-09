import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useScrollUp from "../Utilities/useScrollUp";

import Styles from "../Styles/Component-Styles/Navbar.module.scss";
import "../Styles/Imported/MenuIcon.css";

import MenuIcon from "@mui/icons-material/Menu";
import AnchorIcon from "@mui/icons-material/Anchor";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [clicked, setClicked] = useState(false);

  let menuRef = useRef();
  const { scrollUp } = useScrollUp();

  useEffect(() => {
    if (window.scrollY >= 120) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setReveal(false);
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });

  const toggleMenu = () => {
    setReveal((prev) => !prev);
    setClicked((prev) => !prev);
  };

  const menuHandler = () => {
    toggleMenu();
    scrollUp();
  };

  return (
    <div
      className={`${Styles.Navbar_Wrapper} ${scroll ? Styles.NavScroll : ""}`}
    >
      <nav className={Styles.Navbar}>
        <Link to={"/"} onClick={scrollUp}>
          <div className={Styles.LeftSide}>
            {/* <p className={Styles.Slogan}>D&E</p> */}

            <AnchorIcon sx={{ color: "white", fontSize: 30 }} />
          </div>
        </Link>

        <div className={Styles.RightSide}>
          <ul className={Styles.Navlink_Container}>
            <li>
              <Link to={"/"} className={Styles.Navlink} onClick={scrollUp}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"services"}
                className={Styles.Navlink}
                onClick={scrollUp}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to={"platforms"}
                className={Styles.Navlink}
                onClick={scrollUp}
              >
                Platforms
              </Link>
            </li>
            <li>
              <Link
                to={"contact"}
                className={Styles.Navlink}
                onClick={scrollUp}
              >
                Contact
              </Link>
            </li>
          </ul>

          <span
            className={`${Styles.MenuIcon} ${
              clicked ? Styles.MenuIcon_Clicked : ""
            }`}
            onClick={toggleMenu}
            ref={menuRef}
          >
            <MenuIcon sx={{ color: "white", fontSize: 30 }} />
            <ul
              className={`${Styles.Menu} ${reveal ? Styles.Reveal : ""}`}
              onClick={toggleMenu}
            >
              <li>
                <Link
                  className={Styles.Menu_NavLink}
                  onClick={menuHandler}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={Styles.Menu_NavLink}
                  onClick={menuHandler}
                  to={"services"}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={Styles.Menu_NavLink}
                  onClick={menuHandler}
                  to={"how we do it"}
                >
                  How We Do It
                </Link>
              </li>
              <li>
                <Link
                  className={Styles.Menu_NavLink}
                  onClick={menuHandler}
                  to={"platforms"}
                >
                  Platforms
                </Link>
              </li>
              <li>
                <Link
                  className={Styles.Menu_NavLink}
                  onClick={menuHandler}
                  to={"contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
