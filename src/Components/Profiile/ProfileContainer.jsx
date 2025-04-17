import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUsersProfile } from "../../redux/profile-reducer";
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
        if (!userId) userId = 3;
        this.props.getUsersProfile(userId);
    }

    componentDidMount() {
        this.redirectToMainUser();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.redirectToMainUser();
        }
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

// Оборачиваем всё в compose
export default compose(
    connect(mapStateToProps, { getUsersProfile }),
    withRouter,
    AuthRedirectComponent
)(ProfileContainer);

