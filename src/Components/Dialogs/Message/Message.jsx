import React from "react";
import s from "./../Dialogs.module.css";




let Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>;
};


export default Message;
