// src/Components/FriendsList/FriendsList.jsx

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../../redux/friends-reducer';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

function FriendsList({ friends, getFriends }) {
    useEffect(() => {
        getFriends();
    }, [getFriends]);

    return (
        <Box sx={{ p: 2, bgcolor: '#f3e5f5', borderRadius: 2 }}>
            <Typography variant="h6" mb={1}>Friends</Typography>
            <List>
                {friends.map(f => (
                    <ListItem key={f.id}>
                        <ListItemAvatar>
                            <NavLink to={`/profile/${f.id}`} style={{ textDecoration: 'none' }}>
                                <Avatar src={f.photos?.small || ''} sx={{ cursor: 'pointer' }} />
                            </NavLink>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <NavLink
                                    to={`/profile/${f.id}`}
                                    style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }}
                                >
                                    {f.name}
                                </NavLink>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

const mapState = state => ({
    friends: state.friendsPage.friends
});

export default connect(mapState, { getFriends })(FriendsList);
