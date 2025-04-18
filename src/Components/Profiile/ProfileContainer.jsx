import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getStatus, getUsersProfile, updateStatus} from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { AuthRedirectComponent } from "../Hoc/withAuthRedirect";

// withRouter HOC для получения параметров из URL
function withRouter(Component) {
    return (props) => {
        const match = { params: useParams() };
        return <Component {...props} match={match} />;
    };
}

class ProfileContainer extends React.Component {
    redirectToMainUser() {
        let userId = this.props.match?.params?.userId;
        if (!userId) userId = 32336;
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
        return <Profile {...this.props} profile={this.props.profile} status = {this.props.status}
                        updateStatus = {this.props.updateStatus} />;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

// Оборачиваем всё в compose
export default compose(
    connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
    withRouter,
    AuthRedirectComponent
)(ProfileContainer);

