import React from "react";
import s from "./ProfileInfo.module.css"

let ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://i.pinimg.com/736x/6f/02/d1/6f02d195addc466721dbc8ac60db1192.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo