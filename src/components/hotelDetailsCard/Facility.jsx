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
  const routeChange = () =>{ 
    let path = `/hotel-details`; 
    navigate(path);
  }

  const [idd,setIdd]=useState();  // function navi(path) {
  //   navigate("/DetailList");
  // }
  // console.log(props.details,"props from facility");
  const hId = useSelector((state) => state.getHotelDetails.hotel_id);

  const city_name = useSelector((state) => state.getHotelDetails.city_name);
  console.log(hId, "useSelector hid");
  console.log(city_name, "useSelector city_name");
  const dispatch = useDispatch();
  return (
    <Box className={styles.facilityDiv}>
      <Typography className={styles.iconDiv}>
        <AirplanemodeActiveSharpIcon className={styles.icon} />
        Departure from {props.details.departure}
      </Typography>
      <Stack spacing={20} direction="row">
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
              Visite Hotel Website
            </Typography>
            <Typography className={styles.iconDiv}>
              <SubjectOutlinedIcon className={styles.icon} />
              Taking Safety Measures
            </Typography>
          </Stack>
        </Grid>
        <Grid item xl={6} className={styles.btnDiv}>
          <Button className={styles.btnPrice}>
            <Typography component={"span"}>
              <AttachMoneyOutlinedIcon />
              {props.rate}
            </Typography>
            <Typography className={styles.capacity}>
              {props.capacity}
            </Typography>
          </Button>
          {/* {console.log(props.details.hotel_id,"hotel id from button");
              console.log(props.details.city_name,"city name from button")} */}
          <Link
            to="/hotel-details"
            className={styles.btnBook}
            onClick={() => {
              // let hid
              setIdd(props.details.hotel_id);
              dispatch(setHotelId(idd));
              dispatch(setCityName(props.details.city));
              dispatch(fetchHotelDetails({ idd, city_name }));
              // routeChange();
            }}
          >
            Book Now
          </Link>
          {/* <Link to="/" className={styles.btnBook}>Book Now</Link> */}
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
