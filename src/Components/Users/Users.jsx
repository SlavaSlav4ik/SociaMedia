import React, { useEffect } from "react";

const Users = (props) => {
    useEffect(() => {
        if (props.users.length === 0) {
            props.setUsers([
                {
                    id: 1,
                    photoUrl: "https://i.pinimg.com/474x/19/8d/b1/198db142812e3c6b9797bc63d746cba1.jpg",
                    followed: false,
                    fullName: "Dmitru",
                    status: "I'm ssss",
                    location: { city: "Grodno", country: "Belarus" }
                },
                {
                    id: 2,
                    photoUrl: "https://i.pinimg.com/474x/1f/0f/1d/1f0f1dc3e3cf3148a17b57ab3d554cd2.jpg",
                    followed: true,
                    fullName: "Kethupk",
                    status: "I'm ggggg",
                    location: { city: "Kupavna", country: "Russia" }
                },
                {
                    id: 3,
                    photoUrl: "https://i.pinimg.com/474x/9f/01/9a/9f019a83772a7c83abcb0af5c590951f.jpg",
                    followed: false,
                    fullName: "Dmitru",
                    status: "I'm iiii",
                    location: { city: "Balachiha", country: "Russia" }
                }
            ]);
        }
    }, []);

    return (
        <div>
            {props.users.map(u => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photoUrl}
                                alt="avatar"
                                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                            />
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>:
                                <button onClick={() => props.follow(u.id)}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
