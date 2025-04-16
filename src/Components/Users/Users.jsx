import React from "react";
import styles from "./User.module.css";
import userPhoto from "../../assets/images/47d45103406b3b1a2a873981694e844b.jpg";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div>
                {pages.map(p => (
                    <span
                        key={p}
                        className={props.currentPage === p ? styles.selectedPage : ""}
                        onClick={() => props.onPageChanged(p)}
                    >
                        {p}
                    </span>
                ))}
            </div>

            {props.users.map(u => (
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    src={u.photos.small || userPhoto}
                                    alt="avatar"
                                    style={{width: "50px", height: "50px", borderRadius: "50%"}}
                                />
                            </NavLink>
                        </div>
                                            <div>
                        {u.followed ? (
                            <button
                                disabled={props.followingInProgress.includes(u.id)}
                                onClick={() => props.unfollow(u.id)}
                            >
                                Unfollow
                            </button>
                        ) : (
                            <button
                                disabled={props.followingInProgress.includes(u.id)}
                                onClick={() => props.follow(u.id)}
                            >
                                Follow
                            </button>
                        )}
                    </div>

                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        {/* Эти поля заглушки — если добавишь location в API, убери кавычки */}
                        <div>{'u.location?.country'}</div>
                        <div>{'u.location?.city'}</div>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
