

import React from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";
import "./Login.css";

const LoginForm = ({ onSubmit }) => {
    return (
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
                    <div>
                        <Field type="email" name="email" placeholder="Email" required />
                    </div>
                    <div>
                        <Field type="password" name="password" placeholder="Password" required />
                    </div>
                    <div>
                        <label>
                            <Field type="checkbox" name="rememberMe" />
                            Remember Me
                        </label>
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                </Form>
            )}
        </Formik>
    );
};

const Login = ({ isAuth, login, logout }) => {
    if (isAuth) {
        return (
            <div className="logout-section">
                <h2>Вы вошли как пользователь</h2>
                <h3>SlavaSlavskii</h3>
                <button onClick={logout}>Выйти</button>
            </div>
        );
    }

    return <LoginForm onSubmit={login} />;
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login, logout })(Login);
