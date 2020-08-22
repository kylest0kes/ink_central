import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

export default function Login(props) {
    return (
        <div className="translucent-form-overlay">
            <h3>Login</h3>
            <div className="row columns">
                <label>Username
                    <input 
                        type="text" 
                        name="username"
                        value={props.userState.username} 
                        onChange={props.handleInputChange}
                    />
                </label>
            </div>
            <div className="row columns">
                <label>Password
                    <input 
                        type="password"
                        name="password" 
                        value={props.userState.password}
                        onChange={props.handleInputChange}
                    /> 
                </label>
            </div>
            <button type="submit" name="login" className="primary button expanded search-button" onClick={props.login}>
            Log in
            </button>
            <Link style={{color:"white", textDecoration:"underline"}} to="/">Sign up here.</Link>    
        </div>
    )
}
