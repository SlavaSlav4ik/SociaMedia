import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { compose } from "redux";
import { AuthRedirectComponent } from "../Hoc/withAuthRedirect";
import {
    fetchDialogs,
    fetchMessages,
    sendMessageThunk,
    updateNewMessageBodyCreator
} from "../../redux/dialog-reducer";

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
    updateNewMessageBody: updateNewMessageBodyCreator,
    fetchMessages,
    sendMessageThunk,
    fetchDialogs
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirectComponent
)(Dialogs);
