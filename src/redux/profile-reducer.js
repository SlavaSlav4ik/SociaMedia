import { profileAPI } from "../Components/API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are", likesCount: 12 },
        { id: 2, message: "It's my", likesCount: 11 },
    ],
    newPostText: 'hallo',
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postID)
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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
                profile: { ...state.profile, photos: action.photos }
            };
        default:
            return state;
    }
};

// Action creators
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postID) => ({ type: DELETE_POST, postID });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

// Thunks
export const getUsersProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUsersProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status);
        if (response?.data?.resultCode === 0) {
            dispatch(setStatus(status));
        } else {
            console.warn("Ошибка при обновлении статуса:", response);
        }
    } catch (error) {
        console.error("Произошла ошибка в updateStatus:", error);
    }
};

export const savePhoto = (file) => async (dispatch) => {
    try {
        const response = await profileAPI.savePhoto(file);
        if (response?.data?.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    } catch (error) {
        console.error("Ошибка при загрузке фото:", error);
    }
};

// profile-reducer.js
export const saveProfile = (profileData) => async (dispatch, getState) => {
    try {
        const userId = getState().auth.id;
        const response = await profileAPI.saveProfile(profileData);

        if (response.data.resultCode === 0) {
            dispatch(getUsersProfile(userId));
        } else {
            console.error("Ошибка сохранения профиля", response.data.messages);
        }
    } catch (error) {
        console.error("Ошибка при сохранении профиля:", error);
    }
};

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;
