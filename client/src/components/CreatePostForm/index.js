import React from 'react';

import './style.css'

export default function CreatePostForm() {
    return (
        <form>
            <div className="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Upload Image</label>
                <button><i className="fas fa-file-upload"></i></button>
            </div>
            <div className="form-group">
                <input className="btn btn-primary" type="submit" value="Submit"/>
            </div>
        </form>
    )
}
