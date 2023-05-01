import React from "react";
import classes from "./DropDownMenu.module.css";
import { Link } from "react-router-dom";

export const DropDownMenu = () => {
  const DropDownItem: React.FC<{ link: string; children: React.ReactNode }> = (
    props
  ) => {
    return (
      <Link to={props.link} className={classes.menuItem}>
        {props.children}
      </Link>
    );
  };
  return (
    <div className={classes.dropDown}>
      <DropDownItem link="/player">Account</DropDownItem>
      <DropDownItem link="/new_round">New Round</DropDownItem>
      <DropDownItem link="/courses/new_course">Add Course</DropDownItem>
      <DropDownItem link="/courses">Course List</DropDownItem>
    </div>
  );
};
<Link to={`/new_round`}>Start a New Round</Link>;
