import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Preloader = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="200px"
        >
            <CircularProgress />
        </Box>
    );
};

export default Preloader;
