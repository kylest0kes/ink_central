import React from 'react';

import './style.css';

export default function ViewAllCard(props) {
    return (
        <div className="image-hover-wrapper">
            <span className="image-hover-wrapper-banner">{props.title}</span>
            {/* this will be a link to the artists user profile */}
            <a href="https://github.com"><img alt="img" src="https://via.placeholder.com/300"/>
            <span className="image-hover-wrapper-reveal">
                <p>{props.author}<br/><i className="fas fa-user" aria-hidden="true"></i></p>
            </span>
            </a>
        </div>
    )
}
