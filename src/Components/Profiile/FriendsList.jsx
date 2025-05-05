import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Avatar,
    Stack,
    Box,
} from "@mui/material";

const FriendsList = ({ friends }) => {
    if (!friends || friends.length === 0) return null;

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Friends
                </Typography>
                <Stack spacing={2}>
                    {friends.map((friend) => (
                        <Box key={friend.id} display="flex" alignItems="center">
                            <Avatar
                                src={friend.photos.small}
                                alt={friend.name}
                                sx={{ marginRight: 2 }}
                            />
                            <Typography>{friend.name}</Typography>
                        </Box>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
};

export default FriendsList;
