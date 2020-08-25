import React from 'react';
import Header from '../components/Header';
import UserHomeSidebar from '../components/UserHomeSidebar';
import UserHomeContainer from '../components/UserHomeContainer';
import UserPostCard from '../components/UserPostCard';
import UserPostCardContainer from '../components/UserPostCardContainer';
import UserMobileResponse from '../components/UserMobileResponse';

import '../App.css'

export default function UserHomePage() {
    return (
        <div>
            <Header />
            <UserHomeSidebar />
            <UserHomeContainer>
                <UserPostCardContainer>
                    <UserMobileResponse />
                    <UserPostCard />
                </UserPostCardContainer>
            </UserHomeContainer>    
        </div>
    )
}
