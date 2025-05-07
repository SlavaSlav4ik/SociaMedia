import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import Profile from './Profile';
import {AuthRedirectComponent} from "../Hoc/withAuthRedirect";

const ProfileContainer = props => {
    const { userId: paramId } = useParams();
    const userId = paramId || props.authedUserId;

    useEffect(() => {
        props.getUsersProfile(userId);
        props.getStatus(userId);
    }, [paramId]);

    return (
        <Profile
            {...props}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            isOwner={!paramId}
            savePhoto={props.savePhoto}
            saveProfile={props.saveProfile}
        />
    );
};

const mapState = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authedUserId: state.auth.id
});

export default connect(mapState, { getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile })(
    AuthRedirectComponent(ProfileContainer)
);