import React from "react";
import { auth } from "../../firebaseSetup";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
    <>
      <h3>{dName}</h3>
    </>
  );
};
