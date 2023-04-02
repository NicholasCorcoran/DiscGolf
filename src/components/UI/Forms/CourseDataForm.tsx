import React, { ChangeEvent } from "react";
import classes from "./CourseDataForm.module.css";

export const CourseDataForm: React.FC<{
  onChangeInput: (event: ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <form className={classes.form}>
      <input onChange={props.onChangeInput} className={classes.input}></input>
      <input onChange={props.onChangeInput} className={classes.input}></input>
      <input onChange={props.onChangeInput} className={classes.input}></input>
      <input onChange={props.onChangeInput} className={classes.input}></input>
      <input onChange={props.onChangeInput} className={classes.input}></input>
      <input onChange={props.onChangeInput} className={classes.input}></input>
      <input onChange={props.onChangeInput} className={classes.input}></input>
      <input onChange={props.onChangeInput} className={classes.input}></input>
      <input onChange={props.onChangeInput} className={classes.input}></input>
    </form>
  );
};
