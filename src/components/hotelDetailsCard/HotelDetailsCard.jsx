import { Box, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CityDetails from "./CityDetails";
import Facility from "./Facility";
import styles from "./HotelDetailsCard.module.css";
import { HotelImage } from "./HotelImage";

const details = {
  cityName: "Kerala,India",
  hotelName: "The Leela Kovalam",
  state: "Goa",
  country: "India",
  rating: 4.2,
  reviews: 223,
  location: "Beach Road Kovalam 563465India",
  date: "15.09.2022-10.09.2022",
  departure: "Kochi",
};
export const HotelDetailsCard = (props) => {
  return (
    <Grid container className={styles.hotelDetailBox}>
      <Grid container>
        <Grid item className={styles.hotelImage}>
          <HotelImage item={props.details} />
        </Grid>
        <Grid item className={styles.detailsDiv}>
          <Grid container>
            <Grid item>
              <CityDetails item={props.details} />
            </Grid>
            <Grid item>
              <Facility
                details={props.details}
                cityName={"Kochi"}
                rate={"720"}
                capacity={"For Two"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
