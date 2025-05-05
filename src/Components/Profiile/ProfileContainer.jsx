import React from "react";
import { connect } from "react-redux";
import {
    getStatus,
    getUsersProfile,
    savePhoto,
    saveProfile,
    updateStatus,
} from "../../redux/profile-reducer";
import { getFriends } from "../../redux/friends-reducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { AuthRedirectComponent } from "../Hoc/withAuthRedirect";

function withRouter(Component) {
    return (props) => {
        const match = { params: useParams() };
        return <Component {...props} match={match} />;
    };
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match?.params?.userId || 32336;
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
        this.props.getFriends();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            const userId = this.props.match?.params?.userId || 32336;
            this.props.getUsersProfile(userId);
            this.props.getStatus(userId);
            this.props.getFriends();
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
                friends={this.props.friends}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    friends: state.friendsPage.friends,
});

export default compose(
    connect(mapStateToProps, {
        getUsersProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile,
        getFriends,
    }),
    withRouter,
    AuthRedirectComponent
)(ProfileContainer);
