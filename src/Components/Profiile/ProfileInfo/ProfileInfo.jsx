import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/47d45103406b3b1a2a873981694e844b.jpg";
import ProfileDataForm from "../ProfileDataForm";

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        });
    };

    if (!props.profile) return <div>Loading...</div>;

    return (
        <div>
            <div className={s.item}>
                <img
                    src="https://i.pinimg.com/736x/6f/02/d1/6f02d195addc466721dbc8ac60db1192.jpg"
                    alt="Background"
                />
            </div>

            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos.large || userPhoto}
                    className={s.mainPhoto}
                    alt="User"
                />
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                {editMode ? (
                    <ProfileDataForm
                        profile={props.profile}
                        onSubmit={onSubmit}
                    />
                ) : (
                    <ProfileData
                        profile={props.profile}
                        isOwner={props.isOwner}
                        goToEditMode={() => setEditMode(true)}
                    />
                )}
            </div>
        </div>
    );
};

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && (
                <div>
                    <button onClick={goToEditMode}>Edit</button>
                </div>
            )}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>:{" "}
                {Object.keys(profile.contacts).map((key) => (
                    <Contact
                        contactTitle={key}
                        contactValue={profile.contacts[key]}
                        key={key}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProfileInfo;
