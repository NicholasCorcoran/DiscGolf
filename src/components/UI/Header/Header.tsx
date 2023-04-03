import React from "react";
import classes from "./Header.module.css";
import frolfImage from "../../../assets/disc-golf-basket.jpg";
import burgerMenu from "../../../assets/hamburger-menu.png";
import profileImg from "../../../assets/playerIcon.jpg";

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Chrono Disc Golf</h1>
        <div>
          <img
            className={classes.image2}
            src={profileImg}
            alt="profile holder"
          />
          <img
            className={classes.image}
            src={burgerMenu}
            alt="hamburger Menu icon"
          />
        </div>
      </header>

      <div className={classes["main-image"]}>
        <img src={frolfImage} alt="disc golf basket" />
      </div>
    </>
  );
};
