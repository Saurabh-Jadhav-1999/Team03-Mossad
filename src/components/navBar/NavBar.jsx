import React from "react";
import styles from "./NavBar.module.css";
import { AppBar, Stack, Toolbar, Box, Button } from "@mui/material";
import { LanguageLogo } from "../../assets/icons/Language";
import { Logo } from "../../assets/icons/Logo";
import { Notification } from "../../assets/icons/Notification";
import Login from "./../loginModal/Login";
import { useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import johnImg from "./JohnImg.png";
import AnnaImg from "./AnnaImg.png";
import { useState } from "react";
import { LoginOptionIcon } from "../../assets/icons/LoginOptions";
export const NavBar = () => {
  const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.login.user_name);
  const [showLogin, setShowLogin] = useState(true);

  const userImg = user === "John Doe" ? johnImg : AnnaImg;
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
          {localStorage.getItem("token") ? (
            <>
              <Box className={styles.userProfilePicture}>
                <img src={userImg} alt="Adam Grant"></img>
              </Box>
              <Box className={styles.userName}>{user}</Box>
              {/* <LoginOptionIcon> */}
              <Button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("name");
                  window.location.reload(false);
                }}
              >
                <LogoutIcon />
              </Button>
              {/* </LoginOptionIcon> */}
            </>
          ) : (
            <Login />
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
