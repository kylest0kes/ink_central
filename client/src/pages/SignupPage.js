import React, { useState } from 'react';
import SignUp from '../components/SignUp';

export default function SignupPage() {
    const [userState, setUserState] = useState({
        username: "",
        password: "",
        name: "",
        age: "",
        gender: "",
        location: "",
        email: "",
        artist: false,
        canvas: false
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

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(userState.name);
        console.log(userState.username);
        console.log(userState.password);
        console.log(userState.age);
        console.log(userState.gender)
        console.log(userState.location);
        console.log(userState.email);
        console.log("artist " + userState.artist);
        console.log("canvas " + userState.canvas)
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
