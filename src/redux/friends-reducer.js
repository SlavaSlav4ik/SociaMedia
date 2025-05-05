import {usersAPI} from "../Components/API/API";


const SET_FRIENDS = "SET_FRIENDS";

const initialState = {
    friends: [],
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS:
            return { ...state, friends: action.friends };
        default:
            return state;
    }
};

export const setFriends = (friends) => ({ type: SET_FRIENDS, friends });

export const getFriends = () => async (dispatch) => {
    try {
        const response = await usersAPI.getUsers(1, 10, "", true);
        dispatch(setFriends(response.items));
    } catch (error) {
        console.error("Failed to fetch friends:", error);
    }
};

export default friendsReducer;
