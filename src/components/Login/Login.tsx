import React from "react";
import { UserForm } from "../UI/Forms/UserForm";
import { UserFormatType } from "../../models/userFormat";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../../firebaseSetup";
import { AuthDataFormat } from "../../models/authDataFormat";
import { UserContext } from "../../context/user-context";
import { Card } from "../UI/Cards/Card";

export const Login: React.FC = () => {
  const ctx = React.useContext(UserContext);
  const [errorMessage, setErrorMessage] = React.useState<any>();

  const onFormSubmit = async (userData: UserFormatType) => {
    const authc = auth;
    try {
      await setPersistence(authc, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(
        authc,
        userData.email,
        userData.password
      );
      const authData = userCredential.user;
      const token = await authData.getIdToken();
      const userInfo = new AuthDataFormat(
        token,
        authData.displayName,
        authData.email!,
        authData.uid
      );
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("player_uid", JSON.stringify(authData.uid));
      ctx.userSignedIn(userInfo);
    } catch (e: any) {
      setErrorMessage(e.code);
    }
  };

  return (
    <Card>
      <UserForm
        formName="Login"
        onSubmit={onFormSubmit}
        errorMessage={errorMessage}
      />
    </Card>
  );
};
