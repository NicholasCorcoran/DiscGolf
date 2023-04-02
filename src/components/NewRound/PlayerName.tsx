import React from "react";
import classes from "./PlayerName.module.css";
import { CoursesContext } from "../../context/course-store-context";

export const PlayerName: React.FC<{
  np: number;
  //   onBlur: (name: string) => void;
  onRemovePlayer: (id: number) => void;
  onBlur: (id: number, name: string) => void;
  name: string;
}> = (props) => {
  const label = "player" + props.np;
  const [playerName, setPlayerName] = React.useState("");

  React.useEffect(() => {
    setPlayerName(props.name);
  }, [props.name]);

  const ctx = React.useContext(CoursesContext);

  const removePlayer = () => {
    props.onRemovePlayer(props.np);
  };

  const onPlayerChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };
  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (playerName.trim() !== "") {
      ctx.onPlayerAdded(playerName);
      props.onBlur(props.np, playerName);
    }
  };

  return (
    <>
      <label htmlFor={label}>Player Name</label>
      <input
        id={label}
        name={label}
        type="text"
        value={playerName}
        onBlur={onBlurHandler}
        onChange={onPlayerChanged}
      />
      <img
        alt=""
        className={classes.deleteimg}
        onClick={removePlayer}
        src="https://cdn.pixabay.com/photo/2014/03/25/15/19/cross-296507_960_720.png"
      />
    </>
  );
};
