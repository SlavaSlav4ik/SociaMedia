import { Formik, Form, Field } from "formik";
import { TextField, Checkbox, FormControlLabel, Button, Typography, Stack, Box } from "@mui/material";

const ProfileDataForm = ({ profile, onSubmit }) => {
    const initialValues = {
        fullName: profile.fullName || "",
        lookingForAJob: profile.lookingForAJob || false,
        lookingForAJobDescription: profile.lookingForAJobDescription || "",
        aboutMe: profile.aboutMe || "",
        contacts: profile.contacts || {},
    };

    return (
        <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, handleChange }) => (
                <Form>
                    <Stack spacing={2}>
                        <Typography variant="h6">Edit Profile</Typography>

                        <TextField
                            label="Full name"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleChange}
                            fullWidth
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="lookingForAJob"
                                    checked={values.lookingForAJob}
                                    onChange={handleChange}
                                />
                            }
                            label="Looking for a job"
                        />

                        <TextField
                            label="My professional skills"
                            name="lookingForAJobDescription"
                            value={values.lookingForAJobDescription}
                            onChange={handleChange}
                            fullWidth
                            multiline
                        />

                        <TextField
                            label="About me"
                            name="aboutMe"
                            value={values.aboutMe}
                            onChange={handleChange}
                            fullWidth
                            multiline
                        />

                        <Box>
                            <Typography variant="subtitle1">Contacts:</Typography>
                            <Stack spacing={1}>
                                {Object.keys(profile.contacts).map((key) => (
                                    <TextField
                                        key={key}
                                        label={key}
                                        name={`contacts.${key}`}
                                        value={values.contacts[key] || ""}
                                        onChange={handleChange}
                                        fullWidth
                                    />
                                ))}
                            </Stack>
                        </Box>

                        <Button type="submit" variant="contained" color="primary">
                            Save
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};

export default ProfileDataForm;
