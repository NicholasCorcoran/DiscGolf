import React from "react";
import classes from "./NavBar.module.css";

export const NavBar: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <nav>
      <ul className={classes.navBar}>{props.children}</ul>
    </nav>
  );
};
