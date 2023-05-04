import React from "react";
import { auth } from "../../firebaseSetup";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Discs } from "../Discs/Discs";
import classes from './LeftSideBar.module.css'

export const LeftSideBar = () => {
  const [dName, setDName] = React.useState<string | null>("");
  const nav = useNavigate();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setDName(user.displayName);
      } else {
        nav("/");
      }
    });
  }, [nav]);

  return (
    <div className={classes.container}>
      <h2>{dName}</h2>
      <Discs/>
      <h3>New Round</h3>
    </div>
  );
};
