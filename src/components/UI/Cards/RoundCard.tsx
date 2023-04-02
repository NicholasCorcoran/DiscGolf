import React from "react";
import classes from "./RoundCard.module.css";

export const RoundCard: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className={classes.roundCard}>{props.children}</div>;
};
