import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Facility.module.css";
import AirplanemodeActiveSharpIcon from "@mui/icons-material/AirplanemodeActiveSharp";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Stack } from "@mui/system";
import {
  setHotelId,
  setCityName
} from "../../slices/getHotelDetailsSlice";

const Facility = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(rate) {
    dispatch(setHotelId(props.details.hotel_id));
    console.log("Hotel ID: ",props.details.hotel_id)
    dispatch(setCityName(props.details.city));
    navigate(
      // `/hotel-details/?id=${props.details.hotel_id}&city_name=${props.details.city}`
      "/hotel-details/"
    );
  }

  return (
    <Box className={styles.facilityDiv}>
      <Typography className={styles.iconDiv}>
        <AirplanemodeActiveSharpIcon className={styles.icon} />
        Departure from {props.details.city}
      </Typography>
      <Stack direction="row">
        <Grid item xl={6}>
          <Stack direction={"column"}>
            <Typography className={styles.iconDiv}>
              <RssFeedSharpIcon className={styles.icon} />
              Free Wifi
            </Typography>
            <Typography className={styles.iconDiv}>
              <DirectionsCarFilledOutlinedIcon className={styles.icon} />
              Free Parking
            </Typography>
            <Typography className={styles.iconDiv}>
              <LocalOfferOutlinedIcon className={styles.icon} />
              Special Offer
            </Typography>
            <Typography className={styles.iconDiv}>
              <LanguageOutlinedIcon className={styles.icon} />
              Visit Hotel Website
            </Typography>
            <Typography className={styles.iconDiv}>
              <SubjectOutlinedIcon className={styles.icon} />
              Taking Safety Measures
            </Typography>
          </Stack>
        </Grid>
        <Grid item xl={6} className={styles.btnDiv}>
          <button type="button" className={styles.btnPrice}>
            <Typography component={"span"}>${props.rate}</Typography>

            <Typography className={styles.capacity}>
              {props.capacity}
            </Typography>
          </button>

          <button
            type="button"
            // to="/hotel-details"
            className={styles.btnBook}
            onClick={() => handleSubmit(props)}
          >
            Book Now
          </button>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Facility;

