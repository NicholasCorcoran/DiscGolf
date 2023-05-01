import React from "react";
import classes from "./DropDownMenu.module.css";
import { Link } from "react-router-dom";
import { NavBarContext } from "../../../context/navbar-context";

export const DropDownMenu = () => {
  const ctx = React.useContext(NavBarContext);

  const DropDownItem: React.FC<{ link: string; children: React.ReactNode }> = (
    props
  ) => {
    return (
      <Link
        to={props.link}
        className={classes.menuItem}
        onClick={ctx.setIsOpen}
      >
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
