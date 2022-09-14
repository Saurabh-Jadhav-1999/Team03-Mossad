import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./CityDetails.module.css";
import iconStyles from "./Facility.module.css";
import StarIcon from "@mui/icons-material/Star";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import { Stack } from "@mui/material";
import moment from "moment/moment";

const CityDetails = (props) => {

  const dateFormat = (date) => {
    return moment(new Date(date)).format('DD/MM/YYYY')
  }
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
      <Stack spacing={2} justifyContent="center" alignContent="center" direction={'row'}>
        <Typography component={"div"} className={iconStyles.iconDiv}>
          <Typography component={"div"}>
            <StarIcon className={styles.starIcon} />
          </Typography>
          <Typography className={styles.boldRating} component="div">
            {props.item.rating}
          </Typography>
          <Typography className={styles.total_reviews}>({props.item.total_reviews} reviews)</Typography>
        </Typography>
      </Stack>

      <Grid container>
        <Grid item xl={6} className={iconStyles.iconDiv}>
          <LocationOnTwoToneIcon className={styles.icon} />
          {props.item.address}

          {/* {props.item.location} */}
        </Grid>
        <Grid item xl={6} className={iconStyles.iconDiv}>
          <DateRangeOutlinedIcon className={styles.icon} />
          {dateFormat(props.checkInDate)} - {dateFormat(props.checkOutDate)}
        </Grid>
      </Grid>
    </Box >
  );
};

export default CityDetails;
