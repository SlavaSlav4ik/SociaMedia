import {profileAPI, usersAPI} from "../Components/API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

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
        case  DELETE_POST:
            return  {
                ...state,
                posts: state.posts.filter(p => p.id != action.postID)
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

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postID) => ({ type: DELETE_POST, postID });
export const getUsersProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId)
            dispatch (setUsersProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
  const  response = await profileAPI.getStatus(userId)
            dispatch (setStatus(response.data));

}
export const updateStatus = (status) => async (dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status);

        // защита от undefined
        if (response?.data?.resultCode === 0) {
            dispatch(setStatus(status));
        } else {
            console.warn("Ошибка при обновлении статуса:", response);
        }
    } catch (error) {
        console.error("Произошла ошибка в updateStatus:", error);
    }
};export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;
