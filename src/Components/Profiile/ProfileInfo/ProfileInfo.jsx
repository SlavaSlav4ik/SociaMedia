import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/47d45103406b3b1a2a873981694e844b.jpg";

let ProfileInfo = (props) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]); // теперь props видим
        }
    };

    return (
        <div>
            <div className={s.item}>
                <img src="https://i.pinimg.com/736x/6f/02/d1/6f02d195addc466721dbc8ac60db1192.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} />
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
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
