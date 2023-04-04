import React from "react";
import { AuthDataFormat } from "../models/authDataFormat";

export const UserContext = React.createContext({
  userInfo: new AuthDataFormat("", "", "", ""),
  formState: true,
  isLogedIn: false,
  userSignedIn: (userData: AuthDataFormat) => {},
  changeForm: () => {},
  login: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [auth, setAuth] = React.useState<AuthDataFormat>(
    new AuthDataFormat("", "", "", "")
  );
  const [form, setForm] = React.useState(true);
  const [logedin, setLogedin] = React.useState(false);

  const onUserSignedin = (userData: AuthDataFormat) => {
    setAuth(userData);
  };
  const onLogin = () => {
    setLogedin(!logedin);
  };
  const onChangeForm = () => {
    setForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <UserContext.Provider
      value={{
        userInfo: auth,
        formState: form,
        isLogedIn: logedin,
        userSignedIn: onUserSignedin,
        changeForm: onChangeForm,
        login: onLogin,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

// {
//         accessToken: '',
//         displayName: '',
//         email: '',
//         uid: '',
//     }
