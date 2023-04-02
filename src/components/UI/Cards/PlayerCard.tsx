import React from "react";
import classes from "./PlayerCard.module.css";

export const PlayerCard: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className={classes.playerCard}>{props.children}</div>;
};
