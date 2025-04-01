import React from "react";
import s from "./Post.module.css";
let Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/736x/6c/b6/3c/6cb63c8a1e88b37f5c0fb73cbd776cc4.jpg"/>
            <div>{props.message}</div>
            <span>like</span> {props.likesCount}
        </div>
    )
}
export default Post