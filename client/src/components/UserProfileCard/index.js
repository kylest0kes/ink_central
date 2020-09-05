import React, { useEffect, useState } from 'react';
import './style.css';
import API from "../../utils/API";

export default function UserProfileCard(props) {
    const [post, setPost] = useState({
        postObj: {}
    })

    useEffect(()=>{
        API.getPostById(props.id)
        .then(res => {
            setPost({postObj: res.data[0]});
        });
    }, [])

    return (
        <div className="image-hover-wrapper">
            {/* this will be a link to the email artists about post */}
            <span className="image-hover-wrapper-banner">{post.postObj.title}</span>
            <a href="mailto:artistemail@email.com"><img alt="img" src={post.postObj.image}/>
            <span className="image-hover-wrapper-reveal">
                <p>{props.otherUser.user.name}<br/><i class="far fa-paper-plane"></i></p>
                <p>{post.postObj.description}</p>
            </span>
            </a>
        </div>
    )
}
