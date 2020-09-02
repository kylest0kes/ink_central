import React, { useState } from 'react';
import Login from '../Login';
import API from '../../utils/API';
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

export default function LoginHeroSlider(props) {
  const [userState, setUserState] = useState({
    username: "",
    password: "",
    error: "",
    display: false,
    redirect: "/",
    loggedIn: true
  })

  const login = e => {
      e.preventDefault();
      API.login({
          username: userState.username.toLowerCase(),
          password: userState.password
      })
      .then(res => {
          if (res.data.message) {
            setUserState({
              error: res.data.message
            });
          } else {
            console.log("login successful")
            props.isAuthorized();
            setUserState({ ...userState, loggedIn: true })
          }
        })
        .catch(err => {
          console.log(err);
          setUserState({ error: "A server error has occured." });
        });

      setUserState({ password: "" });
  }

  const handleInputChange = event => {
      const { name, value } = event.target;
      setUserState({
          ...userState,
        [name]: value.trim()
      });
    };



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
            <Login 
                  login={login}
                  handleInputChange={handleInputChange}
                  username={userState.username}
                  password={userState.password}
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
      );
}
