import { Box, Typography } from "@material-ui/core";
import styles from "./SuggestedHotels.module.css";
import React from "react";
import { Grid } from "@mui/material";
import { SuggestedHotelCard } from "./HotelCard";
import { useSelector } from "react-redux";

export const SuggestedHotels = () => {

  const suggestedHotelList = useSelector(
    (state) => state.suggestedHotels.suggestedHotels
  );

  return (
    <Box className={styles.suggestedHotelsMainBox}>
      <Typography component={"h1"}>Hotels you might like</Typography>
      <Grid container spacing={3}>
        {suggestedHotelList.hotels.map((item => <SuggestedHotelCard details={item} />))}
      </Grid>
    </Box>
  );
};
