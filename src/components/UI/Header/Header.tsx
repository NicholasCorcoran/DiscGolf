import React from "react";
import classes from "./Header.module.css";
import frolfImage from "../../../assets/disc-golf-basket.jpg";
import { NavBar } from "./NavBar";
import { NavItem } from "./NavItem";
import { DropDownMenu } from "./DropDownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faComment } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const menu = (
    <FontAwesomeIcon icon={faBars} size="2xl" style={{ color: "#29dbd8" }} />
  );
  const profile = (
    <FontAwesomeIcon icon={faUser} size="2xl" style={{ color: "#29dbd8" }} />
  );
  const messages = (
    <FontAwesomeIcon icon={faComment} size="2xl" style={{ color: "#29dbd8" }} />
  );

  return (
    <>
      <header className={classes.header}>
        <h1>Chrono Disc Golf</h1>

        <div className={classes.image}>
          <NavBar>
            <NavItem icon={menu}>
              <DropDownMenu />
            </NavItem>
            <NavItem icon={messages} />
            <NavItem icon={profile} />
          </NavBar>
        </div>
      </header>

      <div className={classes["main-image"]}>
        <img src={frolfImage} alt="disc golf basket" />
      </div>
    </>
  );
};
