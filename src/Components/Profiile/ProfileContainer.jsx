import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUsersProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";

// Кастомный withRouter для React Router v6
function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />;
    };
}

class ProfileContainer extends React.Component {
    redirectToMainUser() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2; // ← твой ID или дефолтный
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUsersProfile(response.data);
            });
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
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUsersProfile })(withRouter(ProfileContainer));
