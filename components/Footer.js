import React from "react";
import { Box, Button, Container } from "@mui/material";
import FooterStyles from "../styles/Footer.module.css";

const Footer = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box className={FooterStyles.footer}>
      <Button onClick={toTop} color="secondary">
        Back to top
      </Button>
    </Box>
  );
};

export default Footer;
