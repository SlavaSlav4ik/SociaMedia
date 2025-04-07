const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let instialState = {
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
}

const dialogsReducer = (state = instialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            const newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
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
