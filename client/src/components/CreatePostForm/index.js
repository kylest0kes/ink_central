import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import ReactFilestack from 'filestack-react';
import API from "../../utils/API";
import './style.css'

export class CreateFormPost extends Component {

    state = {
        title: "",
        description: "",
        image: "",
        author: this.props.authState.user._id,
        type: "",
        user: this.props.authState.user.username
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleRadio = e => {
        const typeChoice = e.target.value;
        if (e.target.checked) {
            this.setState({
                type: typeChoice
            })
        }
    };

    createPost = (e) => {
        e.preventDefault();
        API.makePost({
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            author: this.state.author,
            type: this.state.type,
            user: this.state.user
        })
        .then(res => {
            if(res.data._id) {
                console.log("Post success!!");
                window.location.reload()
            }
            else alert("Make sure all feilds have been filled in!");
        })
        .catch(err => console.log(err));
    }

    onSuccess = (result) => {
        console.log(result.filesUploaded[0].url)
        this.setState({
            ...this.state,
            image: result.filesUploaded[0].url
        })
    }

    onError = (error) => {
        console.error('error', error);
    }

    render() {

        return (
            <form>
                <div className="form-group">
                    <label style={{fontWeight: "bold"}} for="exampleFormControlInput1">Title:</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" onChange={this.handleInputChange} value={this.state.title} name="title" />
                </div>
                <hr/>
                <div className="form-group">
                    <label style={{fontWeight: "bold"}} for="exampleFormControlTextarea1">Description:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handleInputChange} value={this.state.description} name="description"></textarea>
                </div>
                <hr/>
                <div className="form-group">
                    <label style={{fontWeight: "bold"}} for="exampleFormControlTextarea1">Post Type:</label>
                    <input type="radio" id="looking" name="postType" value="Looking" onChange={this.handleRadio} />
                    <label for="Looking">Looking</label>
                    <input type="radio" id="available" name="postType" value="Available" onChange={this.handleRadio}/>
                    <label for="Available">Available</label>
                </div>
                <hr/>
                <div className="form-group">
                    <label style={{fontWeight: "bold"}} for="exampleFormControlTextarea1">Upload Image</label>
                    <ReactFilestack
                        apikey={"AG1DG3OnDQ62gOmYIMFPCz"}
                        componentDisplayMode={{
                            type: 'button',
                            customText: <i class="fas fa-upload"></i>,
                            customColor: 'black'
                        }}
                        onSuccess={this.onSuccess}
                        onError={this.onError}
                    />
                </div>
                <div className="form-group">
                    <input style={{ backgroundColor: "#00adcc", borderColor: "#00adcc" }} className="btn btn-primary" type="submit" value="Submit" onClick={this.createPost} />
                </div>
            </form>
        )
    }
}

export default CreateFormPost
