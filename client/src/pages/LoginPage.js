import React from 'react';
import LoginHeroSlider from '../components/LoginHeroSlider'


export default function LoginPage(props) {
    
    return (
        <div>
          <LoginHeroSlider isAuthorized={props.isAuthorized}/>
        </div>
    )
}
