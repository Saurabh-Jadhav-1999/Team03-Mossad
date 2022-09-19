//Confirmation Page
import React, { Fragment } from "react";
import styles from "./Confirmation.module.css";
import { Box, Typography, Grid, Button } from "@mui/material";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import Loading from "../loader/Loader";
import StarIcon from "@mui/icons-material/Star";

const Confirmation = () => {
  function navigate(path) {
    Navigate(path);
  }
//Retrieved values from slices
  const bookingdetails = useSelector((state) => state.bookNow.finalbooking);
  const hoteldetails = useSelector(state => state.getHotelDetails.hotelDetails);
  const checkin = useSelector((state) => state.search.checkIn);
  const checkout = useSelector((state) => state.search.checkOut);
  const roomtype = useSelector((state) => state.bookNow.room_type);
  const status = useSelector((state) => state.bookNow.status);

  // Format Date as required on the Confirmation Page refer to: figma screen
  // Ex. September 15 - September 22 2022
  const formatDate = () => {
    const checkIn = moment(new Date(checkin)).format('MMMM DD')
    const checkOut = moment(new Date(checkout)).format('MMMM DD')
    const reservationCinYear = moment(new Date(checkin)).format('YYYY')
    const reservationCoutYear = moment(new Date(checkout)).format('YYYY')

    return (reservationCinYear === reservationCoutYear) ? (checkIn + " - " + checkOut + " " + reservationCinYear) : checkIn + " " + reservationCinYear + " - " + checkOut + " " + reservationCoutYear
  }
//Room type names set according to the roomtype variable
  let room_type = "";
  switch (roomtype) {
    case "double_room":
      room_type = "Double Room";
      break;
    case "exclusive_room":
      room_type = "Exclusive Room";
      break;
    case "economy_room":
      room_type = "Economy Room";
      break;
    case "premium_room":
      room_type = "Premium Room";
      break;
    default:
      break;
  }
//Breadcrumbs links for navigation
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

  return (
    <Fragment>
      {/* Loader condition*/}
      {status == "loading" ? (
        <div>
          <Loading />
          <Typography
            variant="h5"
            style={{ fontFamily: "inter", marginLeft: "36vw" }}
          >
            Wait a moment, We are working{" "}
          </Typography>
        </div>
      ) : (
        <div className={`${styles.container}`}>
          <Breadcrumb links={breadcrumbs} />
          <div className={`${styles.greetingContainer}`}>
            <Typography variant="h5" className={`${styles.greeting}`}>
              Congratulations!
            </Typography>
          </div>
          <div className={`${styles.confirmMsgContainer}`}>
            {" "}
            <Typography className={`${styles.confirmMsg}`} variant="h3">
              Your trip has been booked!
            </Typography>
          </div>
          <div className={`${styles.hotelLocationContainer}`}>
            <Typography className={`${styles.confirmMsg}`} variant="h4">
              The {hoteldetails.hotel_name} {hoteldetails.city} {hoteldetails.state}
            </Typography>
          </div>
          <div className={`${styles.ratingReviewsContainer}`}>
            <Typography
              variant="subtitle1"
              fontSize="13px"
              className={`${styles.ratingReviews}`}
            >

              <span className={`${styles.hotelrating}`}>
                <StarIcon sx={{ color: "#ff9c09" }} />
                <span style={{ color: "black", marginRight: "6px" }}>

                  {hoteldetails.rating}
                </span>{" "}
                ({hoteldetails.total_reviews} reviews)
              </span>

            </Typography>
            <Typography className={`${styles.roomType}`}>
              {1} {room_type}
            </Typography>
          </div>
          <div>
      
            <div>
              <div className={`${styles.leftPaneAndImageContainer}`}>
                <Grid
                  container
                  spacing={4}
                  wrap="nowrap"
                  className={`${styles.gridcontainer1}`}
                >
                  <Grid item lg={12} sm={4}>
                    <Grid item lg={4} sm={4} className={`${styles.griditem}`} >
                      {" "}
                      <Box className={`${styles.box1}`}>
                        <div className={`${styles.datesHeader}`}>Dates</div>
                        <div className={`${styles.dates}`}>{formatDate()}</div>
                      </Box>
                      <Box className={`${styles.box2}`}>
                        {" "}
                        <div className={`${styles.travelersHeader}`}>Travelers</div>
                        <div className={`${styles.travelers}`}>
                          {bookingdetails.guest_count}
                          {bookingdetails.guest_count > 1 ? ' Passengers' : ' Passenger'}
                        </div>
                      </Box>
                    </Grid>
                    <Grid item className={`${styles.griditem1}`}>
                      <div className={`${styles.reserveDetailsContainer}`}>
                        <div className={`${styles.box3}`}>
                          <div className={`${styles.reserveDetailsHeaderContainer}`}>
                            {" "}
                            <div className={`${styles.reserveDetailsHeader}`}>
                              Reserve details
                              <Typography
                                variant="h5"
                                className={`${styles.typo4}`}
                              ></Typography>
                            </div>
                          </div>
                          <div className={`${styles.bookingDetailsContainer}`}>
                            <div className={`${styles.leftPane}`}>
                              <Box>Booking code</Box>
                              <Box>Date</Box>
                              <Box>Total</Box>
                              <Box>Payment Method</Box>
                            </div>
                            <div className={`${styles.rightPane}`}>
                              <Box>{bookingdetails.b_id}</Box>
                              <Box>
                                {moment(new Date(checkin)).format("MM/DD/YYYY")}
                              </Box>
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
                  <div className={`${styles.imageContainer}`}>
                    <img
                      className={`${styles.hotelimg}`}
                      src={hoteldetails.hotel_profile_picture}
                      alt=""
                    />
                  </div>
                </Grid>
              </div>
            </div>
            <Button
              variant="contained"
              className={`${styles.button1}`}
              href="/"
            >
              Back to Home Page
            </Button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Confirmation;
