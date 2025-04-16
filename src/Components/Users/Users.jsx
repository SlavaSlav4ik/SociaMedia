import React from "react";
import styles from "./User.module.css";
import userPhoto from "../../assets/images/47d45103406b3b1a2a873981694e844b.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const followUser = (userId) => {
        props.toggleFollowingProgress(true, userId);

        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "8b85ad00-0f2f-45c0-ace3-1efee3f9809f"
            }
        }).then(response => {
            if (response.data.resultCode === 0) {
                props.follow(userId);
            }
            props.toggleFollowingProgress(false, userId);
        });
    };

    const unfollowUser = (userId) => {
        props.toggleFollowingProgress(true, userId);

        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "8b85ad00-0f2f-45c0-ace3-1efee3f9809f"
            }
        }).then(response => {
            if (response.data.resultCode === 0) {
                props.unfollow(userId);
            }
            props.toggleFollowingProgress(false, userId);
        });
    };

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
                                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                                />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    disabled={props.followingInProgress.includes(u.id)}
                                    onClick={() => unfollowUser(u.id)}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={props.followingInProgress.includes(u.id)}
                                    onClick={() => followUser(u.id)}
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
