import React, { useState } from 'react';
import SignUp from '../components/SignUp';
import API from '../utils/API';
import { Redirect } from 'react-router-dom';

export default function SignupPage(props) {
    const [userState, setUserState] = useState({
        username: "",
        password: "",
        name: "",
        age: "",
        gender: "",
        location: "",
        email: "",
        artist: false,
        canvas: false,
        error: ""
      });

      const handleInputChange = e => {
        // Getting the value and name of the input which triggered the change
        let value = e.target.value;
        const name = e.target.name;

        // Updating the input's state
        setUserState({
            ...userState,
            [name]: value
        });
      };

      // form submit event for creating a new user
    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(userState)
        API.saveUser({
            name: userState.name,
            age: userState.age,
            username: userState.username.toLowerCase(),
            password: userState.password,
            email: userState.email,
            location: userState.location,
            gender: userState.gender,
            artist: userState.artist,
            canvas: userState.canvas
        })
        .then(result => {
            if(result.data.message) {
                setUserState({
                    error: result.data.message
                })
            } else {
                console.log("registration Successful!!");
                props.isAuthorized()
            }
        })
        .catch(err => console.log(err));
        
    }
    
    const handleCheck = e => {
        const name = e.target.name;
        if (e.target.checked) {
            setUserState({
                ...userState, 
                [name]: true
            })
        }
    } 

    const handleRadio = e => {
        const genderChoice = e.target.value;
        if (e.target.checked) {
            setUserState({
                ...userState, 
                gender: genderChoice
            })
        }
    }

    return (
            <SignUp 
            userState={userState}
            handleCheck={handleCheck}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            handleRadio={handleRadio}
           /> 
    )
}
