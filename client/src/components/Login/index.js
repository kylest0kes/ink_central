import React from 'react';
import { Link } from "react-router-dom";
import './style.css'

export default function Login() {
    return (
        <div className="translucent-form-overlay">
            <h3>Login</h3>
            <div className="row columns">
                <label>Username
                    <input 
                        type="text" 
                        name="username" 
                        
                    />
                </label>
            </div>
            <div className="row columns">
                <label>Password
                    <input 
                        type="password" 
                        name="password"
                        
                    /> 
                </label>
            </div>
            <button type="submit" className="primary button expanded search-button">
            Sign Up
            </button>
            <Link style={{color:"white", textDecoration:"underline"}} to="/">Sign up here.</Link>    
        </div>
    )
}
