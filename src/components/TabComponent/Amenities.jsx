import { Box, Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import styles from "./Amenities.module.css";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import WineBarOutlinedIcon from "@mui/icons-material/WineBarOutlined";
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import BabyChangingStationOutlinedIcon from '@mui/icons-material/BabyChangingStationOutlined';
import LocalLaundryServiceOutlinedIcon from '@mui/icons-material/LocalLaundryServiceOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import FireExtinguisherOutlinedIcon from '@mui/icons-material/FireExtinguisherOutlined';
import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';

const Amenities = () => {
  return (
    <Box className={styles.amenitiesDiv}>
      <Typography className={styles.heading}>Amenities</Typography>
      <Grid container>
        <Grid item xl={4}  >
          <Typography className={styles.aminitiesRow}>
            <HotelOutlinedIcon className={styles.iconStyle} />
            Kins bed
          </Typography>
          <Typography className={styles.aminitiesRow}>
            <WineBarOutlinedIcon className={styles.iconStyle} />
            Complementary drink
          </Typography>
          <Typography className={styles.aminitiesRow}>
            <LiveTvOutlinedIcon className={styles.iconStyle} />
            Smart TV
          </Typography>
          <Typography className={styles.aminitiesRow}>
            <LocalMallOutlinedIcon className={styles.iconStyle} />
            Duty free
          </Typography>
        </Grid>
        <Grid item xl={4} >
          <Typography className={styles.aminitiesRow}>
            <BathtubOutlinedIcon className={styles.iconStyle} />
            Bath tub
          </Typography>
          <Typography className={styles.aminitiesRow}>
            <BabyChangingStationOutlinedIcon className={styles.iconStyle} />
            Baby changing station
          </Typography>
          <Typography className={styles.aminitiesRow}>
            <LocalLaundryServiceOutlinedIcon className={styles.iconStyle} />
            Laundry Service
          </Typography>
          <Typography className={styles.aminitiesRow}>
            <RestaurantOutlinedIcon className={styles.iconStyle} />
            Breakfast included
          </Typography>
        </Grid>
        <Grid item xl={4} >
          <Typography className={styles.aminitiesRow}>
            <FireExtinguisherOutlinedIcon className={styles.iconStyle} />
            Fire Extinguidher
          </Typography>
          <Typography className={styles.aminitiesRow}>
            <WineBarOutlinedIcon className={styles.iconStyle} />
            Room Service
          </Typography>
          <Typography className={styles.aminitiesRow}>
            <RoomServiceOutlinedIcon className={styles.iconStyle} />
            Deck
          </Typography>
          <Typography className={styles.aminitiesRow}>
            <CoronavirusOutlinedIcon className={styles.iconStyle} />
            Covid safety kit
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Amenities;

// <Typography className={styles.aminitiesRow}>
//             <BathtubOutlinedIcon className={styles.iconStyle} />
//             Kins bed
//           </Typography>
