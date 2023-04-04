import React from "react";
import classes from "./DropDownMenu.module.css";

export const DropDownMenu = () => {
  const DropDownItem: React.FC<{ children: React.ReactNode }> = (props) => {
    return <a className={classes.menuItem}>{props.children}</a>;
  };
  return (
    <div className={classes.dropDown}>
      <DropDownItem>Account</DropDownItem>
      <DropDownItem>New Round</DropDownItem>
      <DropDownItem>Add Course</DropDownItem>
      <DropDownItem>Course List</DropDownItem>
    </div>
  );
};
