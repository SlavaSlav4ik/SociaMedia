import React from "react";
import styles from "./User.module.css";
import userPhoto from "../../assets/images/47d45103406b3b1a2a873981694e844b.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>

            <div>
                {pages.map(p => {
                    return <span
                        key={p}
                        className={props.currentPage === p ? styles.selectedPage : ""}
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}>{p}</span>

                })}
            </div>

            {props.users.map(u => (
                <div key={u.id}>
                        <span>
                            <div>
                               <NavLink to={`/profile/${u.id}`}>
                                    <img
                                        src={u.photos.small != null ? u.photos.small : userPhoto}
                                        alt="avatar"
                                        style={{width: "50px", height: "50px", borderRadius: "50%"}}
                                    />
                            </NavLink>
                            </div>
                            <div>
                                {u.followed ? (
                                    <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                ) : (
                                    <button onClick={() => props.follow(u.id)}>Follow</button>
                                )}
                            </div>
                        </span>
                    <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        {/* Место для location, если появится в API */}
                        <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                </div>
            ))}
        </div>
    )
}

export default Users