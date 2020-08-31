import React from 'react'
import CreatePostForm from '../CreatePostForm';

import './style.css'

export default function PostModal(props) {
    return (
        <div style={{width: "300px", marginRight: "0px"}}>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="modalBtn btn fixed-bottom" title="Create Post" data-toggle="modal" data-target="#exampleModal">
                <i class="fas fa-plus-circle"></i>
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <CreatePostForm 
                            authState={props.authState}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
