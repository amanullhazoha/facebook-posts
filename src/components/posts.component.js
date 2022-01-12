import React, { Component } from "react";
import Post from "./post.component";
import Navbar from './navbar.component';

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
        toggler: false,
    };

    handleAdd = () => {
        const toggler = !(this.state.toggler);
        this.setState({
            toggler,
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const toggler = !(this.state.toggler);
        console.log('Form submit')

        this.setState({
            toggler,
        })   
    }

    handleLike = (id) => {
        const posts = [...this.state.posts];
        const findPost = posts.find((post) => post.id === id);
        findPost.like = !(findPost.like);
        findPost.disLike = false;

        this.setState({
            posts: posts,
        });
    };

    handleDisLike = (id) => {
        const posts = [...this.state.posts];
        const findPost = posts.find((post) => post.id === id);
        findPost.disLike = !(findPost.disLike);
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
        const countLike = posts.filter(post => post.like === true)
        return countLike.length
    };

    countDisLike = () => {
        const posts = [...this.state.posts];
        const countDislike = posts.filter(post => post.disLike === true)
        return countDislike.length;
    };


    render() {
        const { posts, toggler } = this.state;

        return (
            <>
                <Navbar like={this.countLike()} disLike={this.countDisLike()} />
                <div className="posts">
                    <button
                        className=" btn-primary"
                        type="button"
                        onClick={this.handleAdd}
                    >
                        Add New Post
                    </button>

                    <div className="form mb-4" style={{display: toggler ? 'block' : 'none'}}>
                        <form onSubmit={this.handleSubmit}>
                            <input type='text' className="col-12 mb-2" placeholder="ID" />
                            <input type='text' className="col-12 mb-2" placeholder="Post Title" />
                            <input type='date' className="col-12 mb-2" />
                            <textarea className="col-12" placeholder='Discription' />
                            <button type="submit" className="btn btn-secondary">Submit</button>
                        </form>
                    </div>

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
