import React from "react";
import classes from "./NavItem.module.css";
import { NavBarContext } from "../../../context/navbar-context";

export const NavItem: React.FC<{
  icon: JSX.Element;
  children?: React.ReactNode;
}> = (props) => {
  const [open, setOpen] = React.useState(false);
  const ctx = React.useContext(NavBarContext);

  return (
    <li className={classes.navItem}>
      <a onClick={() => ctx.setIsOpen()}>{props.icon}</a>
      {ctx.isOpen && props.children}
    </li>
  );
};
