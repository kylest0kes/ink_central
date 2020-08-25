import React from 'react';
import Header from '../components/Header';
import UserHomeSidebar from '../components/UserHomeSidebar';
import UserContainer from '../components/UserContainer';
import UserPostCard from '../components/UserPostCard';
import UserPostCardContainer from '../components/UserPostCardContainer';
import UserMobileResponse from '../components/UserMobileResponse';

import '../App.css'

export default function UserHomePage() {
    return (
        <div>
            <Header />
            <UserHomeSidebar />
            <UserContainer>
                <UserPostCardContainer>
                    <UserMobileResponse />
                    <UserPostCard />
                </UserPostCardContainer>
            </UserContainer>    
        </div>
    )
}
