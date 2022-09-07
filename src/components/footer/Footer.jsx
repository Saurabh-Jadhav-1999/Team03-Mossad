import { Button, Box, Grid, TextField } from "@mui/material";
import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/HotelLogo.png";

export const Footer = (props) => {
  return (
    <footer>
      <div className={`${styles.container}`}>
        <div className={`${styles.box1}`}>
          <div className={`${styles.container1}`}>
            <div className={`${styles.div5}`}>
              <label className={`${styles.divLabel1}`}>
                {" "}
                Get Our Pro Offers
              </label>
            </div>
            <div className={`${styles.div1}`}>
              <TextField
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  fontWeight: "bold",
                }}

                className={`${styles.input1}`}
                // type="text"
                label="Type your email here"
              />
              <Button variant="contained" className={`${styles.button1}`}>
                <label> Subscribe</label>
              </Button>
            </div>
          </div>
        </div>

        <Box bgcolor="#eaeaeb" className={`${styles.box2}`}>
          <Grid
            container
            spacing={1}
            wrap="nowrap"
            className={`${styles.gridcontainer1}`}
          >
            <Grid item xs={12} sm={4}>
              <Box className={`${styles.box3}`}>
                <img
                  src={logo}
                  height="40px"
                  width="155vw"
                  className={`${styles.boximg}`}
                  alt=''
                />
                <label className={`${styles.label2}`}>
                  {" "}
                  This is the team that specialises in making sure your travel
                  needs are met.
                </label>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className={`${styles.box4}`}>Services</Box>
              <div className={`${styles.div2}`}>
                <Box>Travel Booking</Box>
                <Box>Flight Booking</Box>
                <Box>Car rental</Box>
                <Box>Five Star Hotel</Box>
                <Box>Travelling</Box>
              </div>
            </Grid>
            <Grid item xs={5} sm={4}>
              <Box className={`${styles.box5}`}>Support</Box>
              <div className={`${styles.div3}`}>
                <Box>Account</Box>
                <Box>Legal</Box>
                <Box>Contact</Box>
                <Box>Terms & Conditions</Box>
                <Box>Privacy Policy</Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className={`${styles.box6}`}>Business</Box>
              <div className={`${styles.div4}`}>
                <Box>Success</Box>
                <Box>About Location</Box>
                <Box>Blog</Box>
                <Box>Information</Box>
                <Box>Travel Guide</Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </footer>
  );
};
