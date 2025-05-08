import React, { useState } from "react";
import {
    Avatar,
    Button,
    Card,
    CardContent,
    Typography,
    Box,
    Grid,
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
            {/* Поиск */}
            <Box mb={2} display="flex" gap={2} alignItems="center" flexWrap="wrap">
                <TextField
                    variant="outlined"
                    size="small"
                    label="Поиск пользователей"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    sx={{ flexGrow: 1, minWidth: { xs: '100%', sm: '200px' } }}
                />
                <Button variant="contained" onClick={handleSearch}>Найти</Button>
            </Box>

            {/* Сетка пользователей */}
            <Grid container spacing={2}>
                {users.map(u => (
                    <Grid key={u.id} item xs={12} sm={6} md={4} lg={3}>
                        <Card variant="outlined" sx={{ display: 'grid', alignItems: 'center',
                            gridColumn: '1fr 1fr',
                            minWidth: '300px', minHeight: '250px'}}>
                            {/* Сетка - Аватар - текставая часть хар-во*/}
                            <CardContent
                                sx={{
                                    display: 'grid',
                                    alignItems: 'center',
                                    justifyItems: 'center',
                                    textAlign: 'center',
                                    height: '100%',
                                    gap: 1
                                }}
                            >
                                <NavLink to={`/profile/${u.id}`}>
                                    <Avatar
                                        src={u.photos.small || userPhoto}
                                        alt="avatar"
                                        sx={{
                                            width: { xs: 56, sm: 72 },
                                            height: { xs: 56, sm: 72 }
                                        }}
                                    />
                                </NavLink>

                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
                                    >
                                        {u.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' }, mt: 0.5 }}
                                    >
                                        {u.status || "No status"}
                                    </Typography>
                                </Box>
                                {/* Хар-во подписки */}
                                <Button
                                    variant={u.followed ? "outlined" : "contained"}
                                    color={u.followed ? "error" : "primary"}
                                    disabled={followingInProgress.includes(u.id)}
                                    onClick={() => u.followed ? unfollow(u.id) : follow(u.id)}
                                    sx={{
                                        px: 3,
                                        py: { xs: 0.5, sm: 1 },
                                        fontSize: { xs: '0.75rem', sm: '0.875rem' }
                                    }}
                                >
                                    {u.followed ? "Unfollow" : "Follow"}
                                </Button>
                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Навигация по страницам */}
            <Box mt={3} display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" gap={1}>
                <Button variant="outlined" onClick={handlePrevBlock} disabled={pageBlock === 1}>
                    Назад
                </Button>
                {visiblePages.map(p => (
                    <Button
                        key={p}
                        variant={p === currentPage ? "contained" : "outlined"}
                        onClick={() => onPageChanged(p)}
                        sx={{ minWidth: { xs: 32, sm: 40 } }}
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
