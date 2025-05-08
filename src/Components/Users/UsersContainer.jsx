import React from "react";
import { connect } from "react-redux";
import {
    follow,
    unfollow,
    requestUsers
} from "../../redux/Users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { compose } from "redux";
import { AuthRedirectComponent } from "../Hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getSearchTerm
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize, searchTerm } = this.props;
        this.props.requestUsers(currentPage, pageSize, searchTerm);
    }

    onPageChanged = (pageNumber) => {
        const { pageSize, searchTerm } = this.props;
        this.props.requestUsers(pageNumber, pageSize, searchTerm);
    };

    onSearchChanged = (term) => {
        this.props.requestUsers(1, this.props.pageSize, term);
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}

                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    followingInProgress={this.props.followingInProgress}
                    onSearchChanged={this.onSearchChanged}
                    searchTerm={this.props.searchTerm}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    searchTerm: getSearchTerm(state)
});

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        requestUsers
    }),
    AuthRedirectComponent
)(UsersContainer);
