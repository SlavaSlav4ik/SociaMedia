import {applyMiddleware, combineReducers, createStore} from "redux";
import { thunk } from "redux-thunk";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";
import usersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    //sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));



window.store = store

export default store