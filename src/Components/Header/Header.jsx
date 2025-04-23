import React, { useEffect } from "react";
import s from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";

let Header = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuth) {
            navigate("/login");
        }
    }, [props.isAuth, navigate]);

    return (
        <header className={s.header}>
            <img
                src="https://w7.pngwing.com/pngs/787/486/png-transparent-vector-flame-pentecost-fire-logo-thumbnail.png"
                alt="logo"
            />
            <div className={s.loginBlock}>
                {props.isAuth
                    ? (
                        <div>
                            {props.login} — <button onClick={props.logout}>Выйти</button>
                        </div>
                    )
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;
