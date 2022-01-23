import React, { Component } from "react";

import Form from "./common/form.component";
import Input from "./common/Input.component";
import Button from "./common/button.component";
import Textarea from "./common/textarea.component";

class AddPost extends Component {
    state = {
        id: "",
        postTitle: "",
        postContent: "",
        like: false,
    };

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            ...this.state,
            [name]: value,
        })
    }

    handleLikeCheck = () => {
        this.setState({
            ...this.state,
            like: !this.state.like,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
    };

    render() {
        const { id, postTitle, postContent, like } = this.state;
        const { toggler } = this.props;

        return (
            <div
                className="form mb-4"
                style={{ display: toggler ? "block" : "none" }}
            >
                <Form handleSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="id"
                        value={id}
                        placeholder="ID"
                        handleChange={this.handleChange}
                    />
                    <Textarea 
                        name="postTitle"
                        value={postTitle}
                        placeholder="Title"
                        handleChange={this.handleChange}
                    />
                    <Textarea 
                        name="postContent"
                        value={postContent}
                        placeholder="Discription"
                        handleChange={this.handleChange}
                    />

                    <label htmlFor="like">This post are you like.</label>
                    <Input
                        type="checkbox"
                        id="like"
                        name="like"
                        checked={like}
                        handleChange={this.handleLikeCheck}
                    />

                    <Button type="submit" className="btn btn-secondary">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddPost;
