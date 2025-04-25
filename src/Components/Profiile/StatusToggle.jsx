/*import React, { useState } from "react";
import styles from "./StatusToggle.module.css";

const StatusToggle = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleStatus = () => {
        setIsActive(prev => !prev);
    };

    return (
        <div className={styles.statusWrapper}>
            <button onClick={toggleStatus} className={styles.statusButton}>
                Toggle Color Мяу-мяу
            </button>
            <div className={`${styles.statusBox} ${isActive ? styles.active : styles.inactive : steles.myu-muy}`}></div>
        </div>
    );
};
Для простого переключения двух цвета
export default StatusToggle; */

import React, { useState } from "react";
import styles from "./StatusToggle.module.css";

const StatusToggle = () => {
    const [status, setStatus] = useState("inactive");

    const toggleStatus = () => {
        setStatus(prev => {
            if (prev === "inactive") return "active";
            if (prev === "active") return "myumyu";
            return "inactive";
        });
    };

    return (
        <div className={styles.statusWrapper}>
            <button onClick={toggleStatus} className={styles.statusButton}>
                Toggle Color Мяу-мяу
            </button>
            <div className={`${styles.statusBox} ${styles[status]}`}></div>
        </div>
    );
};

export default StatusToggle;

