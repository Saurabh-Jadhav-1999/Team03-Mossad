import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CityDetails from "./CityDetails";
import Facility from "./Facility";
import styles from "./HotelDetailsCard.module.css";
import { HotelImage } from "./HotelImage";


export const HotelDetailsCard = (props) => {

  const checkInDate = useSelector((state) => state.search.checkIn)
  const checkOutDate = useSelector((state) => state.search.checkOut)

  return (
    <Grid container className={styles.hotelDetailBox}>
      <Grid container>
        <Grid item className={styles.hotelImage}>
          <HotelImage imgLink={props.details.hotel_profile_picture} />
        </Grid>
        <Grid item className={styles.detailsDiv}>
          <Grid container>
            <Grid item>
              <CityDetails item={props.details} checkInDate={checkInDate} checkOutDate={checkOutDate} />
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
