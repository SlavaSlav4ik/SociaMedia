import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";

let Profile = (props) => {


    return (
        <div>
            <div className={s.item}>
                <ProfileInfo/>
                <MyPostContainer/>
            </div>
        </div>
    )
}

export default Profile