import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";
import usersReducer from "./Users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    //sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store

export default store