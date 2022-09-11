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
        {props.item.state},
        {props.item.country}
      </Typography>
      <Typography className={style.cityName} component="h3">
        {props.item.hotel_name}
      </Typography>
      <Typography className={iconStyles.iconDiv}>
        <Typography component={"span"} >
          <StarIcon className={style.starIcon}/>
        </Typography>
        <Typography className={style.boldRating} component='span'>
          {/* {props.item.hotelreviews.rating} */}
          </Typography>
        {/* ({props.details.hotelreview[1].reviews} reviews) */}
      </Typography>
      <Grid container>
        <Grid item xl={6} className={iconStyles.iconDiv}>
          <LocationOnTwoToneIcon className={style.icon} />
          {props.item.address}
        </Grid>
        <Grid item xl={6} className={iconStyles.iconDiv}>
          <DateRangeOutlinedIcon className={style.icon} />
          {/* {props.details.date} */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CityDetails;
