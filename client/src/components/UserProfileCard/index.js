import React from 'react';


import './style.css'

export default function UserProfileCard() {
    return (
        <div className="image-hover-wrapper">
            <span className="image-hover-wrapper-banner">Old Junky Bikes</span>
            <a href="mailto:artistemail@email.com"><img alt="img" src="https://via.placeholder.com/300"/>
            {/* this will be a link to the email artists about post */}
            <span className="image-hover-wrapper-reveal">
                <p>Message Artist<br/><i class="far fa-paper-plane"></i></p>
            </span>
            </a>
        </div>
    )
}
