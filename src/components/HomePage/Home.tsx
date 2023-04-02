import React from "react";
import { Login } from "../Login/Login";
import { Signup } from "../Signup/Signup";
import { UserContext } from "../../context/user-context";

export const Home = () => {

    const ctx = React.useContext(UserContext);

    
    return  (<>
        {ctx.formState ? <Login></Login>: <Signup></Signup>}
    </>)
}