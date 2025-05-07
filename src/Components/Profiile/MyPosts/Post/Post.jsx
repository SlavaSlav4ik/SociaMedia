import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Stack,
    Avatar
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Post({
                                 message,
                                 likesCount,
                                 dislikesCount,
                                 vote,
                                 onLike,
                                 onDislike,
                                 onDelete
                             }) {
    return (
        <Card sx={{ mb:2, bgcolor:'#e3f2fd' }}>
            <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar />
                    <Typography>{message}</Typography>
                    <IconButton onClick={onDelete} sx={{ ml:'auto' }}><DeleteIcon /></IconButton>
                </Stack>
                <Stack direction="row" spacing={1} mt={2} alignItems="center">
                    <IconButton onClick={onLike} color={vote==='like'?'primary':'default'}>
                        <ThumbUpIcon />
                    </IconButton>
                    <Typography>{likesCount}</Typography>
                    <IconButton onClick={onDislike} color={vote==='dislike'?'error':'default'}>
                        <ThumbDownIcon />
                    </IconButton>
                    <Typography>{dislikesCount}</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}
