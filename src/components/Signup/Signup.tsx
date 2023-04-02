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

export const Signup: React.FC = () => {
  const authc = auth;
  const ctx = React.useContext(UserContext);
  const [errorMessage, setErrorMessage] = React.useState<any>();

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
        displayName: userData.fName,
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
      ctx.userSignedIn(userInfo);
    } catch (e: any) {
      setErrorMessage(e.code);
    }

    // createUserWithEmailAndPassword(authc, userData.email, userData.password)
    //     .then(async(userCredential) => {
    //         const user = userCredential.user;

    //         const token = await user.getIdToken()
    //         const userData = new AuthDataFormat(token ,user.displayName, user.email!, user.uid)
    //         ctx.userSignedIn(userData)
    //     })
    //     .catch((e)=>{
    //         const errorCode = e.code;
    //         const errorMessage = e.message;
    //         console.log(errorCode)
    //         console.log(errorMessage)

    //     })
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
