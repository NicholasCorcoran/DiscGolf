import React from "react";
import { FormErrorMessagingHandler } from "../ErrorHandling/FormErrorMessageHandling";
import classes from "./SignupForm.module.css";

export const SignupForm: React.FC<{
  onRePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReBlur: () => void;
  onFNBlur: () => void;
  onLNBlur: () => void;
  reErrorMessage: string;
  fNErrorMessage: string;
  lNErrorMessage: string;
}> = (props) => {
  // const repasswordClass =

  const rClass = props.reErrorMessage ? classes.rNotValid : classes.input3;
  const fClass = props.fNErrorMessage ? classes.fNotValid : classes.input4;
  const lClass = props.lNErrorMessage ? classes.lNotValid : classes.input5;

  return (
    <>
      <label htmlFor="repassword" className={classes.label3}>
        Re-enter Password
        {props.reErrorMessage ? (
          <FormErrorMessagingHandler errorMessage={props.reErrorMessage} />
        ) : null}
      </label>
      <input
        className={rClass}
        id="repassword"
        type="text"
        name="repassword"
        onBlur={props.onReBlur}
        onChange={props.onRePasswordChange}
      />
      <label htmlFor="displayname" className={classes.label4}>
        First Name
        {props.fNErrorMessage ? (
          <FormErrorMessagingHandler errorMessage={props.fNErrorMessage} />
        ) : null}
      </label>
      <input
        className={fClass}
        id="displayname"
        type="text"
        name="displayname"
        onBlur={props.onFNBlur}
        onChange={props.onFNameChange}
      />
      <label htmlFor="fname" className={classes.label4}>
        First Name
        {props.fNErrorMessage ? (
          <FormErrorMessagingHandler errorMessage={props.fNErrorMessage} />
        ) : null}
      </label>
      <input
        className={fClass}
        id="fname"
        type="text"
        name="fname"
        onBlur={props.onFNBlur}
        onChange={props.onFNameChange}
      />
      <label htmlFor="lname" className={classes.label5}>
        Last Name
        {props.lNErrorMessage ? (
          <FormErrorMessagingHandler errorMessage={props.lNErrorMessage} />
        ) : null}
      </label>
      <input
        className={lClass}
        id="lname"
        type="text"
        name="lname"
        onBlur={props.onLNBlur}
        onChange={props.onLNameChange}
      />
    </>
  );
};
