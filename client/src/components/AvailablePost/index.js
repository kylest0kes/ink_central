import React from 'react';


import './style.css'

export default function AvailablePost(props) {
    return (
        <div className="wide-article-link">
            <div className="row">
                <div style={{width: "65%"}} className="text-area small-12 medium-9 columns">
                    <h4 style={{marginLeft: "8px"}}  className="article-title">
                        {props.title}
                    </h4>
                    {/* need to find out how to get props.email in the mailto href */}
                    <p className="article-author"><em>Artist: <a href="#">{props.user}</a></em> <a href="mailto:`${props.email}`" target="blank"><i class="fas fa-envelope"></i></a> </p>
                    <p style={{height: "170px", overflow: "auto"}} className="article-elipsis">{props.description}</p>
                </div>
                <div className="small-12 medium-3 columns flex-container availableImg">
                    <img src={props.image}/>
                </div>
            </div>
        </div>
    )
}
