import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import AvailablePost from '../components/AvailablePost';
import PostModal from '../components/PostModal';
import API from "../utils/API";

export default function AvailableInk(props) {
    const [posts, setPosts] = useState({
        postArr: []
    });

    let sortPostArr = []

    useEffect(() => {
        API.getPosts()
        .then(res => {
            console.log("all posts have been gathered!");
            res.data.forEach(post => {
                if(post.type === "Available") {
                    sortPostArr.push(post)
                }
                setPosts({postArr: sortPostArr});
            }); 
        });
    }, []);
    return (
        <div>
            <Header logout={props.logout}/> 
            {posts.postArr.map(post => (
                <AvailablePost
                id={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                type={post.type}
                author={post.author}
                user={post.user}
                />
            ))}
            <PostModal authState={props.authState}/>
        </div>
    )
}
