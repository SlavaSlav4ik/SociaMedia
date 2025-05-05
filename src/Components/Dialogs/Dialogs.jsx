import React, { useEffect, useState } from "react";
import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemText,
    Paper,
    TextField,
    Button,
    Typography,
} from "@mui/material";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    const { dialogsPage, fetchMessages, sendMessageThunk, updateNewMessageBody, isAuth } = props;
    const [selectedUserId, setSelectedUserId] = useState(null);

    const { dialogs, messages, newMessageBody } = dialogsPage;

    useEffect(() => {
        if (selectedUserId) {
            fetchMessages(selectedUserId);
        }
    }, [selectedUserId]);

    const handleDialogClick = (userId) => {
        setSelectedUserId(userId);
    };

    const handleNewMessageChange = (e) => {
        updateNewMessageBody(e.target.value);
    };

    const handleSendMessageClick = () => {
        if (selectedUserId && newMessageBody.trim()) {
            sendMessageThunk(selectedUserId, newMessageBody);
        }
    };

    useEffect(() => {
        props.fetchDialogs();
    }, []);

    if (!isAuth) return <Navigate to="/login" />;

    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={2}>
                {/* Диалоги */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>Диалоги</Typography>
                        <List>
                            {dialogs.map((d) => (
                                <ListItem
                                    key={d.id}
                                    button
                                    selected={d.id === selectedUserId}
                                    onClick={() => handleDialogClick(d.id)}
                                >
                                    <ListItemText primary={d.name} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>

                {/* Сообщения */}
                <Grid item xs={12} md={8}>
                    <Paper elevation={3} sx={{ p: 2, height: "100%" }}>
                        <Typography variant="h6" gutterBottom>Сообщения</Typography>
                        <Box
                            sx={{
                                maxHeight: 400,
                                overflowY: "auto",
                                mb: 2,
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            {messages.map((m) => (
                                <Paper key={m.id} sx={{ p: 1.5, bgcolor: "#f5f5f5" }}>
                                    <Typography variant="body1">{m.body || m.message}</Typography>
                                </Paper>
                            ))}
                        </Box>

                        {/* Форма отправки */}
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <TextField
                                fullWidth
                                label="Введите сообщение"
                                value={newMessageBody}
                                onChange={handleNewMessageChange}
                                variant="outlined"
                                size="small"
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSendMessageClick}
                            >
                                Отправить
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dialogs;
