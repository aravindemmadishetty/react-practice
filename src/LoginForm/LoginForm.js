import React, { useContext, useState } from "react";
import { LoginContext } from "./fetchLoginStatus";

export default function LoginPage(){
    const { state: { isLoggedIn }} = useContext(LoginContext);

    return(
        <>
        {isLoggedIn && <Dashboard/>}
        {!isLoggedIn && <LoginForm />}
        </>
    )
}

export const Dashboard = ()=>{
    const { logout } = useContext(LoginContext);
    function handleClick(){
        logout();
    }
    return(
        <div>
            <div>You have successfully Logged in</div>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export const LoginForm = (props) => {
    const { state: {loginError}, login } = useContext(LoginContext);
    const [cred, setCred] = useState({
        username: '',
        passwd: ''
    })

    function handleChange(e){
        setCred(()=> ({
            [e.target.name] : e.target.value
        }))
    }

    function handleSubmit(){
        login(cred.username, cred.passwd)
        setCred({
            username: '',
            passwd: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div><label htmlFor="username">Username: </label><input onChange={handleChange} type="text" id="username" name="username" placeholder="username" value={cred.username}/></div>
            <div><label htmlFor="passwd">Password: </label><input onChange={handleChange} type="password" id="passwd" name="passwd" placeholder="password" value={cred.passwd}/></div>
            <div><label><input type="submit"/></label></div>
            {loginError && <div>{loginError}</div>}
        </form>
    )
}