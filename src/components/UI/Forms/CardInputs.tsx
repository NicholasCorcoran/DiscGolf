import React, { ChangeEvent } from "react";
import { NewCourseLayoutData } from "../../NewCourses/NewCourseLayoutData";
import { Card } from "../Cards/Card";
import classes from "./CardInputs.module.css";

export const CardInputs: React.FC<{ player: string }> = (props) => {
  const [frontNine, setFrontNine] = React.useState<number[]>([]);
  const [backNine, setBackNine] = React.useState<number[]>([]);
  const [f9Total, setF9Total] = React.useState(0);
  const [b9Total, setB9Total] = React.useState(0);

  const onFrontNineScoreChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFrontNine((state) => {
      return [...state, +event.target.value];
    });
    setF9Total((state) => {
      return state + +event.target.value;
    });
  };
  const onBackNineScoreChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBackNine((state) => {
      return [...state, +event.target.value];
    });
    setB9Total((state) => {
      return state + +event.target.value;
    });
  };

  return (
    <Card>
      <div className={classes.div}>
        <label className={classes.label} htmlFor="player">
          {props.player}
        </label>
        <NewCourseLayoutData />
        <form className={classes.form}>
          <input
            onChange={onFrontNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onFrontNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onFrontNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onFrontNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onFrontNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onFrontNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onFrontNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onFrontNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onFrontNineScoreChange}
            className={classes.input}
          ></input>
        </form>
        <p>F9:{f9Total}</p>
        <form>
          <input
            onChange={onBackNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onBackNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onBackNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onBackNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onBackNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onBackNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onBackNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onBackNineScoreChange}
            className={classes.input}
          ></input>
          <input
            onChange={onBackNineScoreChange}
            className={classes.input}
          ></input>
        </form>
        <p>B9:{b9Total}</p>
        <p>Final Score:{f9Total + b9Total}</p>
      </div>
    </Card>
  );
};
