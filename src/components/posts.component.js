import React, { Component } from "react";

import Post from "./post.component";
import Navbar from "./navbar.component";
import AddPost from "./addPost.component";
import Button from "./common/button.component";

class Posts extends Component {
    state = {
        posts: [
            {
                id: "1",
                postTitle: "Post Title 1",
                date: "2/1/2021 || 11.00 PM",
                image: "../images/img.jpg",
                postContent: "Post Content 1",
                like: false,
                disLike: false,
                likeCount: 0,
                disLikeCount: 0,
            },
            {
                id: "2",
                postTitle: "Post Title 2",
                date: "2/1/2021 || 11.10 PM",
                image: "../images/img.jpg",
                postContent: "Post Content 2",
                like: false,
                disLike: false,
                likeCount: 0,
                disLikeCount: 0,
            },
            {
                id: "3",
                postTitle: "Post Title 3",
                date: "2/1/2021 || 11.15 PM",
                image: "../images/img.jpg",
                postContent: "Post Content 3",
                like: false,
                disLike: false,
                likeCount: 0,
                disLikeCount: 0,
            },
            {
                id: "4",
                postTitle: "Post Title 4",
                date: "2/1/2021 || 11.20 PM",
                image: "../images/img.jpg",
                postContent: "Post Content 4",
                like: false,
                disLike: false,
                likeCount: 0,
                disLikeCount: 0,
            },
            {
                id: "5",
                postTitle: "Post Title 5",
                date: "2/1/2021 || 11.21 PM",
                image: "../images/img.jpg",
                postContent: "Post Content 5",
                like: false,
                disLike: false,
                likeCount: 0,
                disLikeCount: 0,
            },
        ],
        formValue: {
            postTitle: "",
            postContent: "",
        },
        toggler: false,
    };

    handleAdd = () => {
        const toggler = !this.state.toggler;
        this.setState({
            ...this.state,
            toggler,
        });
    };

    handleSubmit = (newPost) => {
        const toggler = !this.state.toggler;

        const addNewPost = {...newPost};
        addNewPost.date = `${new Date().toLocaleDateString()} || ${new Date().toLocaleTimeString()}`
        addNewPost.image = "../images/img.jpg";
        addNewPost.disLike = false;
        addNewPost.likeCount = 0;
        addNewPost.disLikeCount =  0;

        this.setState({
            ...this.state,
            posts: [addNewPost, ...this.state.posts],
            toggler,
        });
    };

    handleLike = (id) => {
        const posts = [...this.state.posts];
        const findPost = posts.find((post) => post.id === id);
        findPost.like = !findPost.like;
        findPost.disLike = false;

        this.setState({
            posts: posts,
        });
    };

    handleDisLike = (id) => {
        const posts = [...this.state.posts];
        const findPost = posts.find((post) => post.id === id);
        findPost.disLike = !findPost.disLike;
        findPost.like = false;

        this.setState({
            posts: posts,
        });
    };

    handleRemove = (id) => {
        const posts = [...this.state.posts];
        const updatePosts = posts.filter((post) => post.id !== id);

        this.setState({
            posts: updatePosts,
        });
    };

    countLike = () => {
        const posts = [...this.state.posts];
        const countLike = posts.filter((post) => post.like === true);
        return countLike.length;
    };

    countDisLike = () => {
        const posts = [...this.state.posts];
        const countDislike = posts.filter((post) => post.disLike === true);
        return countDislike.length;
    };

    render() {
        const { posts } = this.state;

        return (
            <>
                <Navbar like={this.countLike()} disLike={this.countDisLike()} />
                <div className="posts">
                    <Button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.handleAdd}
                    >
                        Add Post
                    </Button>
                    <AddPost
                        handleSubmit={this.handleSubmit}
                        toggler={this.state.toggler}
                    />
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            post={post}
                            handleLike={this.handleLike}
                            handleDisLike={this.handleDisLike}
                            handleRemove={this.handleRemove}
                        />
                    ))}
                </div>
            </>
        );
    }
}

export default Posts;
