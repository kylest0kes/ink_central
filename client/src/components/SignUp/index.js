import React from 'react';
import './style.css'

export default function SignUp(props) {


    return (
        <div className="translucent-form-overlay">
            <form onSubmit={props.handleFormSubmit}>
                <h3>Create an Account</h3>
                <div className="row columns">
                    <label>Name
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="ex. John Smith"
                            value={props.userState.name} 
                            onChange={props.handleInputChange}
                        />
                    </label>
                </div>
                <div className="row columns">
                    <label>Age
                        <input 
                            type="text" 
                            name="age" 
                            value={props.userState.age}
                            onChange={props.handleInputChange} 
                        /> 
                    </label>
                </div>
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
                    <label>Email
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="example@example.com"
                            value={props.userState.email}
                            onChange={props.handleInputChange}
                        />
                    </label>
                </div>
                <div className="row columns">
                    <label>Location
                        <input 
                            type="text" 
                            name="location" 
                            placeholder="ex. Orlando, FL"
                            value={props.userState.location}
                            onChange={props.handleInputChange}
                        />
                    </label>
                </div>
                <div className="row columns">
                    <fieldset className="fieldset">
                        <legend>Gender</legend>
                        <div className="polls-options">
                            <div>
                                <input onChange={props.handleRadio} type="radio" name="gender" value="male" id="male" />
                                <label for="male">Male</label>
                            </div>
                            <div>
                                <input onChange={props.handleRadio} type="radio" name="gender" value="female" id="female" />
                                <label for="female">Female</label>
                            </div>
                            <div>
                                <input onChange={props.handleRadio} type="radio" name="gender" value="other" id="other" />
                                <label for="other">Other/Prefer Not To Say</label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="row columns">
                <fieldset className="fieldset">
                    <legend>I am a...</legend>
                    <input id="checkbox12" type="checkbox" onChange={props.handleCheck} name="artist"/><label htmlFor="checkbox12">Artist</label>
                    <input id="checkbox22" type="checkbox" onChange={props.handleCheck} name="canvas"/><label htmlFor="checkbox22">Canvas</label>
                </fieldset>
                </div>
                <button type="submit" className="primary button expanded search-button">
                Sign Up
                </button>
            </form>
        </div>
    )
}
