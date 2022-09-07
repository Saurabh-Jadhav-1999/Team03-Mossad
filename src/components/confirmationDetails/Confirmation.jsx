import React, { Fragment } from "react";
import styles from "./Confirmation.module.css";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Link,
  Button,
} from "@mui/material";
// import "./confirmation.css";
import star from "../../assets/images/HotelRatingIcon.png";
import confirmation from "../../assets/images/SuccessfullBookingHotelImage.png";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const Confirmation = (props) => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const breadcrumb = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
  ];
  return (
    <Fragment>
      <div className={`${styles.container}`}>
        <Breadcrumb />
        <div className={`${styles.div1}`}>
          <Typography variant="h5" className={`${styles.typo1}`}>
            Congratulations!
          </Typography>
        </div>
        <div className={`${styles.div2}`}>
          {" "}
          <Typography className={`${styles.typo2}`} variant="h3">
            Your trip has been booked!
          </Typography>
        </div>
        <div className={`${styles.div16}`}>
          <Typography className={`${styles.typo2}`} variant="h4">
            The Leela Kovalam Kerala
          </Typography>
        </div>
        <div className={`${styles.div17}`}>
          <Typography
            variant="subtitle1"
            fontSize="13px"
            className={`${styles.typo3}`}
          >
            <img src={star} alt=''/>&nbsp;&nbsp;
            {props.details.rating}
            <div className={`${styles.div3}`}>
              {" "}
              ({props.details.reviews} reviews)
            </div>
          </Typography>
          <Typography className={`${styles.typo5}`}>
            {props.details.room_count} {props.details.hotel_room_type}
          </Typography>
        </div>
        <div>
          <div className={`${styles.div4}`}>
            <Grid
              container
              spacing={4}
              wrap="nowrap"
              className={`${styles.gridcontainer1}`}
            >
              <Grid item lg={12} sm={4}>
                <Grid item lg={4} sm={4} className={`${styles.griditem}`}>
                  {" "}
                  <Box className={`${styles.box1}`}>
                    <div className={`${styles.div5}`}>Dates</div>
                    <div className={`${styles.div6}`}>
                      {props.details.dates}
                    </div>
                  </Box>
                  <Box className={`${styles.box2}`}>
                    {" "}
                    <div className={`${styles.div7}`}>Travelers</div>
                    <div className={`${styles.div8}`}>
                      {props.details.travelers} Passengers
                    </div>
                  </Box>
                </Grid>
                <Grid item  className={`${styles.griditem1}`}>
                  <div className={`${styles.div9}`}>
                    <div className={`${styles.box3}`}>
                      <div className={`${styles.box4}`}>
                        {" "}
                        <div className={`${styles.div10}`}>
                        Reserve details
                          <Typography
                            variant="h5"
                            className={`${styles.typo4}`}
                          >
                           
                          </Typography>
                        </div>
                      </div>
                      <div className={`${styles.div11}`}>
                   
                        <div className={`${styles.div12}`}>
                          <Box>Booking code</Box>
                          <Box>Date</Box>
                          <Box>Total</Box>
                          <Box>Payment Method</Box>
                        </div>
                        <div className={`${styles.div13}`}>
                          <Box>{props.details.bookingCode}</Box>
                          <Box>{props.details.date}</Box>
                          <Box>{props.details.total}</Box>
                          <Box>{props.details.Payment}</Box>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={8}>
              {" "}
              <div className={`${styles.div14}`}>
                <img src={confirmation} height="510px" width="750px" alt=''/>
              </div>
            </Grid>
          </div>
        </div>
        <Button variant="contained" className={`${styles.button1}`}>
          Back to Home Page
        </Button>{" "}
      </div>
    </Fragment>
  );
};

export default Confirmation;
