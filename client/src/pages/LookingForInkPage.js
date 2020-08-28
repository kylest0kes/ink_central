import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import LookingPost from '../components/LookingPost';
import PostModal from '../components/PostModal';
import API from "../utils/API";

export default function LookingForInk(props) {
    const [posts, setPosts] = useState({
        postArr: []
    });

    useEffect(() => {
        API.getPosts()
        .then(res => {
            console.log(res.data);
            res.data.forEach(post => {
                if(post.type === "Looking") {
                    setPosts({postArr: res.data});
                }
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
                />))}
            <PostModal 
                authState={props.authState}
            />
        </div>
    )
}
