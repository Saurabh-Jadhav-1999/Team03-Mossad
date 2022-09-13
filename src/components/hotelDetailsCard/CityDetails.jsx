import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./CityDetails.module.css";
import iconStyles from "./Facility.module.css";
import StarIcon from "@mui/icons-material/Star";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
const CityDetails = (props) => {

  return (
    <Box className={styles.cityDiv}>
      <Typography className={styles.cityName} component="h1">
        {props.item.state},{props.item.country}
        {/* {props.item.cityName} */}
      </Typography>
      <Typography className={styles.cityName} component="h3">
        {props.item.hotel_name}

        {/* {props.item.hotelName} */}
      </Typography>
      <Typography className={iconStyles.iconDiv}>
        <Typography component={"span"}>
          <StarIcon className={styles.starIcon} />
        </Typography>
        <Typography className={styles.boldRating} component="span">
          {/* {props.item.hotelreviews.rating} */}
          {props.item.rating}
        </Typography>
        {/* ({props.details.hotelreview[1].reviews} reviews) */}


        {/* (
        {props.item.reviews} reviews) */}
      </Typography>
      <Grid container>
        <Grid item xl={6} className={iconStyles.iconDiv}>
          <LocationOnTwoToneIcon className={styles.icon} />
          {props.item.address}

          {/* {props.item.location} */}
        </Grid>
        <Grid item xl={6} className={iconStyles.iconDiv}>
          <DateRangeOutlinedIcon className={styles.icon} />
          {props.item.date}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CityDetails;
