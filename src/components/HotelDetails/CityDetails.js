import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import style from "./CityDetails.module.css";
import iconStyles from "./Facility.module.css";
import StarIcon from "@mui/icons-material/Star";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
const CityDetails = (props) => {
  return (
    <Box className={style.cityDiv}>
      <Typography className={style.cityName} component="h1">
        {props.details.cityName}
      </Typography>
      <Typography className={style.cityName} component="h3">
        {props.details.hotelName}
      </Typography>
      <Typography className={iconStyles.iconDiv}>
        <Typography component={"span"} >
          <StarIcon className={style.starIcon}/>
        </Typography>
        <Typography className={style.boldRating} component='span'>
          {props.details.rating}
          </Typography>
        ({props.details.reviews} reviews)
      </Typography>
      <Grid container>
        <Grid item xl={6} className={iconStyles.iconDiv}>
          <LocationOnTwoToneIcon className={style.icon} />
          {props.details.location}
        </Grid>
        <Grid item xl={6} className={iconStyles.iconDiv}>
          <DateRangeOutlinedIcon className={style.icon} />
          {props.details.date}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CityDetails;
