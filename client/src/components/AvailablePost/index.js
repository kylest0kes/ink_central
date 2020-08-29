import React from 'react';


import './style.css'

export default function AvailablePost(props) {
    return (
        <div className="wide-article-link">
            <div className="row">
                <div className="text-area small-12 medium-9 columns">
                    <h4 className="article-title">
                        {props.title}
                    </h4>
                    <p className="article-author"><em>Artist: {props.user}<a href="#">Artist Username as Link</a></em></p>
                    <p className="article-elipsis">{props.description}</p>
                </div>
                <div className="small-12 medium-3 columns flex-container">
                    <img src={props.image}/>
                </div>
            </div>
        </div>
    )
}
