import { Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CityDetails from "./CityDetails";
import Facility from "./Facility";
import styles from "./HotelDetails.module.css";
import HotelImage from "./HotelImage";

const details = {
  cityName: "Kerala,India",
  hotelName: "The Leela Kovalam",
  rating: 4.2,
  reviews: 223,
  location: "Beach Road Kovalam 563465India",
  date: "15.09.2022-10-09-2022",
  departure: "Kochi",

};
export const HotelDetailsCard = (props) => {
  // const hotellist=useSelector((state)=>state.search.hotellist)
  return (
    <Box className={styles.hotelDetailBox}>
      <HotelImage  item={props.details}/>
      <Box className={styles.detailsDiv}>
     
        <CityDetails item={props.details} />
   
        <Facility details={details} cityName={"Kochi"} rate={"720"} capacity={"For Two"} />
        {/*props are repeted for demo perpose */}
      </Box>
    </Box>
  );
};
