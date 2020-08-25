import React, { Component } from 'react';


import './style.css'

export class CreatePostForm extends Component {
    
    
    render() {
        return (
            <div className="contact-panel" id="contact-panel" data-toggler=".is-active">
                <a className="contact-panel-button" data-toggle="contact-panel">Create Post<i style={{marginLeft: "5px"}} className="fas fa-arrow-up"></i></a>
                <form action="">
                    <div className="row">
                        <label>Title
                            <input type="text"/>
                        </label>
                    </div>
                    <div className="row">
                        <label>Description
                            <textarea rows="3"></textarea>
                        </label>
                    </div>
                    <div className="row">
                        <label>Upload Image
                            <br/>
                            {/* button to use with filestack api */}
                            <button style={{cursor: "pointer"}}><i class="fas fa-file-upload"></i></button>
                        </label>
                    </div>
                    <div className="contact-panel-actions">
                        <button className="cancel-button" data-toggle="contact-panel">Cancel</button>
                        <input type="submit" className="button submit-button" value="Submit"/>
                    </div>
                </form>
            </div>
    
        )
    }
}

export default CreatePostForm
