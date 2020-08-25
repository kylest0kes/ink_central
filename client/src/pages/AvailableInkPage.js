import React from 'react';
import Header from '../components/Header';
import AvailablePost from '../components/AvailablePost';
import CreatePostForm from '../components/CreatePostForm';

export default function AvailableInk() {
    return (
        <div>
            <Header /> 
            <AvailablePost />
            <CreatePostForm />
        </div>
    )
}
