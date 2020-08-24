import React from 'react';

import './style.css';

export default function ViewAllCard() {
    return (
        <div className="image-hover-wrapper">
            <span className="image-hover-wrapper-banner">Old Junky Bikes</span>
            <a href="https://github.com"><img alt="img" src="https://via.placeholder.com/300"/>
            {/* this will be a link to the artists user profile */}
            <span className="image-hover-wrapper-reveal">
                <p>Artist Username<br/><i className="fa fa-link" aria-hidden="true"></i></p>
            </span>
            </a>
        </div>
    )
}
