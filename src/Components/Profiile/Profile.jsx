import React from "react";
import s from "./Profile.module.css"
import Mypost from "./MyPosts/Mypost";
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let Profile = (props) => {


    return (
        <div>
            <div className={s.item}>
                <ProfileInfo/>
                <Mypost posts =
                            {props.profilePage.posts}
                        newPostText={props.profilePage.newPostText}
                        dispatch={props.dispatch}
                        addPost = {props.addPost} />
            </div>
        </div>
    )
}

export default Profile