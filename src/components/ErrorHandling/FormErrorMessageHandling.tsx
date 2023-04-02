import React from "react";
import classes from "./FormErrorMessageHandling.module.css";

export const FormErrorMessagingHandler: React.FC<{ errorMessage: any }> = (
  props
) => {
  return (
    <>
      <em className={classes.em}>{props.errorMessage}</em>
    </>
  );
};
