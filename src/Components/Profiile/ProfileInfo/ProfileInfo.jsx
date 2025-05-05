import React, { useState } from "react";
import {
    Avatar,
    Button,
    Typography,
    Box,
    Stack,
    Card,
    CardContent,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
                <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
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
    const hasContacts = Object.values(profile.contacts).some((value) => value);

    return (
        <Stack spacing={2}>
            {isOwner && (
                <Button variant="contained" onClick={goToEditMode}>
                    Edit Profile
                </Button>
            )}

            <Typography><b>Full name:</b> {profile.fullName}</Typography>

            <Typography>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
            </Typography>

            {profile.lookingForAJob && profile.lookingForAJobDescription && (
                <Typography>
                    <b>Professional skills:</b> {profile.lookingForAJobDescription}
                </Typography>
            )}

            {profile.aboutMe && (
                <Typography>
                    <b>About me:</b> {profile.aboutMe}
                </Typography>
            )}

            {hasContacts && (
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography><b>Contacts</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack spacing={1}>
                            {Object.entries(profile.contacts).map(([key, value]) =>
                                value ? (
                                    <Box key={key}>
                                        <Typography>
                                            <b>{capitalize(key)}:</b>{" "}
                                            <a href={value} target="_blank" rel="noreferrer" style={{ color: "#1976d2" }}>
                                                {value}
                                            </a>
                                        </Typography>
                                    </Box>
                                ) : null
                            )}
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            )}
        </Stack>
    );
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default ProfileInfo;
