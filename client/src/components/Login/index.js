import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

export default function Login(props) {
    return (
        <div className="login-form">
            <h3>Login</h3>
            <div className="row columns">
                <label>Username</label>
                <input 
                        type="text" 
                        name="username"
                        value={props.username} 
                        onChange={props.handleInputChange}
                    />
            </div>
            <div className="row columns">
                <label>Password</label>
                <input 
                        type="password"
                        name="password" 
                        value={props.password}
                        onChange={props.handleInputChange}
                    />
            </div>
            <button type="submit" name="login" className="primary button expanded search-button" onClick={props.login}>
            Log in
            </button>
            <Link style={{color:"white", textDecoration:"underline"}} to="/">Sign up here.</Link>    
        </div>
    )
}
