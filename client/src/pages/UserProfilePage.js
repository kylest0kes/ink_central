import React from 'react';
import Header from '../components/Header';
import UserProfileSidebar from '../components/UserProfileSidebar';
import UserContainer from '../components/UserContainer';
import UserPostCardContainer from '../components/UserPostCardContainer';
import UserMobileResponse from '../components/UserMobileResponse';
import UserProfileCard from '../components/UserProfileCard';


export default function UserProfilePage() {
    return (
        <div>
            <Header />
            <UserProfileSidebar />
            <UserContainer>
                <UserPostCardContainer>
                    <UserMobileResponse />
                    <UserProfileCard />   
                </UserPostCardContainer>
            </UserContainer>
        </div>
    )
}
