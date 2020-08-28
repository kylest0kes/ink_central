import React, { Component } from 'react';
import ReactFilestack from 'filestack-react';

import './style.css'

export class CreateFormPost extends Component {

    onSuccess = (result) => {
        console.log(result.filesUploaded[0].url)
    }
    
    onError = (error) => {
        console.error('error', error);
    }

    render() {
        
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
                <ReactFilestack
                    apikey={"Aho8KdLp5TCKolnTXxw3Tz"}
                    componentDisplayMode={{
                        type: 'button',
                        customText: 'Upload Image',
                        customClass: 'ui medium button gray'
                    }}
                    onSuccess={this.onSuccess}
                    onError={this.onError}
                />
                <div className="form-group">
                    <input style={{backgroundColor: "#00adcc", borderColor: "#00adcc"}} className="btn btn-primary" type="submit" value="Submit"/>
                </div>
            </form>
        )
    }
}

export default CreateFormPost

