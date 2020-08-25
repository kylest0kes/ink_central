import React from 'react';
import Header from '../components/Header';
import AvailablePost from '../components/AvailablePost';
import PostModal from '../components/PostModal';


export default function AvailableInk() {
    return (
        <div>
            <Header /> 
            <AvailablePost />
            <PostModal />
        </div>
    )
}
