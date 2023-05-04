import React from "react";
import classes from "./SideBar.module.css";

export const SideBar: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className={classes.contain}>{props.children}</div>;
};
