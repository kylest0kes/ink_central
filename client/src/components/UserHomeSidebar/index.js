import React, { Component } from 'react'
import ReactFilestack from 'filestack-react';

import './style.css'

export default class UserHomeSidebar extends Component {
    
    onSuccess = (result) => {
        console.log(result.filesUploaded[0].url)
        this.setState({
            ...this.state,
            image: result.filesUploaded[0].url
        })
    }

    onError = (error) => {
        console.error('error', error);
    }
    
    render() {
        return (
            <div style={{top: "200px", bottom: "200px"}} className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas>
                <div className="grid-y grid-padding-x" style={{height: "100%"}}>
                    <br/>
                    <div className="cell shrink">
                        <img alt="img" className="thumbnail" src="https://placehold.it/350x350"/>
                    </div>
                    <div className="cell auto">
                        <h5 style={{textAlign: "center"}}>Hello {this.props.authState.user.username}!</h5>
                        <div className="user-options">

                            <ReactFilestack
                                apikey={"AG1DG3OnDQ62gOmYIMFPCz"}
                                componentDisplayMode={{
                                    type: 'button',
                                    customText: "Change Profile Picture",
                                    customClass: "button button-rounded-hover"
                                }}
                                onSuccess={this.onSuccess}
                                onError={this.onError}
                            />
                            
                            <a className="button button-rounded-hover">View My Profile</a>
                            <button className="button button-rounded-hover">Edit Profile</button>
                            <br/>
                            <a className="button button-rounded-hover" onClick={this.props.logout}>Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
