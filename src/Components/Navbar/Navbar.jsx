import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

let Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                {/* Переход и остаток цвета на активном*/}
                <NavLink to="/profile" className={({isActive}) => isActive ? s.active : ""}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={({isActive}) => isActive ? s.active : ""}>Friends</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({isActive}) => isActive ? s.active : ""}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={({isActive}) => isActive ? s.active : ""}>News</NavLink>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;