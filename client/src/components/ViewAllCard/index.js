import React from 'react';
import API from "../../utils/API";
import './style.css';

export default function ViewAllCard(props) {
    const getUserInfo = () => {
        API.getUser(props.user)
            .then(result => {
                console.log(result);
                if (result.data[0]._id === props.authState.user._id) {
                    window.location.replace("/userHome");
                }
                else {
                    window.location.replace("/profile/" + result.data[0]._id)
                }

            })
            .catch(err => console.log(err));
        }

    return (
        <div className="cell image-hover-wrapper">
            <span className="image-hover-wrapper-banner">{props.title}</span>
            {/* this will be a link to the artists user profile */}
            <a><img alt="img" src={props.image}/>
            <span className="image-hover-wrapper-reveal" onClick={getUserInfo}>
                <p>{props.user}<br/><i className="fas fa-user" aria-hidden="true"></i><br/>{props.type}</p>
            </span>
            </a>
        </div>
    )
}
