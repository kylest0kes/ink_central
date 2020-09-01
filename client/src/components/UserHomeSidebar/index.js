import React from 'react';

import './style.css'

export default function UserHomeSidebar(props) {
    return (
        <div style={{top: "200px", bottom: "200px"}} className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas>
            <div className="grid-y grid-padding-x" style={{height: "100%"}}>
                <br/>
                <div className="cell shrink">
                    <img alt="img" className="thumbnail" src="https://placehold.it/350x350"/>
                </div>
                <div className="cell auto">
                    <h5 style={{textAlign: "center"}}>Hello {props.authState.user.username}!</h5>
                    <div className="user-options">
                        <button className="button button-rounded-hover">Change Profile Picture</button>
                        <a className="button button-rounded-hover">View My Profile</a>
                        <button className="button button-rounded-hover">Edit Profile</button>
                        <br/>
                        <a className="button button-rounded-hover" onClick={props.logout}>Logout</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
