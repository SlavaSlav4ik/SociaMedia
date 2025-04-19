import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

let ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://i.pinimg.com/736x/6f/02/d1/6f02d195addc466721dbc8ac60db1192.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;
