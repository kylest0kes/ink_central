import React, { useState } from 'react';
import SignUp from '../SignUp';
import API from '../../utils/API'
import HeroSlider, {
    Slide,
    SideNav,
    OverlayContainer
  } from "hero-slider";
import hero1 from '../../images/hero1.jpeg';
import hero2 from '../../images/hero2.jpeg';
import hero3 from '../../images/hero3.jpeg';
import hero4 from '../../images/hero4.jpeg';
import hero5 from '../../images/hero5.jpeg';


export default function SignUpHeroSlider(props) {
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
        <HeroSlider
          slidingAnimation="fade"
          orientation="horizontal"
          initialSlide={1}
          onBeforeChange={(previousSlide, nextSlide) =>
            console.log("onBeforeChange", previousSlide, nextSlide)
          }
          onChange={nextSlide => console.log("onChange", nextSlide)}
          onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
          style={{
            backgroundColor: "#000"
          }}
          settings={{
            slidingDuration: 400,
            slidingDelay: 100,
            shouldAutoplay: true,
            autoplayDuration: 3000,
            height: "100vh"
          }}
        >
          <OverlayContainer>
          <SignUp 
            userState={userState}
            handleCheck={handleCheck}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            handleRadio={handleRadio}
           /> 
          </OverlayContainer>
    
          <Slide
            shouldRenderMask
            background={{
              backgroundBlendMode: "luminosity",
              maskBackgroundBlendMode: "luminosity",
              backgroundImage: hero1
            }}
          />
    
          <Slide
            shouldRenderMask
            background={{
              backgroundBlendMode: "luminosity",
              maskBackgroundBlendMode: "luminosity",
              backgroundImage: hero2
            }}
          />
    
          <Slide
            shouldRenderMask
            background={{
              backgroundBlendMode: "luminosity",
              maskBackgroundBlendMode: "luminosity",
              backgroundImage: hero3
            }}
          />
    
          <Slide
            shouldRenderMask
            background={{
              backgroundBlendMode: "luminosity",
              maskBackgroundBlendMode: "luminosity",
              backgroundImage: hero4
            }}
          />

          <Slide
            shouldRenderMask
            background={{
              backgroundBlendMode: "luminosity",
              maskBackgroundBlendMode: "luminosity",
              backgroundImage: hero5
            }}
          />
    

          <SideNav
            position={{
              top: "0",
              right: "0"
            }}
          />
        </HeroSlider>
    )
}
