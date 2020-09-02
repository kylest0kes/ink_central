import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import ViewAllCard from '../components/ViewAllCard';
import PostModal from '../components/PostModal'
import API from "../utils/API";
import Container from '../components/Container';
import Footer from '../components/Footer';

export default function ViewAllPage(props) {
    const [posts, setPosts] = useState({
        postArr: []
    })

    useEffect(() => {
        API.getPosts()
        .then(res => {
            console.log("All posts have been gathered!")
            console.log(res.data)
            setPosts({postArr: res.data})
        })
    }, [])

    return (
        <div>
            <Header logout={props.logout} />
            <Container>
                {posts.postArr.map(post => (
                    <ViewAllCard 
                        id={post.id}
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                        type={post.type}
                        author={post.author}
                        user={post.user}
                        authState={props.authState}
                    />
                ))}
            </Container>
            <PostModal 
                authState={props.authState}
            /> 
            <Footer />
        </div>
    )
}
