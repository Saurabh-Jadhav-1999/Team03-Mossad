import React from "react";
import styles from "./NavBar.module.css";
import { AppBar, Stack, Toolbar, Box, Button } from "@mui/material";
import { LanguageLogo } from "../../assets/icons/Language";
import { Logo } from "../../assets/icons/Logo";
import { Notification } from "../../assets/icons/Notification";

import Login from "./../loginModal/Login";
import { useSelector } from "react-redux";

import LogoutIcon from '@mui/icons-material/Logout';

export const NavBar = () => {

  const token = useSelector(state => state.login.token);
  const user = useSelector(state => state.login.user_name);

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
            {
              token == undefined ? null : <img
                src={require("./userProfilePicture.png")}
                alt="Adam Grant"
              ></img>
            }
          </Box>
          <Box className={styles.userName}>{user}</Box>
          {
            token == undefined ? <Login /> : <Button onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("name");
              window.location.reload(false);
            }}><LogoutIcon></LogoutIcon></Button>
          }
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
