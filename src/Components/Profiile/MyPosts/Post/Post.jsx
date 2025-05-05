import React, { useState } from "react";
import { Card, CardContent, Typography, Avatar, IconButton, Stack } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Post = ({ message, likesCount }) => {
    const [likes, setLikes] = useState(likesCount || 0);
    const [dislikes, setDislikes] = useState(0);

    const handleLike = () => setLikes(prev => prev + 1);
    const handleDislike = () => setDislikes(prev => prev + 1);

    return (
        <Card sx={{ maxWidth: 500, marginBottom: 2, backgroundColor: "#e3f2fd" }}>
            <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src="https://i.pinimg.com/736x/6c/b6/3c/6cb63c8a1e88b37f5c0fb73cbd776cc4.jpg" />
                    <Typography variant="body1">{message}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} mt={2} alignItems="center">
                    <IconButton onClick={handleLike} color="primary">
                        <ThumbUpIcon />
                    </IconButton>
                    <Typography>{likes}</Typography>
                    <IconButton onClick={handleDislike} color="error">
                        <ThumbDownIcon />
                    </IconButton>
                    <Typography>{dislikes}</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default Post;
