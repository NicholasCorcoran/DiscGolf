import React from "react";
import { ScoreCardFeed } from "./ScoreCardFeed";
import { UserContext } from "../../context/user-context";

export const Welcome = () => {
  const ctx = React.useContext(UserContext);

  return (
    <>
      <div>
        <header>
          <h2>DisplayName</h2>
        </header>
        <div>
          <h2>DiscBag</h2>
          <h2>Messages</h2>
        </div>
        <div>
          <ScoreCardFeed />
        </div>
      </div>
    </>
  );
};
