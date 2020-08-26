import React from 'react';
import Header from '../components/Header';
import AvailablePost from '../components/AvailablePost';
import PostModal from '../components/PostModal';


export default function AvailableInk(props) {
    return (
        <div>
            <Header logout={props.logout}/> 
            <AvailablePost />
            <AvailablePost />
            <AvailablePost />
            <AvailablePost />
            <AvailablePost />
            <PostModal />
        </div>
    )
}
