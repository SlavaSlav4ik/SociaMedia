import React, { useState } from "react";
import {
    Avatar,
    Button,
    Typography,
    Box,
    Stack,
    Card,
    CardContent,
    Divider
} from "@mui/material";
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "../ProfileDataForm";
import userPhoto from "../../../assets/images/47d45103406b3b1a2a873981694e844b.jpg";

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

    if (!props.profile) return <Typography>Loading...</Typography>;

    return (
        <Card sx={{ marginTop: 2 }}>
            <CardContent>
                <Stack direction="row" spacing={3}>
                    <Avatar
                        src={props.profile.photos.large || userPhoto}
                        alt="User"
                        sx={{ width: 120, height: 120 }}
                    />
                    <Box>
                        {props.isOwner && (
                            <Button variant="outlined" component="label">
                                Upload Photo
                                <input type="file" hidden onChange={onMainPhotoSelected} />
                            </Button>
                        )}

                        <Box mt={2}>
                            <ProfileStatus
                                status={props.status}
                                updateStatus={props.updateStatus}
                            />
                        </Box>
                    </Box>
                </Stack>

                <Divider sx={{ my: 2 }} />

                {editMode ? (
                    <ProfileDataForm profile={props.profile} onSubmit={onSubmit} />
                ) : (
                    <ProfileData
                        profile={props.profile}
                        isOwner={props.isOwner}
                        goToEditMode={() => setEditMode(true)}
                    />
                )}
            </CardContent>
        </Card>
    );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <Stack spacing={1}>
            {isOwner && (
                <Button variant="contained" onClick={goToEditMode}>
                    Edit Profile
                </Button>
            )}
            <Typography><b>Full name:</b> {profile.fullName}</Typography>
            <Typography><b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}</Typography>
            <Typography><b>Professional skills:</b> {profile.lookingForAJobDescription}</Typography>
            <Typography><b>About me:</b> {profile.aboutMe}</Typography>

            <Typography variant="subtitle1">Contacts:</Typography>
            <Stack spacing={0.5}>
                {Object.keys(profile.contacts).map((key) => (
                    <Typography key={key}>
                        <b>{key}:</b> {profile.contacts[key] || "—"}
                    </Typography>
                ))}
            </Stack>
        </Stack>
    );
};

export default ProfileInfo;
