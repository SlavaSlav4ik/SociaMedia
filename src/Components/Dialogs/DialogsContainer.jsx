import React from "react";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/dialog-reducer";
import { compose } from "redux";
import { AuthRedirectComponent } from "../Hoc/withAuthRedirect";

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = {
    updateNewMessageBody: updateNewMessageBodyCreator,
    sendMessage: sendMessageCreator,
};

// Используем compose для наглядности и удобства
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirectComponent
)(Dialogs);

