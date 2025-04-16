const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
};

// Редьюсер
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            };
        default:
            return state;
    }
};

// Action Creator
export const setAuthReducerData = (id, email, login) => ({
    type: SET_USER_DATA,
    payload: { id, email, login }
});

export default authReducer;
