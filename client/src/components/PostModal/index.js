import React from 'react'
import CreatePostForm from '../CreatePostForm';

import './style.css'

export default function PostModal() {
    return (
        <div style={{width: "300px", marginRight: "0px"}}>
            {/* <!-- Button trigger modal --> */}
            <button style={{backgroundColor: "#00adcc", borderColor: "#00adcc", marginLeft: "30px", marginBottom: "30px"}} type="button" className="btn btn-primary fixed-bottom" data-toggle="modal" data-target="#exampleModal">
            Create a Post
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <CreatePostForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
