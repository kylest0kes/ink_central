import React from 'react';


import './style.css'

export default function LookingPost() {
    return (
        <div>
            <article className="grid-container">
                <div className="grid-x align-center">
                    <div className="cell medium-8">
                        <div className="blog-post">
                            <h3>Post Title</h3>
                            <img className="thumbnail" alt="postImage" src="https://placehold.it/350x350"/>
                            <p>Post Description</p>
                            <div className="callout">
                                <ul className="menu simple">
                                    <li><a href="https://google.com" target="blank">Posted By: UserProfileLink</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}