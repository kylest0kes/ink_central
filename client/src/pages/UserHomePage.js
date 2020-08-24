import React from 'react';
import Header from '../components/Header';
import './style.css'

export default function UserHomePage() {
    return (
        <div>
            <Header />
            <div style={{top: "200px", bottom: "200px"}} className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas>
                <div className="grid-y grid-padding-x" style={{height: "100%"}}>
                    <br/>
                    <div className="cell shrink">
                        <img alt="img" className="thumbnail" src="https://placehold.it/550x350"/>
                    </div>
                    <div className="cell auto">
                        <h5 style={{textAlign: "center"}}>Hello Username!</h5>
                        <button class="button button-rounded-hover">Change Profile Image</button>
                        <a class="button button-rounded-hover">Logout</a>
                    </div>
                </div>
            </div>
                
            <div style={{marginTop: "25px"}} className="off-canvas-content" data-off-canvas-content>
                <div style={{marginBottom: "25px"}} className="title-bar hide-for-large">
                    <div className="title-bar-left">
                        <span className="title-bar-title">Username</span>
                    </div>
                </div>
                
                <article style={{marginRight: "15px", marginLeft: "15px"}} className="grid-container">
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
                                            {/* <div className="small-4 medium-2 columns">
                                                <img className="travel-feature-card-image" src="https://unsplash.it/600/600/?image=1081" alt=""/>
                                            </div> */}
                                            <div className="small-8 medium-10 columns">
                                                <h6 className="travel-feature-card-title">Title of the Post</h6>
                                                <p>Description from the Post</p>
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    
                
                    <hr/>

                </article>

            </div>
        </div>
    )
}
