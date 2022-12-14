import { Typography } from "@material-ui/core";
import { Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import React from "react";
import styles from "./SuggestedHotels.module.css";

export const SuggestedHotelCard = (props) => {
  // console.log("Card",props);
  return (
    <Grid item lg={3}>
      <Paper className={styles.cardContainer}>
        <img src={props.details.hotel_profile_picture} alt="" />
        <Box className={styles.ratingDiv}>
          <StarOutlinedIcon className={styles.starIcon} />

          {props.details.review === undefined && (
            <Typography component={"h4"}>
              {props.details.average_rating}/5 Rating
            </Typography>
          )}
          {props.details?.review && (
            <>
              <Typography component={"h4"}>
                {props.details.average_rating}
              </Typography>
              <Typography component={"h5"}>({props.details.review})</Typography>
            </>
          )}
        </Box>
        <Typography component={"h2"}>
          {props.details.hotel_name}
          <Button className={styles.basePrice}>
            ${props.details.base_price}
          </Button>
        </Typography>
        <Typography component={"h3"}>
          <LocationOnOutlinedIcon className={styles.icon} />
          {props.details.hotel_city},{props.details.hotel_state}
        </Typography>
        {props.details?.available_rooms && (
          <Typography component={"h3"}>
            <BusinessOutlinedIcon className={styles.icon} />
            Rooms Available {props.details.available_rooms},
          </Typography>
        )}
      </Paper>
    </Grid>
  );
};
