import React, { useEffect, useState } from 'react';
import API from "../../utils/API";

import './style.css'

export default function UserPostCard(props) {
    const [post, setPost] = useState({
        postObj: {}
    })

    useEffect(()=>{
        console.log(props.authState.user)
        API.getPostById(props.id, {user: props.authState.user.user})
        .then(res => {
            console.log("res.data: ")
            console.log(res.data[0]);
            setPost({postObj: res.data[0]});
        });
    }, [])

    const deletePost = () => {
        API.deletePost(props.id)
        .then(res => {
            console.log("Post " + props.id + " deleted!")
            window.location.reload()
        })
    }
    return (
        <article className="grid-container">
            <div className="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
                <div style={{width: "90%"}} className="travel-feature-card">
                    <div className="travel-feature-card-header" style={{height: "40px"}}>
                        <div className="row">
                            <div className="medium-12 columns">
                                <div className="travel-feature-card-header-controls">
                                    <span><a style={{color: "red"}} href="#" onClick={deletePost}><i className="fas fa-trash-alt"></i></a></span>
                                </div>
                            </div>
                        </div>  
                    </div>

                    <div className="travel-feature-card-details">
                        <div className="row">
                            <div className="small-12 medium-9 columns travel-feature-card-content">
                                <div style={{marginLeft: "10px"}} className="row">
                                    <div className="small-4 medium-2 columns">
                                        <img className="travel-feature-card-image" src={post.postObj.image} alt={props.title}/>
                                    </div>
                                    <div className="small-8 medium-10 columns">
                                        <h6 style={{marginLeft: "10px"}} className="travel-feature-card-title">{post.postObj.title}</h6>
                                        <p>{post.postObj.description}</p>
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
