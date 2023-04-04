import React from "react";
import classes from "./NavItem.module.css";

export const NavItem: React.FC<{
  icon: JSX.Element;
  children?: React.ReactNode;
}> = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <li className={classes.navItem}>
      <a href="#" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};
