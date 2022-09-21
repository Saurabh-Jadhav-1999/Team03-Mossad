import { Box, Typography } from "@material-ui/core";
import { Stack } from "@mui/system";
import React from "react";
import styles from "./HotelFeatures.module.css";
import WifiIcon from "@mui/icons-material/Wifi";
import PoolIcon from "@mui/icons-material/Pool";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import CoronavirusOutlinedIcon from "@mui/icons-material/CoronavirusOutlined";
import { useSelector } from "react-redux";

const HotelFeatures = () => {
  const featuresList = useSelector(state => state.getHotelDetails.hotelDetails.hotelfacalities)

  const features = featuresList[0];

  return (
    <Box >
      <Typography className={styles.heading}>Hotel Features</Typography>
      <Stack direction={"row"} spacing={1} >
        <Typography component={"span"} className={styles.features} >
          <WifiIcon className={styles.iconStyle} /> Wi-fi
        </Typography>
        <Typography component={"span"} className={styles.features}>
          <PoolIcon className={styles.iconStyle} /> Infinity Pool
        </Typography>
        <Typography component={"span"} className={styles.features}>
          <GolfCourseIcon className={styles.iconStyle} /> Golf Course
        </Typography>
        <Typography component={"span"} className={styles.features}>
          <AirportShuttleOutlinedIcon className={styles.iconStyle} /> Airport
          Shuttle
        </Typography>
        <Typography component={"span"} className={styles.features}>
          <LocalHospitalOutlinedIcon className={styles.iconStyle} /> On Call
          Doctor
        </Typography>
        <Typography component={"span"} className={styles.features}>
          <CoronavirusOutlinedIcon className={styles.iconStyle} /> Covid safety
          Protocols
        </Typography>
      </Stack>
    </Box>
  );
};

export default HotelFeatures;
