import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
import Preloader from "../Common/Preloader/Preloader";
import {updateStatus} from "../../redux/profile-reducer";

const  Profile = (props) => {
    if (!props.profile) {
        return  <Preloader/>
    }
    return (
        <div>
            <div className={s.item}>
                <ProfileInfo profile = {props.profile}  status = {props.status} updateStatus = {props.updateStatus} />
                <MyPostContainer/>
            </div>
        </div>
    )
}

export default Profile