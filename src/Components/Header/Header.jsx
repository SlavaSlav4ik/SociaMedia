import React, { useEffect } from "react";
import s from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";

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
                    src="https://w7.pngwing.com/pngs/787/486/png-transparent-vector-flame-pentecost-fire-logo-thumbnail.png"
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
