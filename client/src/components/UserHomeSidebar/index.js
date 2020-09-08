import React, { Component } from 'react'
import ReactFilestack from 'filestack-react';
import API from "../../utils/API";
import './style.css';

export default class UserHomeSidebar extends Component {

    state = {
        profilePic: ""
    }
    
    onSuccess = (result) => {
        console.log(result.filesUploaded[0].url)
        console.log(this.props.authState.user._id)
        // this.setState({
        //     profilePic: result.filesUploaded[0].url
        // }, this.uploadProfilePic)
        API.uploadProfilePic(this.props.authState.user._id, { profilePic: result.filesUploaded[0].url })
        .then(res => {
            if(res.data._id) {
                console.log("update success!!");
                window.location.reload()
            }
            else alert("Make sure all feilds have been filled in!");
        })
        .catch(err => console.log(err));
    }

    onError = (error) => {
        console.error('error', error);
    }
    
    // uploadProfilePic = () => {
    //     API.uploadProfilePic({
    //         id: this.props.authState.user.id,
    //         profilePic: this.state.profilePic
    //     })
    //     .then(res => {
    //         if(res.data._id) {
    //             console.log("update success!!");
    //             window.location.reload()
    //         }
    //         else alert("Make sure all feilds have been filled in!");
    //     })
    //     .catch(err => console.log(err));
    // }

    render() {
        return (
            <div style={{top: "200px", bottom: "200px"}} className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas>
                <div className="grid-y grid-padding-x" style={{height: "100%"}}>
                    <br/>
                    <div className="cell shrink">
                        <img alt="img" className="thumbnail" src={this.props.authState.user.profilePic}/>
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
