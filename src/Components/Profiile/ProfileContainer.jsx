import React from "react";
import { connect } from "react-redux";
import { getStatus, getUsersProfile, savePhoto, saveProfile, updateStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { AuthRedirectComponent } from "../Hoc/withAuthRedirect";

// HOC для получения параметров из URL
function withRouter(Component) {
    return (props) => {
        const match = { params: useParams() };
        return <Component {...props} match={match} />;
    };
}

class ProfileContainer extends React.Component {
    redirectToMainUser() {
        let userId = this.props.match?.params?.userId;
        if (!userId) userId = 32336;  // ID по умолчанию
        this.props.getUsersProfile(userId);
    }

    componentDidMount() {
        const userId = this.props.match?.params?.userId || 32336;
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.redirectToMainUser();
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
                saveProfile={this.props.saveProfile}  // передаем saveProfile в пропсах
            />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    AuthRedirectComponent
)(ProfileContainer);
