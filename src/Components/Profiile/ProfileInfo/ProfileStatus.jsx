import React, { useState, useEffect } from "react";
import { TextField, Typography } from "@mui/material";

const ProfileStatus = ({ status: propStatus, updateStatus }) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(propStatus);

    useEffect(() => {
        setStatus(propStatus);
    }, [propStatus]);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status);
    };

    return (
        <div>
            {!editMode ? (
                <Typography onDoubleClick={activateEditMode} sx={{ cursor: "pointer" }}>
                    <b>Status:</b> {propStatus || "No status"}
                </Typography>
            ) : (
                <TextField
                    autoFocus
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    onBlur={deactivateEditMode}
                    variant="standard"
                    fullWidth
                />
            )}
        </div>
    );
};

export default ProfileStatus;
