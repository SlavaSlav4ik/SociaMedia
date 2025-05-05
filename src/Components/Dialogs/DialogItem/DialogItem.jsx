import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ id, name }) => {
    return (
        <NavLink to={`/dialogs/${id}`} className={s.dialogItem}>
            <div className={s.avatar}>
                <img src="https://via.placeholder.com/40" alt="avatar" />
            </div>
            <div className={s.name}>{name}</div>
        </NavLink>
    );
};

export default DialogItem;
