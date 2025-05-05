import React, { useState } from "react";
import {
    Avatar,
    Button,
    Card,
    CardContent,
    Typography,
    Box,
    Stack,
    TextField
} from "@mui/material";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/47d45103406b3b1a2a873981694e844b.jpg";

const Users = ({
                   users,
                   totalUsersCount,
                   pageSize,
                   currentPage,
                   onPageChanged,
                   follow,
                   unfollow,
                   followingInProgress,
                   onSearchChanged,
                   searchTerm
               }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pagesPerBlock = 10;
    const totalBlocks = Math.ceil(pagesCount / pagesPerBlock);

    const [pageBlock, setPageBlock] = useState(Math.ceil(currentPage / pagesPerBlock));
    const [search, setSearch] = useState(searchTerm || "");

    const startPage = (pageBlock - 1) * pagesPerBlock + 1;
    const endPage = Math.min(startPage + pagesPerBlock - 1, pagesCount);
    const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

    const handlePrevBlock = () => {
        if (pageBlock > 1) setPageBlock(pageBlock - 1);
    };

    const handleNextBlock = () => {
        if (pageBlock < totalBlocks) setPageBlock(pageBlock + 1);
    };

    const handleSearch = () => {
        onSearchChanged(search);
        setPageBlock(1);
    };

    return (
        <Box p={2}>
            <Box mb={2} display="flex" gap={2} alignItems="center">
                <TextField
                    variant="outlined"
                    size="small"
                    label="Поиск пользователей"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="contained" onClick={handleSearch}>
                    Найти
                </Button>
            </Box>

            <Stack spacing={2}>
                {users.map(u => (
                    <Card key={u.id} variant="outlined">
                        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <NavLink to={`/profile/${u.id}`}>
                                    <Avatar
                                        src={u.photos.small || userPhoto}
                                        alt="avatar"
                                        sx={{ width: 56, height: 56, mr: 2 }}
                                    />
                                </NavLink>
                                <Box>
                                    <Typography variant="h6">{u.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {u.status || "No status"}
                                    </Typography>
                                </Box>
                            </Box>
                            <Button
                                variant={u.followed ? "outlined" : "contained"}
                                color={u.followed ? "error" : "primary"}
                                disabled={followingInProgress.includes(u.id)}
                                onClick={() => u.followed ? unfollow(u.id) : follow(u.id)}
                            >
                                {u.followed ? "Unfollow" : "Follow"}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Stack>

            <Box mt={3} display="flex" justifyContent="center" alignItems="center" gap={2}>
                <Button variant="outlined" onClick={handlePrevBlock} disabled={pageBlock === 1}>
                    Назад
                </Button>
                {visiblePages.map(p => (
                    <Button
                        key={p}
                        variant={p === currentPage ? "contained" : "outlined"}
                        onClick={() => onPageChanged(p)}
                    >
                        {p}
                    </Button>
                ))}
                <Button variant="outlined" onClick={handleNextBlock} disabled={pageBlock === totalBlocks}>
                    Далее
                </Button>
            </Box>
        </Box>
    );
};

export default Users;
