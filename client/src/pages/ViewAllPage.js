import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ViewAllCard from '../components/ViewAllCard';
import API from "../utils/API";

export default function ViewAllPage(props) {
    const [posts, setPosts] = useState({
        postArr: []
    })

    useEffect(() => {
        API.getPosts()
        .then(res => {
            console.log("res.data: ")
            console.log(res.data)
            setPosts({postArr: res.data})
        })
    }, [])

    return (
        <div>
            <Header logout={props.logout} />
            {posts.postArr.map(post => (
                <ViewAllCard 
                    id={post.id}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    type={post.type}
                    author={post.author}
                />
    ))}
        </div>
    )
}
