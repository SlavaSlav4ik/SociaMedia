
import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        // Вызываем login или me, если нужно получить данные после загрузки
        // Обычно авторизация происходит на входе в систему, так что вызывать login будет не нужно.
        this.props.login("test@example.com", "password", true);  // Заменить на правильный процесс авторизации
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { login, logout })(HeaderContainer);
