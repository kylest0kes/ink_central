import React from 'react';
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

export default function HeroSliderComp() {
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
            <h1>Test</h1>
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
