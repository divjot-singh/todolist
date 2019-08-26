import React from 'react';

export default function Login(props){
    return (
        <div className="loginContainer">
            <h1>Please sign in to Continue</h1>
            <button onClick={props.signIn}><img src="google.png"></img>SignIn</button>
        </div>
    )
}