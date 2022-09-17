//Footer page
import { Button } from "@mui/material";
import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/HotelLogo.png";
import {  toast } from "react-toastify";
import {
  Box,
  Grid,
  TextField,
} from "@mui/material";

import "react-toastify/dist/ReactToastify.css";
export const Footer = (props) => {
  const notify = () => toast("Email Sent !");
  return (
    <footer>
      <div className={`${styles.container}`}>
        <div className={`${styles.topPane}`}>
          <div className={`${styles.container1}`}>
            <div className={`${styles.getOffersContainer}`}>
              <label className={`${styles.getOffersLabel}`}>
                {" "}
                Get Our Pro Offers
              </label>
            </div>
            <div className={`${styles.txtfldAndBtnContainer}`}>
              <TextField
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  fontWeight: "bold",
                }}
                className={`${styles.input1}`}
          
                label="Type your email here"
              />
              <Button
                variant="contained"
                className={`${styles.button1}`}
                onClick={()=>{
                  notify();
                }
                }
              >
                <label className={`${styles.subscribeLabel}`}> Subscribe</label>
              
              </Button>
            </div>
          </div>
        </div>

        <Box bgcolor="#eaeaeb" className={`${styles.bottomPane}`}>
          <Grid
            container
            spacing={1}
            wrap="nowrap"
            className={`${styles.gridcontainer1}`}
          >
            <Grid item xs={12} sm={4}>
              <Box className={`${styles.hotelLogoAndDes}`}>
                <img
                  src={logo}
                  height="40px"
                  width="20vw"
                  className={`${styles.boximg}`}
                  alt=""
                />
                <label className={`${styles.label2}`}>
                  {" "}
                  This is the team that specialises in making sure your travel
                  needs are met.
                </label>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className={`${styles.servicesBox}`}>Services</Box>
              <div className={`${styles.servicesContainer}`}>
                <Box>Travel Booking</Box>
                <Box>Flight Booking</Box>
                <Box>Car rental</Box>
                <Box>Five Star Hotel</Box>
                <Box>Travelling</Box>
              </div>
            </Grid>
            <Grid item xs={5} sm={4}>
              <Box className={`${styles.supportBox}`}>Support</Box>
              <div className={`${styles.supportContainer}`}>
                <Box>Account</Box>
                <Box>Legal</Box>
                <Box>Contact</Box>
                <Box>Terms & Conditions</Box>
                <Box>Privacy Policy</Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className={`${styles.businessBox}`}>Business</Box>
              <div className={`${styles.businessContainer}`}>
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
