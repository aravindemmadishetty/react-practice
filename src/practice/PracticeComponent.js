import React, { useContext } from "react";

const LoginContext = React.createContext();

class PracticeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "first-name": '',
            "user-logged": false,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked: target.value;
        const name = target.name
        console.log(value);
        
        this.setState({
            [name] : value,
        })
    }

    render(){
        return (
            <>
                <div><p>First Name: </p><input value = {this.state['first-name']} type="text" name="first-name" onChange={this.handleChange}/></div>
                <div>User Login status: <input value = {this.state['user-logged']} type="checkbox" name="user-logged" onChange={this.handleChange}/></div>
                <LoginContext.Provider value={this.state['user-logged']}>
                    <ShowWelcomeMessage name={this.state['first-name']} />
                </LoginContext.Provider>
            </>
        )
    }
}

function ShowWelcomeMessage(props){
    const loginStatus = useContext(LoginContext)
    if( loginStatus === true){
        return <p>Welcome {props.name} !</p>
    }
    return <p>You are not logged in</p>
}

export default PracticeComponent;