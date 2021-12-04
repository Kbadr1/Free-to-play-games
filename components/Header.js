import React from "react";
import { Box, Typography } from "@mui/material";
import headerStyles from "../styles/Header.module.css";

const Header = ({ text }) => {
  return (
    <Box component="div" textAlign="center" className={headerStyles.header}>
      <Typography variant="h3" fontWeight="700">
        {text}
      </Typography>
    </Box>
  );
};

export default Header;
