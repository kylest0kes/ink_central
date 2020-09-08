import React from 'react';

export default function UserProfileSidebar(props) {
    return (
        <div style={{top: "200px", bottom: "200px"}} className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas>
            <div className="grid-y grid-padding-x" style={{height: "100%"}}>
                <br/>
                <div className="cell shrink">
                    <img alt="img" className="thumbnail" src={props.otherUser.user.profilePic}/>
                </div>
                <div style={{textAlign: "center"}} className="cell auto">
                    <h4>{props.otherUser.user.name}</h4>
                    <hr/>
                    <h6>User Bio</h6>
                </div>
            </div>
        </div>
    )
}
