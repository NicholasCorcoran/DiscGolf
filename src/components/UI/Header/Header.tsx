import React from "react";
import classes from "./Header.module.css";
import frolfImage from "../../../assets/disc-golf-basket.jpg";
import burgerMenu from "../../../assets/hamburger-menu.png";

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Chrono Disc Golf</h1>
        <img src={burgerMenu} alt="hamburger Menu icon" />
      </header>

      <div className={classes["main-image"]}>
        <img src={frolfImage} alt="disc golf basket" />
      </div>
    </>
  );
};
