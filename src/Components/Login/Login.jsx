import React from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";
import "./Login.css";

const LoginForm = ({ onSubmit }) => (
    <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        onSubmit={(values, { setSubmitting }) => {
            onSubmit(values.email, values.password, values.rememberMe);
            setSubmitting(false);
        }}
    >
        {({ isSubmitting }) => (
            <Form className="login-form">
                <h2>Login</h2>

                <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />

                <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />

                <label>
                    <Field type="checkbox" name="rememberMe" />
                    &nbsp;Remember Me
                </label>

                <button type="submit" disabled={isSubmitting}>
                    Login
                </button>
            </Form>
        )}
    </Formik>
);

const Login = ({ isAuth, login, logout, login: userLogin }) => {
    if (isAuth) {
        return (
            <div className="logout-section">
                <h2>Вы вошли</h2>
                <h3>{userLogin}</h3>
                <button onClick={logout}>Выйти</button>
            </div>
        );
    }

    return <LoginForm onSubmit={login} />;
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, { login, logout })(Login);
