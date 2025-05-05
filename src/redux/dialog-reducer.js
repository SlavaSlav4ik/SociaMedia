import {dialogsAPI} from "../Components/API/API";

const SET_DIALOGS = 'SET_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';


const initialState = {
    dialogs: [],
    messages: [],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs
            };
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        default:
            return state;
    }
};

export const setDialogs = (dialogs) => ({ type: SET_DIALOGS, dialogs });
export const setMessages = (messages) => ({ type: SET_MESSAGES, messages });
export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
});

// Thunk для получения диалогов
export const fetchDialogs = () => async (dispatch) => {
    const response = await dialogsAPI.getDialogs();
    dispatch(setDialogs(response.data));
};

// Thunk для получения сообщений с юзером
export const fetchMessages = (userId) => async (dispatch) => {
    const response = await dialogsAPI.getMessages(userId);
    dispatch(setMessages(response.data.items));
};

// Thunk для отправки сообщения
export const sendMessageThunk = (userId, message) => async (dispatch) => {
    await dialogsAPI.sendMessage(userId, message);
    dispatch(updateNewMessageBodyCreator("")); // очистим поле
    dispatch(fetchMessages(userId)); // перезагрузим сообщения
};

export default dialogsReducer;
