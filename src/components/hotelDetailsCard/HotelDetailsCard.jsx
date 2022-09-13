import { Box, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CityDetails from "./CityDetails";
import Facility from "./Facility";
import styles from "./HotelDetailsCard.module.css";
import { HotelImage } from "./HotelImage";

export const HotelDetailsCard = (props) => {

  const checkInDate = useSelector((state)=> state.search.checkIn)
  const checkOutDate = useSelector((state)=> state.search.checkOut)

  return (
    <Grid container className={styles.hotelDetailBox}>
      <Grid container>
        <Grid item className={styles.hotelImage}>
          <HotelImage item={props.details} />
        </Grid>
        <Grid item className={styles.detailsDiv}>
          <Grid container>
            <Grid item>
              <CityDetails item={props.details} checkInDate={checkInDate} checkOutDate={checkOutDate}/>
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
