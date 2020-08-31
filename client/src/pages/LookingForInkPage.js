import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import LookingPost from '../components/LookingPost';
import PostModal from '../components/PostModal';
import API from "../utils/API";

export default function LookingForInk(props) {
    const [posts, setPosts] = useState({
        postArr: []
    });

    let sortPostArr = []

    useEffect(() => {
        API.getPosts()
        .then(res => {
            console.log("All posts for 'looking' have been gathered!");
            res.data.forEach(post => {
                if(post.type === "Looking") {
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
                <LookingPost 
                    id={post.id}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    type={post.type}
                    author={post.author}
                    user={post.user}
                    authState={props.authState}
                />))}
            <PostModal 
                authState={props.authState}
            />
        </div>
    )
}
