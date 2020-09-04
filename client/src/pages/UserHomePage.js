import React, { useEffect } from 'react';
import Header from '../components/Header';
import UserHomeSidebar from '../components/UserHomeSidebar';
import UserContainer from '../components/UserContainer';
import UserPostCard from '../components/UserPostCard';
import UserPostCardContainer from '../components/UserPostCardContainer';
import UserMobileResponse from '../components/UserMobileResponse';
import PostModal from '../components/PostModal';

import '../App.css'


export default function UserHomePage(props) {

    useEffect(()=>{
        console.log(props.authState.user.posts)
    }, [])
    return (
        <div>
            <Header logout={props.logout}/>
            <UserHomeSidebar authState={props.authState} logout={props.logout}/>
            <UserContainer>
                <UserPostCardContainer>
                    <UserMobileResponse />
                    {props.authState.user.posts.map(post => (
                        <UserPostCard 
                        authState={props.authState}
                        id={post}
                        />
                    ))}
                </UserPostCardContainer>
            </UserContainer>   
            <PostModal 
                authState={props.authState}
            /> 
        </div>
    )
}
