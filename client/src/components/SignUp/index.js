import React from 'react';
import './style.css'

export default function SignUp() {
    return (
        <div className="translucent-form-overlay">
            <form>
                <h3>Create an Account</h3>
                <div className="row columns">
                    <label>Name
                        <input type="text" name="name" placeholder="ex. John Smith"/>
                    </label>
                </div>
                <div className="row columns">
                    <label>Gender
                    <select name="gender" type="text">
                        <option value="" disabled selected hidden>Select One</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other/Prefer Not To Say</option>
                    </select>
                    </label>  
                </div>
                <div className="row columns">
                    <label>Age
                        <input type="text" name="age"/> 
                    </label>
                </div>
                <div className="row columns">
                    <label>Username
                        <input type="text" name="username"/> 
                    </label>
                </div>
                <div className="row columns">
                    <label>Email
                    <input type="text" name="email" placeholder="example@example.com"/>
                    </label>
                </div>
                <div className="row columns">
                    <label>Location
                        <input type="text" name="location" placeholder="ex. Orlando, FL"/>
                    </label>
                </div>
                <div className="row columns">
                <fieldset className="fieldset">
                    <legend>I am a...</legend>
                    <input id="checkbox12" type="checkbox"/><label for="checkbox12">Artist</label>
                    <input id="checkbox22" type="checkbox"/><label for="checkbox22">Customer</label>
                </fieldset>
                </div>
                <button type="button" className="primary button expanded search-button">
                Sign Up
                </button>
            </form>
        </div>
    )
}
