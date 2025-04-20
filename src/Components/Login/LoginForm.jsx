
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import s from "./LoginForm.module.css";

const LoginForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            onSubmit(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <div>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>
            <div>
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
            </div>
            <div>
                <label>
                    <input
                        name="rememberMe"
                        type="checkbox"
                        onChange={formik.handleChange}
                        checked={formik.values.rememberMe}
                    />
                    Remember me
                </label>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
};

export default LoginForm;
