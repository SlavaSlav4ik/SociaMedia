// ProfileDataForm.js
import { Formik, Form, Field } from "formik";

const ProfileDataForm = ({ profile, onSubmit }) => {
    const initialValues = {
        fullName: profile.fullName || "",
        lookingForAJob: profile.lookingForAJob || false,
        lookingForAJobDescription: profile.lookingForAJobDescription || "",
        aboutMe: profile.aboutMe || "",
        contacts: profile.contacts || {},
    };

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {({ values }) => (
                <Form>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                    <div>
                        <b>Full name</b>: <Field name="fullName" />
                    </div>
                    <div>
                        <b>Looking for a job</b>: <Field type="checkbox" name="lookingForAJob" />
                    </div>
                    <div>
                        <b>My professional skills</b>: <Field name="lookingForAJobDescription" />
                    </div>
                    <div>
                        <b>About me</b>: <Field name="aboutMe" />
                    </div>
                    <div>
                        <b>Contacts</b>:
                        {Object.keys(profile.contacts).map((key) => (
                            <div key={key}>
                                <b>{key}</b>: <Field name={`contacts.${key}`} />
                            </div>
                        ))}
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ProfileDataForm;
