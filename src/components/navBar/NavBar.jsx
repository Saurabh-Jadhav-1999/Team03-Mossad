import React from "react";
import styles from "./NavBar.module.css";
import { AppBar, Stack, Toolbar, Box, Button } from "@mui/material";
import { LanguageLogo } from "../../assets/icons/Language";
import { Logo } from "../../assets/icons/Logo";
import { Notification } from "../../assets/icons/Notification";
import { LoginOptionIcon } from "../../assets/icons/LoginOptions";
import Login from "./../loginModal/Login";
export const NavBar = () => {
  return (
    <AppBar
      position="static"
      className={styles.Appbar}
      sx={{ bgcolor: "white" }}
      elevation={0}
    >
      <Toolbar>
        <Logo />
        <Box component="span" className={styles.webSiteHeader}>
          HotelGuide
        </Box>
        <Stack direction="row" sx={{ alignItems: "center", gap: "20px" }}>
          <Box className={styles.currency}>EURO</Box>
          <Box sx={{ cursor: "pointer" }}>
            <LanguageLogo />
          </Box>
          <Box sx={{ cursor: "pointer" }}>
            <Notification />
          </Box>
          <Box className={styles.divider}></Box>
          <Box className={styles.userProfilePicture}>
            <img
              src={require("./userProfilePicture.png")}
              alt="Adam Grant"
            ></img>
          </Box>
          <Box className={styles.userName}>Adam Grant</Box>
          <Button
            sx={{ cursor: "pointer", padding: "-10px" }}
            className={styles.pointer}
          >
                 {/* <Login /> */}
            <LoginOptionIcon/>
         
       
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
