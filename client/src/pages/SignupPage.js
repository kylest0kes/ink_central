import React, { useState } from 'react';
import SignUp from '../components/SignUp';

export default function SignupPage() {
    const [userState, setUserState] = useState({
        username: "",
        password: "",
        name: "",
        age: "",
        male: false,
        female: false,
        other: false,
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
        console.log(userState.age);
        console.log("male " + userState.male);
        console.log("female " + userState.female);
        console.log("other " + userState.other);
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

    return (
            <SignUp 
            userState={userState}
            handleCheck={handleCheck}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
           /> 
    )
}
