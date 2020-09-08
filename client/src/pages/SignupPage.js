import React from 'react';
import SignUpHeroSlider from '../components/SignUpHeroSlider';

export default function SignupPage(props) {

    return (
        <SignUpHeroSlider isAuthorized={props.isAuthorized}/>

    )
}
