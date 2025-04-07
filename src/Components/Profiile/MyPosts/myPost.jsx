import React from "react";
import Post from "./Post/Post";
import s from "./Mypost.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";





let Mypost = (props) => {
    let postsElement = props.posts.map(p => <Post message = {p.message} likesCount={p.likesCount}/>)
    console.log("Posts in Mypost:", props.posts);

    let newPostElement = React.createRef()


    let onAddPost = () => {
        props.addPost ()

    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)


    }

    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>My post</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>{postsElement}</div>

        </div>
    )
}

export default Mypost