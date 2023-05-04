import React, { useState } from "react";
import { UserFormatType } from "../../../models/userFormat";

import { UserContext } from "../../../context/user-context";
import classes from "./UserForm.module.css";
import { SignupForm } from "../../Signup/SignupForm";
import { FormErrorMessagingHandler } from "../../ErrorHandling/FormErrorMessageHandling";

export const UserForm: React.FC<{
  formName: string;
  errorMessage: any;
  onSubmit: (userDataInputs: UserFormatType) => void;
}> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [dName, setDName] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [eTouched, setETouched] = useState(false);
  const [pTouched, setPTouched] = useState(false);
  const [dTouched, setDTouched] = useState(false);
  const [reTouched, setReTouched] = useState(false);
  const [fNTouched, setFNTouched] = useState(false);
  const [lNTouched, setLNTouched] = useState(false);
  const [eValid, setEValid] = useState(false);
  const [pValid, setPValid] = useState(false);
  const [dValid, setDValid] = useState(false);
  const [reValid, setReValid] = useState(false);
  const [fNValid, setFNValid] = useState(false);
  const [lNValid, setLNValid] = useState(false);

  const eEM = eTouched && !eValid ? "Please Enter Valid Email Address" : "";
  const pEM =
    pTouched && !pValid
      ? "Please Enter Something Longer than 6 Characters"
      : "";
  const reEM = reTouched && !reValid ? "Does not match password" : "";
  const dEM = dTouched && !dValid ? "Please Enter Display Name" : "";
  const fnEM = fNTouched && !fNValid ? "Please Enter First Name" : "";
  const lnEM = lNTouched && !lNValid ? "Please Enter Last Name" : "";
  const eClass = eTouched && !eValid ? classes.eNotValid : classes.input1;
  const pClass = pTouched && !pValid ? classes.pNotValid : classes.input2;

  const ctx = React.useContext(UserContext);

  const onEmailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };
  const onRePasswordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepassword(event.target.value);
  };
  const onFNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFName(event.target.value);
  };
  const onLNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLName(event.target.value);
  };
  const onDNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDName(event.target.value);
    console.log(dName);
  };

  const onEmailBlur = () => {
    if (email.trim() !== "" && email.includes("@") && email.includes(".com")) {
      setEValid(true);
    } else {
      setEValid(false);
    }
    setETouched(true);
  };

  const onPassBlur = () => {
    if (password.trim() !== "" && password.length > 6) {
      setPValid(true);
    } else {
      setPValid(false);
    }
    setPTouched(true);
  };

  const onRePassBlur = () => {
    if (repassword.trim() !== "" && repassword === password) {
      setReValid(true);
    } else {
      setReValid(false);
    }
    setReTouched(true);
  };

  const onDBlur = () => {
    if (dName.trim() !== "") {
      setDValid(true);
    } else {
      setDValid(false);
    }
    setDTouched(true);
  };

  const onFNBlur = () => {
    if (fName.trim() !== "") {
      setFNValid(true);
    } else {
      setFNValid(false);
    }
    setFNTouched(true);
  };
  const onLNBlur = () => {
    if (lName.trim() !== "") {
      setLNValid(true);
    } else {
      setLNValid(false);
    }
    setLNTouched(true);
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (props.formName === "Login") {
      if (
        email.trim() !== "" &&
        email.includes("@") &&
        email.includes(".com") &&
        password.trim() !== ""
      ) {
        const enteredUserData = new UserFormatType(
          email,
          password,
          repassword,
          dName,
          fName,
          lName
        );

        props.onSubmit(enteredUserData);
      } else {
        console.log("invalid inputs");
        return;
      }
    } else {
      if (
        email.trim() !== "" &&
        email.includes("@") &&
        email.includes(".com") &&
        password.trim() !== "" &&
        repassword.trim() !== "" &&
        fName.trim() !== "" &&
        lName.trim() !== ""
      ) {
        const enteredUserData = new UserFormatType(
          email,
          password,
          repassword,
          dName,
          fName,
          lName
        );
        console.log(enteredUserData);

        props.onSubmit(enteredUserData);
      } else {
        console.log("invalid inputs");
        return;
      }
    }
  };

  return (
    <div>
      <h1 className={classes.type}>{props.formName}</h1>
      {props.errorMessage ? (
        <FormErrorMessagingHandler errorMessage={props.errorMessage} />
      ) : null}
      <form className={classes.form}>
        <label htmlFor="email" className={classes.label1}>
          Email
          {eEM ? <FormErrorMessagingHandler errorMessage={eEM} /> : null}
        </label>
        <input
          className={eClass}
          id="email"
          type="text"
          name="email"
          onBlur={onEmailBlur}
          onChange={onEmailChangeHandler}
        />
        <label htmlFor="password" className={classes.label2}>
          Password
          {pEM ? <FormErrorMessagingHandler errorMessage={pEM} /> : null}
        </label>
        <input
          className={pClass}
          id="password"
          type="text"
          name="password"
          onBlur={onPassBlur}
          onChange={onPasswordChangeHandler}
        />
        {props.formName === "Signup" ? (
          <SignupForm
            onFNameChange={onFNameChangeHandler}
            onLNameChange={onLNameChangeHandler}
            onDNameChange={onDNameChangeHandler}
            onReBlur={onRePassBlur}
            onDBlur={onDBlur}
            onFNBlur={onFNBlur}
            onLNBlur={onLNBlur}
            onRePasswordChange={onRePasswordChangeHandler}
            fNErrorMessage={fnEM}
            dErrorMessage={dEM}
            lNErrorMessage={lnEM}
            reErrorMessage={reEM}
          />
        ) : null}
        {props.formName === "Signup" ? (
          <button className={classes.button2} onClick={ctx.changeForm}>
            Login
          </button>
        ) : (
          <button className={classes.button2} onClick={ctx.changeForm}>
            Signup
          </button>
        )}
        <button className={classes.button1} onClick={onSubmitHandler}>
          {props.formName}
        </button>
      </form>
    </div>
  );
};
