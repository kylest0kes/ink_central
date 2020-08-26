import React from 'react';

import './style.css'

export default function UserPostCard() {
    return (
            <article style={{ marginRight: "15px", marginLeft: "15px", width: "100%"}} className="grid-container">
                <div className="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
                    <div style={{width: "100%"}} className="travel-feature-card">
                        <div className="travel-feature-card-header" style={{height: "40px"}}>
                            <div className="row">
                                <div className="medium-12 columns">
                                    <div className="travel-feature-card-header-controls">
                                        <span><a style={{color: "red"}} href="#"><i className="fas fa-trash-alt"></i></a></span>
                                    </div>
                                </div>
                            </div>  
                        </div>

                        <div className="travel-feature-card-details">
                            <div className="row">
                                <div className="small-12 medium-9 columns travel-feature-card-content">
                                    <div className="row">
                                        <div className="small-4 medium-2 columns">
                                            <img className="travel-feature-card-image" src="https://placehold.it/250x250" alt=""/>
                                        </div>
                                        <div className="small-8 medium-10 columns">
                                            <h6 className="travel-feature-card-title">Title of the Users Post</h6>
                                            <p>Description from the Users Post</p>
                                        </div>
                                    </div> 
                                </div>
                            </div> 
                        </div>
                    </div>
                    
                </div>
            </article>
    )
}
