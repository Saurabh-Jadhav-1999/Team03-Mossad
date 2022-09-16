import React, { Fragment, useEffect } from "react";
import { BookingOptions } from "../bookingOptions/BookingOptions";
import { HotelDetailsAndImage } from "./HotelDetailsAndImage";
import { TabBar } from "../TabComponent/TabBar";
import styles from "./HotelDetails.module.css";
import { Box } from "@mui/system";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotelDetails } from "./../../slices/getHotelDetailsSlice";
import Loading from "../loader/Loader";
import { Typography } from "@material-ui/core";

export const HotelDetails = () => {
  let dispatch = useDispatch();
  let location = useLocation();

  const idFromUrl = new URLSearchParams(location.search).get("id");
  const cityNameFromUrl = new URLSearchParams(location.search).get("city_name");

  useEffect(() => {
    return () => {
      dispatch(fetchHotelDetails({ idFromUrl, cityNameFromUrl }));
    };
  }, []);

  const hoteldetails = useSelector(
    (state) => state.getHotelDetails.hotelDetails
  );
  const facilities = useSelector((state) => state.getHotelDetails.hotelDetails.hotelfacalities);
 
  
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
      style={{ textDecoration: "none", color: "grey" }}
    >
      Hotel List
    </Link>,
    <Link
      to="/hotel-details"
      underline="hover"
      key="2"
      color="inherit"
      href="/hotel-details"
      style={{ textDecoration: "none", color: "black" }}
    >
      Hotel Details
    </Link>,
  ];

  const status = useSelector((state) => state.getHotelDetails.status);
  return (
    <Fragment>
      <Breadcrumb links={breadcrumbs} style={{ backgroundColor: "white" }} />
      <div className={styles.container}>
        {(status == "loading" && facilities!==[]) ?  (
          <div>
            <Loading />
            <Typography
              variant="h5"
              style={{ fontFamily: "inter", textAlign: "center", margin: "10vh auto" }}
            >
              Details are on the way !
            </Typography>
          </div>
        ) : (
          <>
            <HotelDetailsAndImage details={hoteldetails} />
            <Box className={styles.bottomDiv}>
              <TabBar id={idFromUrl} description={hoteldetails} />
              <BookingOptions   />
            </Box>
          </>
        )}
      </div>
    </Fragment>
  );
};
