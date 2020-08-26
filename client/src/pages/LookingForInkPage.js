import React from 'react';
import Header from '../components/Header';
import LookingPost from '../components/LookingPost';
import PostModal from '../components/PostModal';

export default function LookingForInk(props) {
    return (
        <div>
            <Header logout={props.logout}/>
            <LookingPost />
            <LookingPost />
            <LookingPost />
            <LookingPost />
            <LookingPost />
            <PostModal />
        </div>
    )
}
