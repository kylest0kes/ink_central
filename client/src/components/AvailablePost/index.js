import React from 'react';


import './style.css'

export default function AvailablePost() {
    return (
        <div className="wide-article-link">
            <div className="row">
                <div className="text-area small-12 medium-9 columns">
                    <h4 className="article-title">
                        Available Post Title
                    </h4>
                    <p className="article-author"><em>Artist: <a href="#">Artist Username as Link</a></em></p>
                    <p className="article-elipsis">Description Text</p>
                </div>
                <div className="small-12 medium-3 columns flex-container">
                    <img src="https://via.placeholder.com/250"/>
                </div>
            </div>
        </div>
    )
}
