import React from "react";
import { ScoreCardFeed } from "./ScoreCardFeed";
import { UserContext } from "../../context/user-context";
import classes from "./Welcome.module.css";
import { SideBar } from "./SideBar";

export const Welcome = () => {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <div className={classes.cont}>
        <SideBar>
          <p>left side bar</p>
        </SideBar>
        <ScoreCardFeed />
        <SideBar>
          <p>right side bar (messages)</p>
        </SideBar>
      </div>
    </>
  );
};
