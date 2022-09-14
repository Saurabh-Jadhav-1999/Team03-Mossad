import React, { Fragment } from "react";
import styles from "./Confirmation.module.css";
import { Box, Typography, Grid, Button, Breadcrumbs } from "@mui/material";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import Loading from "../loader/Loader";
import StarIcon from '@mui/icons-material/Star';

const Confirmation = (props) => {
  function navigate(path) {
    Navigate(path);
  }

  const bookingdetails = useSelector(state => state.bookNow.finalbooking);
  const hotelname = useSelector(state => state.getHotelDetails.hotelDetails.hotel_name);
  const hotelstate = useSelector(state => state.getHotelDetails.hotelDetails.state);
  const hotelrating = useSelector(state => state.getHotelDetails.hotelDetails.rating);
  const city = useSelector(state => state.getHotelDetails.hotelDetails.city);
  const checkin = useSelector(state => state.search.checkIn);
  const hotelprofile = useSelector((state) => state.getHotelDetails.hotelDetails.hotel_profile_picture);
  const hotelreviews = useSelector(state => state.getHotelDetails.hotelDetails.total_reviews);
  const checkout = useSelector(state => state.search.checkOut);
  const roomtype = useSelector(state => state.bookNow.room_type);
  const status = useSelector((state) => state.bookNow.status);

  const formatDate = () => {
    const checkIn = moment(new Date(checkin)).format('MMMM DD')
    const checkOut = moment(new Date(checkout)).format('MMMM DD')
    const reservationYear = moment(new Date(checkin)).format('YYYY')
    return checkIn + " - " + checkOut + " " + reservationYear
  }

  
  const breadcrumbs = [
    <Link
      underline="hover"
      to="/"
      key="1"
      color="inherit"
      href="/"
      style={{ textDecoration: "none", color: "grey" }}
    >
      Home
    </Link>,
    <Link
      to="/search-hotels"
      underline="hover"
      key="2"
      color="inherit"
      href="/search-hotels"
      onClick={() => navigate("HotelList")}
      style={{ textDecoration: "none", color: "grey" }}
    >
      Hotel List
    </Link>,
    <Link
      to="/hotel-details"
      underline="hover"
      key="3"
      color="inherit"
      href="/search-hotels"
      style={{ textDecoration: "none", color: "grey" }}
    >
      Hotel Details
    </Link>,
    <Link
      to="/booking-confirmation"
      underline="hover"
      key="4"
      color="inherit"
      href="/search-hotels"
      style={{ textDecoration: "none", color: "black" }}
    >
      Congratulations
    </Link>,
  ];

  console.log("Confirmbooking page", bookingdetails);
  return (
    <Fragment>
      {status === "loading" ? (
        <div >
          <Loading />
          <Typography variant="h5" style={{ fontFamily: "inter", marginLeft: "36vw" }}>Wait a moment, We are working :)</Typography>
        </div>
      ) : (
        <div className={`${styles.container}`}>
          <Breadcrumb links={breadcrumbs} />
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
              The {hotelname} {city} {hotelstate}
            </Typography>
          </div>
          <div className={`${styles.div17}`}>
            <Typography
              variant="subtitle1"
              fontSize="13px"
              className={`${styles.typo3}`}
            >
              <StarIcon sx={{ color: "#ff9c09" }} />
              <span className={`${styles.hotelrating}`}>
                <span style={{ color: "black", marginRight: "6px" }}>
                  {hotelrating}
                </span>{" "}
                ({hotelreviews} reviews)
              </span>
              <span></span>
            </Typography>
            <Typography className={`${styles.typo5}`}>
              {1} {roomtype}
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
              </Grid>
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
                          {formatDate()}
                        </div>
                      </Box>
                      <Box className={`${styles.box2}`}>
                        {" "}
                        <div className={`${styles.div7}`}>Travelers</div>
                        <div className={`${styles.div8}`}>
                          {bookingdetails.guest_count} Passengers
                        </div>
                      </Box>
                    </Grid>
                    <Grid item className={`${styles.griditem1}`}>
                      <div className={`${styles.div9}`}>
                        <div className={`${styles.box3}`}>
                          <div className={`${styles.box4}`}>
                            {" "}
                            <div className={`${styles.div10}`}>
                              Reserve details
                              <Typography
                                variant="h5"
                                className={`${styles.typo4}`}
                              ></Typography>
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
                              <Box>{bookingdetails.b_id}</Box>
                              <Box>{moment(new Date(checkin)).format('DD.MM.YYYY')}</Box>
                              <Box>${bookingdetails.total_cost}</Box>
                              <Box>Credit card</Box>
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
                    <img className={`${styles.hotelimg}`} src={hotelprofile} height="510px" width="750px" alt="" />
                  </div>
                </Grid>
              </div>
            </div >
            <Button variant="contained" className={`${styles.button1}`} href="/">
              Back to Home Page
            </Button>{" "}
          </div >
        </div>
      )}
    </Fragment >
  );
};

export default Confirmation;
