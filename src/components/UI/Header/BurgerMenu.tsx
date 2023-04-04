import React from "react";
import classes from "./BurgerMenu.module.css";

export const BurgerMenu = () => {
  return (
    <div className={classes.card}>
      <ul className={classes.item}>
        <li>Profile</li>
        <li>New Round</li>
        <li>New Course</li>
        <li>Courses</li>
      </ul>
    </div>
  );
};
