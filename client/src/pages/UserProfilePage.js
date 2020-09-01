import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import UserProfileSidebar from '../components/UserProfileSidebar';
import UserContainer from '../components/UserContainer';
import UserPostCardContainer from '../components/UserPostCardContainer';
import UserMobileResponse from '../components/UserMobileResponse';
import UserProfileCard from '../components/UserProfileCard';
import PostModal from '../components/PostModal';
import API from '../utils/API';



export default function UserProfilePage(props) {
    let [otherUser, setOtherUser] = useState({
        user: {}
    })

    useEffect(() => {
        const splitUrl = window.location.href.split("/");
        // splitUrl[4] = user _id
        API.getUserById(splitUrl[4])
            .then(result => {
                setOtherUser({ user: result.data[0]})
            })
            .catch(err => console.log(err))
    },[])
    
    return (
        <div>
            <Header logout={props.logout}/>
            <UserProfileSidebar otherUser={otherUser}/>
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
