import React from "react";
import { Grid } from "@mui/material";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPosts/MyPostContainer";
import FriendsList from "./FriendsList";
import Preloader from "../Common/Preloader/Preloader";
import './Profile.css';

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    return (
        <Grid container spacing={2} className="profile-grid">
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

            <Grid item className="my-posts-item">
                <MyPostContainer />
            </Grid>

            <Grid item className="friends-item">
                <FriendsList friends={props.friends} />
            </Grid>
        </Grid>

    );
};

export default Profile;



/* <Profile>                      // src/Components/Profile/Profile.jsx
├── <ProfileInfo>              // аватар, кнопка Upload, статус, данные профиля/форма
│   ├── <Avatar + UploadBtn>
│   ├── <ProfileStatus>
│   └── <ProfileData or ProfileDataForm>
│       └── (Accordion контакты)
├── <MyPostsContainer>         // форма добавления + список постов
│   └── <MyPosts>
│       ├── <TextField + Button>
│       └── [<Post> …]
│           └── пост-карточка (аватар, текст, кнопки)
└── <FriendsList>              // боковой список друзей
    └── [<ListItem> …]
*/