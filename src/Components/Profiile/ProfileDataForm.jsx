import React from 'react';
import { Formik, Form } from 'formik';
import {
    TextField,
    Checkbox,
    FormControlLabel,
Button,
    Typography,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProfileDataForm = ({ profile, onSubmit }) => {
    const initialValues = {
        fullName: profile.fullName || '',
        lookingForAJob: profile.lookingForAJob || false,
        lookingForAJobDescription: profile.lookingForAJobDescription || '',
        aboutMe: profile.aboutMe || '',
        contacts: profile.contacts || {}
    };

    return (
        <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, handleChange }) => (
                <Form>
                    <Stack spacing={3}>
                        <Typography variant="h6">Edit Profile</Typography>
                        <TextField name="fullName" label="Full Name" value={values.fullName} onChange={handleChange} fullWidth />
                        <FormControlLabel
                            control={<Checkbox name="lookingForAJob" checked={values.lookingForAJob} onChange={handleChange} />}
                            label="Looking for a job"
                        />
                        {values.lookingForAJob && (
                            <TextField
                                name="lookingForAJobDescription"
                                label="Professional skills"
                                value={values.lookingForAJobDescription}
                                onChange={handleChange}
                                fullWidth
                            />
                        )}
                        <TextField name="aboutMe" label="About me" value={values.aboutMe} onChange={handleChange} fullWidth />
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography><b>Contacts</b></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Stack spacing={2}>
                                    {Object.keys(profile.contacts).map(key => (
                                        <TextField
                                            key={key}
                                            name={`contacts.${key}`}
                                            label={key.charAt(0).toUpperCase() + key.slice(1)}
                                            value={values.contacts[key] || ''}
                                            onChange={handleChange}
                                            fullWidth
                                        />
                                    ))}
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                        <Button type="submit" variant="contained">Save</Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};

export default ProfileDataForm;