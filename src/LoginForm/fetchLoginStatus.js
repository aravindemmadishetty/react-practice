import React, { useState } from "react";

export const LoginContext = React.createContext()

const initialState = {
    isLoggedIn: false,
    loginError: null
}

export const ContextProvider = (props) => {
    const [state, setState] = useState(initialState)
    const setIsLoggedIn = (isLoggedIn) => setState({isLoggedIn})
    const setLoginError = ( loginError ) => setState({loginError}) 

    const login = (username, passwd) => {
        setIsLoggedIn(false)
        setLoginError(null)
        fetchLoginStatus( username, passwd, error => {
            if(error){
                setIsLoggedIn(false);
                setLoginError(error.message);
            }else{
                setIsLoggedIn(true);
                setLoginError(null);
            }
        })
        
    }

    const logout = ()=>{
        setIsLoggedIn(true);
        setLoginError(false);
    }

    return (
        <LoginContext.Provider value={{state, login, logout}}>
            {props.children}
        </LoginContext.Provider>
    )
}

function fetchLoginStatus(username, passwd, callback){
    if( username === 'username' && passwd === 'password'){
        callback(null)
    }
    else{
        callback( new Error("Invalid Credentials"));
    }
}