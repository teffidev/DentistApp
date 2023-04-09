import React from "react";
import { Link, Outlet } from "react-router-dom";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div>
      <Outlet />

      <AppBar position="static">
        <Link to="/contact">
          <button className={styles.buttonBack}>Contact Us</button>
        </Link>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 400,
                letterSpacing: ".0rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
