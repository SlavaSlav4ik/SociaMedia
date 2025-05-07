import React from 'react';
import { connect } from 'react-redux';

import {
    addPost,
    updateNewPostText,
    deletePost,
    toggleLike,
    toggleDislike
} from '../../../redux/profile-reducer';
import MyPosts from "./myPost";

const mapState = state => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
});
const mapDispatch = {
    addPost,
    updateNewPostText,
    deletePost,
    toggleLike,
    toggleDislike
};

export default connect(mapState, mapDispatch)(MyPosts);
