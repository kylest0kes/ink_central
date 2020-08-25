import React from 'react';


import './style.css'

export default function LookingPostForm() {
    return (
        <div class="contact-panel" id="contact-panel" data-toggler=".is-active">
            <a class="contact-panel-button" data-toggle="contact-panel">Create Post<i style={{marginLeft: "5px"}}class="fas fa-arrow-up"></i></a>
            <form action="">
                <div class="row">
                    <label>Title
                        <input type="text"/>
                    </label>
                </div>
                <div class="row">
                    <label>Description
                        <textarea placeholder="What are you looking for?" rows="3"></textarea>
                    </label>
                </div>
                <div class="contact-panel-actions">
                    <button class="cancel-button" data-toggle="contact-panel">Cancel</button>
                    <input type="submit" class="button submit-button" value="Submit"/>
                </div>
            </form>
        </div>

    )
}
