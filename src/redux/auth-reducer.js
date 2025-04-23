

    import { authAPI} from "../Components/API/API";

    const SET_USER_DATA = 'auth/SET_USER_DATA';

    let initialState = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
    };

    export const authReducer = (state = initialState, action) => {
        switch (action.type) {
            case SET_USER_DATA:
                return {
                    ...state,
                    ...action.payload,
                    isAuth: action.payload.isAuth
                };
            default:
                return state;
        }
    };

    export const setAuthUserData = (id, email, login, isAuth) => ({
        type: SET_USER_DATA,
        payload: { id, email, login, isAuth }
    });

    export const login = (email, password, rememberMe) => async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            const authData = await authAPI.me();
            if (authData.data.resultCode === 0) {
                const { id, email, login } = authData.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        }
    };

    export const logout = () => async (dispatch) => {
        const response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    };

    export const getAuthUserData = () => async (dispatch) => {
        const response = await authAPI.me();
        if (response.data.resultCode === 0) {
            const { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    };

