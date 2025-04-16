import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import {getAuthReducerData, } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthReducerData ()
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthReducerData })(HeaderContainer);
