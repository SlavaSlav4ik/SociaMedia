import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";






let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are", likesCount: 12 },
                { id: 2, message: "It's my", likesCount: 11 },
            ],
            newPostText: 'hallo'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: "Slava" },
                { id: 2, message: "pupup" },
                { id: 3, message: "Myu" },
                { id: 4, message: "Hallo" },
                { id: 5, message: "Pupick" },
            ],
            dialogs: [
                { id: 1, name: "Slava" },
                { id: 2, name: "Kentofarik" },
                { id: 3, name: "Ken" },
                { id: 4, name: "Kenan" },
                { id: 5, name: "Kenanovih" },
            ],
            newMessageBody: ''
        },
    },
    _subs: [],
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
        this._subs.push(observer);
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },
};

// src/redux/redux-store.js
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth-reducer";
// другие редюсеры...

const rootReducer = combineReducers({
    auth: authReducer,
    // другие редюсеры...
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
window.store = store;

