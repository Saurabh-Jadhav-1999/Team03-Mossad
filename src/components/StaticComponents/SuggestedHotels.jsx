import { Box, Typography } from "@material-ui/core";
import styles from "./SuggestedHotels.module.css";
import React from "react";
import { Grid } from "@mui/material";
import { HotelCard } from "./HotelCard";
import { useSelector } from "react-redux";
const hotelName = "Pune";
const hoteldetails = {
  hotelName: "J.W. Marriott",
  rating: "4.5",
  review: "321",
  address: "S.B. Road Pune",
  img: "",
  city: "Pune",
  state: "Maharashtra",
  basePrice: "355",
  id: "123",
};

export const SuggestedHotels = () => {

  // DO NOT REMOVE THIS
  // const suggestedHotelList = useSelector(
  //   (state) => state.suggestedHotelList.suggestedList
  // );
  // console.log(suggestedHotelList); 

  return (
    <Box className={styles.suggestedHotelsMainBox}>
      <Typography component={"h1"}>Hotels you might like</Typography>
      {/* <Typography component={'h3'}>
            {hotelName}
          </Typography> */}
      <Grid container spacing={3}>
        <HotelCard details={hoteldetails} />
        <HotelCard details={hoteldetails} />
        <HotelCard details={hoteldetails} />
        <HotelCard details={hoteldetails} />
        {/* <HotelCard details={hoteldetails}/>
                <HotelCard details={hoteldetails}/>
                <HotelCard details={hoteldetails}/>
                <HotelCard details={hoteldetails}/>
                <HotelCard details={hoteldetails}/>
                <HotelCard details={hoteldetails}/> */}
      </Grid>
    </Box>
  );
};
