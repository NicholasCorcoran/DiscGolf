import React from "react";
import { ScoreCardFeed } from "./ScoreCardFeed";
import { UserContext } from "../../context/user-context";
import classes from "./Welcome.module.css";

export const Welcome = () => {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <div>
        <header>
          <h2>DisplayName</h2>
        </header>
        <div className={classes.cont}>
          <h2>DiscBag</h2>
          <ScoreCardFeed />
          <h2>Messages</h2>
        </div>
      </div>
    </>
  );
};
