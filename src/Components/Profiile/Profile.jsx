import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
import Preloader from "../Common/Preloader/Preloader";

const  Profile = (props) => {
    if (!props.profile) {
        return  <Preloader/>
    }
    return (
        <div>
            <div className={s.item}>
                <ProfileInfo profile = {props.profile}  />
                <MyPostContainer/>
            </div>
        </div>
    )
}

export default Profile