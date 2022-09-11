import React, { Fragment } from "react";
import { BookingOptions } from "../bookingOptions/BookingOptions";
import { HotelDetailsAndImage } from "./HotelDetailsAndImage";
import { TabBar } from "../TabComponent/TabBar";
import styles from "./HotelDetails.module.css";
import { Box } from "@mui/system";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { Link } from "@mui/icons-material";
const confirm = {

  name: "The Leela kovalam kerala",

  dates: "September 15-22 2022",

  travelers: "3",

  bookingCode: "FD_158456",

  date: "15.08.2022",

  total: "$1000",

  Payment: "Credit Card",

  rating: 4.19,

  reviews: "234",

  hotel_room_type: "Exclusive room",

  room_count: "1",

  tag1: "5.0",

  tag2: "Perfect",

  tag3: "Hotels",

  tag4: "Top Value",

  tag5: "Buidling",
};

const description = `The Raviz Kovalam sits on a cliff, offering panoramic views of the Kovalam shoreline and the Arabian Sea. It is steps away from a private beach, and features a spa.\n
Rooms at The Raviz Kovalam Beach combine wooden décor with modern amenities like a flat-screen TV and tea/coffee making facilities. Each room provides views of the garden or the sea.\n
The outdoor pool and the fitness centre both overlook the sea. The Raviz Kovalam also has a game room and tennis court. Travel services include tour and ticketing arrangements and car rental.\n`;

export const HotelDetails = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      to="/"
      key="1"
      color="inherit"
      href="/"
      // onClick={()=> navigate('Home')}
      style={{ textDecoration: 'none' ,color:"grey"}}
    >
      Home
    </Link>,
    <Link
    to="/search-hotels"
      underline="hover"
      key="2"
      color="inherit"
      href="/search-hotels"
      // onClick={()=> navigate('HotelList')}
      style={{ textDecoration: 'none',color:"black" }}
    >
      Hotel List
    </Link>,
     <Link
     to="/hotel-details"
       underline="hover"
       key="3"
       color="inherit"
       href="/search-hotels"
       // onClick={()=> navigate('HotelList')}
       style={{ textDecoration: 'none',color:"black" }}
     >
       Hotel List
     </Link>
  ];
  return (
    <Fragment>
      <Breadcrumb links={breadcrumbs}/>
    <div className={styles.container}>
      
      <HotelDetailsAndImage details={confirm} />
      <Box className={styles.bottomDiv}>
        <TabBar description={description} />
        <BookingOptions />
      </Box>
    </div>
    </Fragment>
  );
};
