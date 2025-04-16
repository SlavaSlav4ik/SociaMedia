import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

let Header = (props) => {

    return (
        <header className={s.header}>
            <img
                src="https://w7.pngwing.com/pngs/787/486/png-transparent-vector-flame-pentecost-fire-logo-thumbnail.png"
                alt="sosal"/>

            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={"/login"}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;