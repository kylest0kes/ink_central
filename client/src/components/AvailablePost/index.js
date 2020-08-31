import React from 'react';
import API from "../../utils/API";

import './style.css'

export default function AvailablePost(props) {
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
        <div className="wide-article-link">
            <div className="row">
                <div style={{width: "65%", height: "235px", overflow: "auto"}} className="text-area small-12 medium-9 columns">
                    <h4 className="article-title">
                        {props.title}
                    </h4>
                    <p className="article-author"><em>Artist: <a href="#" onClick={getUserInfo}>{props.user}</a></em></p>
                    <p className="article-elipsis">{props.description}</p>
                </div>
                <div className="small-12 medium-3 columns flex-container availableImg">
                    <img src={props.image}/>
                </div>
            </div>
        </div>
    )
}
