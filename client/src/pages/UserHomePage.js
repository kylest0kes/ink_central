import React from 'react';
import Header from '../components/Header';
import UserHomeSidebar from '../components/UserHomeSidebar';
import UserContainer from '../components/UserContainer';
import UserPostCard from '../components/UserPostCard';
import UserPostCardContainer from '../components/UserPostCardContainer';
import UserMobileResponse from '../components/UserMobileResponse';
import PostModal from '../components/PostModal';

import '../App.css'
import Footer from '../components/Footer';

export default function UserHomePage(props) {
    return (
        <div>
            <Header logout={props.logout}/>
            <UserHomeSidebar />
            <UserContainer>
                <UserPostCardContainer>
                    <UserMobileResponse />
                    <UserPostCard />
                </UserPostCardContainer>
            </UserContainer>   
            <PostModal 
                authState={props.authState}
            /> 
            <Footer />
        </div>
    )
}
