import React from 'react';
import Header from '../components/Header';
import UserProfileSidebar from '../components/UserProfileSidebar';
import UserContainer from '../components/UserContainer';
import UserPostCardContainer from '../components/UserPostCardContainer';
import UserMobileResponse from '../components/UserMobileResponse';
import UserProfileCard from '../components/UserProfileCard';
import PostModal from '../components/PostModal';



export default function UserProfilePage(props) {
    return (
        <div>
            <Header logout={props.logout}/>
            <UserProfileSidebar />
            <UserContainer>
                <UserPostCardContainer>
                    <UserMobileResponse />
                    <UserProfileCard />   
                </UserPostCardContainer>
            </UserContainer>
            <PostModal 
                authState={props.authState}
            /> 

        </div>
    )
}
