// src/redux/profile-reducer.js



// Action types
import {profileAPI} from "../Components/API/API";

const ADD_POST               = 'profile/ADD_POST';
const UPDATE_NEW_POST_TEXT   = 'profile/UPDATE_NEW_POST_TEXT';
const DELETE_POST            = 'profile/DELETE_POST';
const SET_USER_PROFILE       = 'profile/SET_USER_PROFILE';
const SET_STATUS             = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS     = 'profile/SAVE_PHOTO_SUCCESS';
const TOGGLE_LIKE            = 'profile/TOGGLE_LIKE';
const TOGGLE_DISLIKE         = 'profile/TOGGLE_DISLIKE';

// Initial state
const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12, dislikesCount: 0, vote: null },
        { id: 2, message: "It's my first post", likesCount: 11, dislikesCount: 0, vote: null }
    ],
    newPostText: '',
    profile: null,
    status: ''
};

// Reducer
export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: Date.now(),
                message: state.newPostText,
                likesCount: 0,
                dislikesCount: 0,
                vote: null
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };

        case TOGGLE_LIKE:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id !== action.postId) return p;
                    let { likesCount, dislikesCount, vote } = p;
                    if (vote === 'like') {
                        // убрать лайк
                        return { ...p, likesCount: likesCount - 1, vote: null };
                    } else {
                        // переключиться с дизлайка на лайк или поставить лайк
                        if (vote === 'dislike') dislikesCount -= 1;
                        return { ...p, likesCount: likesCount + 1, dislikesCount, vote: 'like' };
                    }
                })
            };

        case TOGGLE_DISLIKE:
            return {
                ...state,
                posts: state.posts.map(p => {
                    if (p.id !== action.postId) return p;
                    let { likesCount, dislikesCount, vote } = p;
                    if (vote === 'dislike') {
                        // убрать дизлайк
                        return { ...p, dislikesCount: dislikesCount - 1, vote: null };
                    } else {
                        // переключиться с лайка на дизлайк или поставить дизлайк
                        if (vote === 'like') likesCount -= 1;
                        return { ...p, dislikesCount: dislikesCount + 1, likesCount, vote: 'dislike' };
                    }
                })
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            };

        default:
            return state;
    }
}


// Action creators
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = text => ({ type: UPDATE_NEW_POST_TEXT, text });
export const deletePost = postId => ({ type: DELETE_POST, postId });
export const toggleLike = postId => ({ type: TOGGLE_LIKE, postId });
export const toggleDislike = postId => ({ type: TOGGLE_DISLIKE, postId });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const setStatus = status => ({ type: SET_STATUS, status });
export const savePhotoSuccess = photos => ({ type: SAVE_PHOTO_SUCCESS, photos });

// Thunks
export const getUsersProfile = userId => async dispatch => {
    const res = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(res.data));
};

export const getStatus = userId => async dispatch => {
    const res = await profileAPI.getStatus(userId);
    dispatch(setStatus(res.data));
};

export const updateStatus = status => async dispatch => {
    const res = await profileAPI.updateStatus(status);
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = file => async dispatch => {
    const res = await profileAPI.savePhoto(file);
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos));
    }
};

export const saveProfile = profileData => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const res = await profileAPI.saveProfile(profileData);
    if (res.data.resultCode === 0) {
        dispatch(getUsersProfile(userId));
    }
};
