import React from "react";
import classes from "./Header.module.css";
import frolfImage from "../../../assets/disc-golf-basket.jpg";
import burgerMenu from "../../../assets/hamburger-menu.png";
import profileImg from "../../../assets/playerIcon.jpg";
import { BurgerMenu } from "./BurgerMenu";

export const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const onMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

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
            onClick={onMenuClick}
            src={burgerMenu}
            alt="hamburger Menu icon"
          />
        </div>
        {menuOpen ? <BurgerMenu /> : null}
      </header>

      <div className={classes["main-image"]}>
        <img src={frolfImage} alt="disc golf basket" />
      </div>
    </>
  );
};
