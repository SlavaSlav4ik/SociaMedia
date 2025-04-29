import React, { useRef } from "react";
import Post from "./Post/Post";
import s from "./Mypost.module.css";

const MyPost = React.memo((props) => {
    // Список постов
    const postsElement = props.posts.map(p => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ));

    // Реф для textarea
    const newPostElement = useRef(null);

    // Добавление поста
    const onAddPost = () => {
        props.addPost();
    };

    // Обновление текста
    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.content}>
            <div className={s.postsBlock}>
                <h3>My post</h3>
            </div>
            <div>
        <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
            className={s.textarea}
        />
            </div>
            <div>
                <button onClick={onAddPost} className={s.button}>
                    Add post
                </button>
            </div>
            <div className={s.postsList}>{postsElement}</div>
        </div>
    );
});

export default MyPost;
