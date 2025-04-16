import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { getUsersProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Кастомный withRouter для React Router v6
function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />;
    };
}

class ProfileContainer extends React.Component {
    redirectToMainUser() {
        let userId = this.props.match?.params?.userId;
        if (!userId) {
            userId = 3;
        }
        this.props.getUsersProfile(userId);
    }

    componentDidMount() {
        this.redirectToMainUser();
    }

    componentDidUpdate(prevProps) {
        if (this.props.isMain !== prevProps.isMain) {
            if (this.props.isMain) {
                this.redirectToMainUser();
            }
        }
    }

    render() {
        if (!this.props.isAuth) return <Navigate to="/login" />;
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getUsersProfile })(withRouter(ProfileContainer));
