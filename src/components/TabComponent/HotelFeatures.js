import { Box, Typography } from "@material-ui/core";
import { Stack } from "@mui/system";
import React from "react";
import style from "./HotelFeatures.module.css";
import WifiIcon from "@mui/icons-material/Wifi";
import PoolIcon from "@mui/icons-material/Pool";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import CoronavirusOutlinedIcon from "@mui/icons-material/CoronavirusOutlined";

const HotelFeatures = () => {
  return (
    <Box>
      <Typography className={style.heading}>Hotel Features</Typography>
      <Stack direction={"row"} spacing={2}>
        <Typography component={"span"}>
          <WifiIcon className={style.iconStyle} /> Wi-fi
        </Typography>
        <Typography component={"span"}>
          <PoolIcon className={style.iconStyle} /> Infinity Pool
        </Typography>
        <Typography component={"span"}>
          <GolfCourseIcon className={style.iconStyle} /> Golf Course
        </Typography>
        <Typography component={"span"}>
          <AirportShuttleOutlinedIcon className={style.iconStyle} /> Airport
          Shuttle
        </Typography>
        <Typography component={"span"}>
          <LocalHospitalOutlinedIcon className={style.iconStyle} /> On Call
          Doctor
        </Typography>
        <Typography component={"span"}>
          <CoronavirusOutlinedIcon className={style.iconStyle} /> Covid safety
          Protocols
        </Typography>
      </Stack>
    </Box>
  );
};

export default HotelFeatures;
