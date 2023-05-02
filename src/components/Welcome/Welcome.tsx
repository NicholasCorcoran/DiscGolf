import React from "react";
import { ScoreCardFeed } from "./ScoreCardFeed";
import { UserContext } from "../../context/user-context";
import classes from "./Welcome.module.css";
import { SideBar } from "./SideBar";
import { LeftSideBar } from "./LeftSideBar";

export const Welcome = () => {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <div className={classes.cont}>
        <SideBar>
          <LeftSideBar />
        </SideBar>
        <ScoreCardFeed />
        <SideBar>
          <p>right side bar (messages)</p>
        </SideBar>
      </div>
    </>
  );
};
