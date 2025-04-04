import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialog-reducer";

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
    console.log("Dialogs props:", props); // Проверяем, что передаётся в props

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map((d) => (
        <DialogItem key={d.id} name={d.name} id={d.id} />
    ));

    let messagesElements = state.messages.map((m) => (
        <Message key={m.id} message={m.message} />
    ));

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body)); // Передаём текст
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>{messagesElements}</div>
            <div>
                <div>
                    <textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
