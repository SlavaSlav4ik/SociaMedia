import React, { useEffect, useRef } from "react";
import s from "./DialogWithUser.module.css";
import { useParams } from "react-router-dom";

const DialogWithUser = ({
                            messages,
                            newMessageBody,
                            updateNewMessageBody,
                            fetchMessages,
                            sendMessageThunk
                        }) => {
    const { userId } = useParams();
    const messagesEndRef = useRef(null);

    useEffect(() => {
        fetchMessages(userId);
    }, [userId]);

    const handleChange = (e) => {
        updateNewMessageBody(e.target.value);
    };

    const handleSend = () => {
        if (newMessageBody.trim()) {
            sendMessageThunk(userId, newMessageBody);
        }
    };

    useEffect(() => {
        // Автоскролл вниз
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className={s.dialogContainer}>
            <div className={s.messages}>
                {messages.map((m) => (
                    <div
                        key={m.id}
                        className={`${s.message} ${
                            m.senderId === Number(userId) ? s.incoming : s.outgoing
                        }`}
                    >
                        {m.body || m.message}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className={s.inputBlock}>
                <textarea
                    value={newMessageBody}
                    onChange={handleChange}
                    placeholder="Type your message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default DialogWithUser;
