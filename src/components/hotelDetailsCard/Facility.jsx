import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import styles from "./Facility.module.css";
import AirplanemodeActiveSharpIcon from "@mui/icons-material/AirplanemodeActiveSharp";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { Link, useNavigate, Navigate, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Stack } from "@mui/system";
import { useHistory } from "react-router-dom";
import {
  setHotelId,
  setCityName,
  fetchHotelDetails,
} from "../../slices/getHotelDetailsSlice";

const Facility = (props) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/hotel-details`;
    navigate(path);
  };

  const bookNowHandler = async (callbackFunc) => {
    await setIdd(props.details.hotel_id);
    await dispatch(setHotelId(idd));
    await dispatch(setCityName(props.details.city));
    // dispatch(fetchHotelDetails({ idd, city_name }));
    // var data=hotellist.hasOwnProperty(`hotel_id:${idd}`);
    await callbackFunc();
  };

  const bookNowBtnHandler = async () => {
    var data = hotellist.filter((val) => {
      if (val.hotel_id === idd) return val;
    });
    console.log(data, "filter useSelector hotellist from facility");
  };

  const [idd, setIdd] = useState(); // function navi(path) {
  //   navigate("/DetailList");
  // }
  // console.log(props.details,"props from facility");
  const hId = useSelector((state) => state.getHotelDetails.hotel_id);

  const city_name = useSelector((state) => state.getHotelDetails.city_name);

  const hotellist = useSelector((state) => state.search.hotellist);

  const dispatch = useDispatch();
  return (
    <Box className={styles.facilityDiv}>
      <Typography className={styles.iconDiv}>
        <AirplanemodeActiveSharpIcon className={styles.icon} />
        Departure from {props.details.departure}
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
            onClick={() => {
              bookNowHandler(bookNowBtnHandler);
            }}
          >
            Book Now
          </button>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Facility;

// <Button
// startIcon={
//   <AttachMoneyOutlinedIcon sx={{ color: "black" }}>
//     {props.rate}
//   </AttachMoneyOutlinedIcon>
// }
// >
// <Typography>{props.capacity}</Typography>
// </Button>
// <Button variant="contained">Book Now</Button>
