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
    return moment(new Date(date)).format("DD/MM/YYYY");
  };
  return (
    <Box className={styles.cityDiv}>
      <Typography component="h1">
        {props.item.state},{props.item.country}
      </Typography>
      <Typography component="h3">
        {props.item.hotel_name}
      </Typography>
      <Stack
        spacing={2}
        justifyContent="center"
        alignContent="center"
        direction={"row"}
      >
        <Typography component={"div"} className={iconStyles.iconDiv}>
          <StarIcon className={styles.starIcon} fontSize="xsmall" />
          <Typography className={styles.boldRating} component="span">
            {props.item.rating}
          </Typography>
          <Typography className={styles.total_reviews}>
            ({props.item.total_reviews} reviews)
          </Typography>
        </Typography>
      </Stack>

      <Grid container>
      
        <Grid item xl={5} className={iconStyles.iconDiv}>
          <LocationOnTwoToneIcon className={iconStyles.icon} />
          {props.item.address}
        </Grid>
        <Grid item xl={5} className={iconStyles.iconDiv}>
          <DateRangeOutlinedIcon className={iconStyles.icon} />
          {dateFormat(props.checkInDate)} - {dateFormat(props.checkOutDate)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CityDetails;
