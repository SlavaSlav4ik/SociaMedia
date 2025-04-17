import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

export const AuthRedirectComponent = (WrappedComponent) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to="/login" />;
            return <WrappedComponent {...this.props} />;
        }
    }

    return compose(connect(mapStateToPropsForRedirect))(RedirectComponent);
};
