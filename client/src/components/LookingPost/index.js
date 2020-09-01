import React from 'react';
import API from "../../utils/API";


import './style.css'

export default function LookingPost(props) {
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
        <article className="grid-container">
            <div className="grid-x align-center">
                <div className="cell medium-8">
                    <div className="blog-post">
                        <h3>{props.title}</h3>
                        <img className="thumbnail" alt="postImage" src={props.image}/>
                        <p>{props.description}</p>
                        <div className="callout">
                            <ul className="menu simple">
                                <li><a href="https://google.com" target="blank" name={props.user} onClick={getUserInfo}>{props.user}</a></li>
                                {/* need to find out how to get props.email in the mailto href */}
                                <li><a href="mailto:{props.email}" target="blank"><i class="fas fa-envelope"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
