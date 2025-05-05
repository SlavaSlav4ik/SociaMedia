import React from "react";
import { Grid } from "@mui/material";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
import FriendsList from "./FriendsList";
import Preloader from "../Common/Preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ProfileInfo
                    profile={props.profile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    isOwner={props.isOwner}
                    savePhoto={props.savePhoto}
                    saveProfile={props.saveProfile}
                />
            </Grid>

            <Grid item xs={8}>
                <MyPostContainer />
            </Grid>

            <Grid item xs={4}>
                <FriendsList friends={props.friends} />
            </Grid>
        </Grid>
    );
};

export default Profile;
