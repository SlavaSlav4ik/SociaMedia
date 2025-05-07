import React, { useRef } from 'react';
import {
    Box,
    TextField,
    Button,
    Stack,
    Dialog,
    DialogTitle,
    DialogActions
} from '@mui/material';
import Post from "./Post/Post";


export default function MyPosts({
                                    posts,
                                    newPostText,
                                    addPost,
                                    updateNewPostText,
                                    deletePost,
                                    toggleLike,
                                    toggleDislike
                                }) {
    const ref = useRef();
    const [confirmOpen, setConfirmOpen] = React.useState(false);
    const [toDeleteId, setToDeleteId] = React.useState(null);

    const handleDeleteClick = id => {
        setToDeleteId(id);
        setConfirmOpen(true);
    };
    const handleConfirm = () => {
        deletePost(toDeleteId);
        setConfirmOpen(false);
    };
    const handleCancel = () => setConfirmOpen(false);

    return (
        <Box sx={{ p:2, bgcolor:'#bbdefb', borderRadius:2, mb:4 }}>
            <Stack spacing={2}>
                <TextField
                    multiline
                    rows={3}
                    inputRef={ref}
                    value={newPostText}
                    onChange={e => updateNewPostText(e.target.value)}
                    label="What's on your mind?"
                    fullWidth
                />
                <Button variant="contained" onClick={addPost}>Add Post</Button>
                {posts.map(p => (
                    <Post
                        key={p.id}
                        {...p}
                        onLike={() => toggleLike(p.id)}
                        onDislike={() => toggleDislike(p.id)}
                        onDelete={() => handleDeleteClick(p.id)}
                    />
                ))}
            </Stack>

            {/* Диалог подтверждения */}
            <Dialog open={confirmOpen} onClose={handleCancel}>
                <DialogTitle>Удалить этот пост?</DialogTitle>
                <DialogActions>
                    <Button onClick={handleCancel}>Отмена</Button>
                    <Button onClick={handleConfirm} color="error">Удалить</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
