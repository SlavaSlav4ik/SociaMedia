import React, { useRef } from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import Post from "./Post/Post";

const myPost = React.memo((props) => {
    const postsElement = props.posts.map(p => (
        <Post key={p.id} message={p.message} likesCount={p.likesCount} />
    ));

    const newPostElement = useRef(null);

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <Box sx={{ padding: 2, backgroundColor: "#bbdefb", borderRadius: 2 }}>
            <Typography variant="h5" mb={2}>My Posts</Typography>
            <Stack spacing={2}>
                <TextField
                    label="What's on your mind?"
                    multiline
                    rows={3}
                    variant="outlined"
                    inputRef={newPostElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                    fullWidth
                />
                <Button variant="contained" onClick={onAddPost}>
                    Add Post
                </Button>
                {postsElement}
            </Stack>
        </Box>
    );
});

export default myPost;
