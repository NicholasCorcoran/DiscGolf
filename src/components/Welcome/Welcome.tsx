import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user-context";

export const Welcome = () => {
  const ctx = React.useContext(UserContext);
  console.log(ctx.userInfo.uid);

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
          <h2>ScoreCard</h2>
        </div>
      </div>
      <h1>WelcomePage</h1>
      <h1>
        <Link to={`/player/${ctx.userInfo.uid}`}>PlayerPage</Link>
      </h1>
      <h1>
        <Link to={`/new_round`}>Start a New Round</Link>
      </h1>
    </>
  );
};
