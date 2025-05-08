import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    // Закрытие при клике вне меню
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className={s.navbar} ref={menuRef}>
            <div className={`${s.burger} ${menuOpen ? s.open : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`${s.menu} ${menuOpen ? s.open : ""}`}>
                <NavLink to="/profile" onClick={() => setMenuOpen(false)}>Профиль</NavLink>
                <NavLink to="/users" onClick={() => setMenuOpen(false)}>Друзья</NavLink>
                <NavLink to="/dialogs" onClick={() => setMenuOpen(false)}>Сообщения</NavLink>

            </div>
        </nav>
    );
};

export default Navbar;
