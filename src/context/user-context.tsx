import React from 'react';
import { AuthDataFormat } from '../models/authDataFormat';

export const UserContext = React.createContext({
    userInfo: new AuthDataFormat('','','',''),
    formState: true,
    userSignedIn: (userData: AuthDataFormat)=>{},
    changeForm: () => {}
});


export const UserProvider:React.FC<{children: React.ReactNode}> =  props => {
    const [auth, setAuth] = React.useState<AuthDataFormat>(new AuthDataFormat('','','',''));
    const [form, setForm] = React.useState(true);

    const onUserSignedin = (userData: AuthDataFormat) => {
        setAuth(userData);
    
    }
    const onChangeForm = () => {
        setForm((prevState)=> {return !prevState});
    }

    return(<UserContext.Provider value={{userInfo: auth,formState: form, userSignedIn: onUserSignedin, changeForm: onChangeForm}}>
        {props.children}
    </UserContext.Provider>)
} 

// {
//         accessToken: '',
//         displayName: '',
//         email: '',
//         uid: '',
//     }