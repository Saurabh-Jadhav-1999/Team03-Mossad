import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import styles from "./Facility.module.css";
import AirplanemodeActiveSharpIcon from "@mui/icons-material/AirplanemodeActiveSharp";
import RssFeedSharpIcon from "@mui/icons-material/RssFeedSharp";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

import { Stack } from "@mui/system";
const Facility = (props) => {
  return (
    <Box className={styles.facilityDiv}>
      <Typography className={styles.iconDiv}>
        <AirplanemodeActiveSharpIcon className={styles.icon} />
        Departure from {props.details.departure}
      </Typography>
      <Stack spacing={20}
        direction="row">
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
            <Typography className={styles.capacity} sx={{fontSize:'10px'}}>
              {props.capacity}
            </Typography>
          </Button>
          <Button className={styles.btnBook}>Book Now</Button>
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
