const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state = { messages: [], dialogs: [], newMessageBody: '' }, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return { ...state, newMessageBody: action.body };

        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message: state.newMessageBody }],
                newMessageBody: ''
            };

        default:
            return state;
    }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
});
export default dialogsReducer;
