import React from "react";
import { UserForm } from "../UI/Forms/UserForm";
import { UserContext } from "../../context/user-context";
import { UserFormatType } from "../../models/userFormat";
import {
  setPersistence,
  createUserWithEmailAndPassword,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../../firebaseSetup";
import { AuthDataFormat } from "../../models/authDataFormat";
import { updateProfile } from "firebase/auth";
import { Card } from "../UI/Cards/Card";
import { useNavigate } from "react-router-dom";
import { chronoFirebase } from "../../http";

type signupForms = {
  displayName: string;
  fName: string;
  lName: string;
};

const createUser = (uid: string, data: signupForms) => {
  chronoFirebase
    .post(`/PlayerData/${uid}.json`, JSON.stringify(data))
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const Signup: React.FC = () => {
  const authc = auth;
  const ctx = React.useContext(UserContext);
  const [errorMessage, setErrorMessage] = React.useState<any>();
  const nav = useNavigate();

  const onSubmitHandler = async (userData: UserFormatType) => {
    try {
      await setPersistence(authc, browserLocalPersistence);
      const userCredential = await createUserWithEmailAndPassword(
        authc,
        userData.email,
        userData.password
      );
      console.log("hello");
      const authData = userCredential.user;
      updateProfile(authData, {
        displayName: userData.dName,
        photoURL:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      });
      const token = await authData.getIdToken();
      const userInfo = new AuthDataFormat(
        token,
        authData.displayName,
        authData.email!,
        authData.uid
      );
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("player_uid", JSON.stringify(authData.uid));
      const signupData = {
        displayName: userData.dName,
        fName: userData.fName,
        lName: userData.lName,
      } as signupForms;
      createUser(authData.uid, signupData);
      ctx.userSignedIn(userInfo);
      ctx.login();
      nav("/player");
    } catch (e: any) {
      setErrorMessage(e.code);
    }
  };

  return (
    <Card>
      <UserForm
        formName="Signup"
        onSubmit={onSubmitHandler}
        errorMessage={errorMessage}
      />
    </Card>
  );
};
