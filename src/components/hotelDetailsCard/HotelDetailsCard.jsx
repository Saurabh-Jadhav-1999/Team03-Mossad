import { Grid } from "@material-ui/core";
import React from "react";
import CityDetails from "./CityDetails";
import Facility from "./Facility";
import styles from "./HotelDetailsCard.module.css";
import { HotelImage } from "./HotelImage";

// const details = {
//   cityName: "Kerala,India",
//   hotelName: "The Leela Kovalam",
//   state: "Goa",
//   country: "India",
//   rating: 4.2,
//   reviews: 223,
//   location: "Beach Road Kovalam 563465India",
//   date: "15.09.2022-10.09.2022",
//   departure: "Kochi",
// };
export const HotelDetailsCard = (props) => {
  console.log("HotelDetails card",props);
  return (
    <Grid container className={styles.hotelDetailBox}>
      <Grid container>
        <Grid item className={styles.hotelImage}>
          <HotelImage imgLink={props.details.hotel_profile_picture} />
        </Grid>
        <Grid item className={styles.detailsDiv}>
          <Grid container>
            <Grid item>
              <CityDetails item={props.details} />
            </Grid>
            <Grid item>
              <Facility
                details={props.details}
                cityName={props.details.city}
                rate={props.details.economy_room_rate}
                capacity={"For Two"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
