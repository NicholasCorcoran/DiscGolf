import React from "react";
import { ScoreCardFeed } from "./ScoreCardFeed";

import classes from "./Welcome.module.css";
import { SideBar } from "./SideBar";
import { LeftSideBar } from "./LeftSideBar";

export const Welcome = () => {
  return (
    <>
      <div className={classes.cont}>
        <div className={classes.lside}>
        <SideBar>
          <LeftSideBar />
        </SideBar>
        </div>
        <div>
        <ScoreCardFeed />
        </div>
        <div className={classes.rside}>
        <SideBar>
          <p>right side bar (messages)</p>
        </SideBar>
        </div>
      </div>
    </>
  );
};
