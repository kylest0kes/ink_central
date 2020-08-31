import React from 'react';


import './style.css'

export default function LookingPost(props) {
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
                                <li><a href="https://google.com" target="blank">{props.user}</a></li>
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
