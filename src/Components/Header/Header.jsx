import React, { useEffect } from "react";
import s from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/5590.png_860.png"

const Header = ({ isAuth, login, logout }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    return (
        <header className={s.header}>
            <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://img.lovepik.com/element/45004/5590.png_860.png"
                    alt="logo"
                />
            </NavLink>

            <div className={s.loginBlock}>
                {isAuth ? (
                    <div>
                        {/* на больших экранах покажет текст: login — Выйти */}
                        {login} — <button onClick={logout}>Выйти</button>
                    </div>
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
