import React from 'react';
import API from "../../utils/API";
import './style.css';

export default function ViewAllCard(props) {
    const getUserInfo = () => {
        API.getUser(props.user)
            .then(result => {
                console.log(result);
                if (result.data[0]._id === props.authState.user._id) {
                    console.log("ID's Match!!");
                }
                else console.log("ID's don't match!");
            })
            .catch(err => console.log(err));
        }

    return (
        <div className="cell image-hover-wrapper">
            <span className="image-hover-wrapper-banner">{props.title}</span>
            {/* this will be a link to the artists user profile */}
            <a href="#"><img alt="img" src={props.image} />
            <span className="image-hover-wrapper-reveal" onClick={getUserInfo}>
                <p>{props.user}<br/><i className="fas fa-user" aria-hidden="true"></i></p>
            </span>
            </a>
        </div>
    )
}
