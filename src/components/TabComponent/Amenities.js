import { Box, Grid } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import style from "./Amenities.module.css";
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
    <Box>
      <Typography className={style.heading}>Amenities</Typography>
      <Grid container>
        <Grid item xl={4}  >
          <Typography className={style.aminitiesRow}>
            <HotelOutlinedIcon className={style.iconStyle} />
            Kins bed
          </Typography>
          <Typography className={style.aminitiesRow}>
            <WineBarOutlinedIcon className={style.iconStyle} />
            Complementary drink
          </Typography>
          <Typography className={style.aminitiesRow}>
            <LiveTvOutlinedIcon className={style.iconStyle} />
            Smart TV
          </Typography>
          <Typography className={style.aminitiesRow}>
            <LocalMallOutlinedIcon className={style.iconStyle} />
            Duty free
          </Typography>
        </Grid>
        <Grid item xl={4} >
          <Typography className={style.aminitiesRow}>
            <BathtubOutlinedIcon className={style.iconStyle} />
            Bath tub
          </Typography>
          <Typography className={style.aminitiesRow}>
            <BabyChangingStationOutlinedIcon className={style.iconStyle} />
            Baby changing station
          </Typography>
          <Typography className={style.aminitiesRow}>
            <LocalLaundryServiceOutlinedIcon className={style.iconStyle} />
            Laundry Service
          </Typography>
          <Typography className={style.aminitiesRow}>
            <RestaurantOutlinedIcon className={style.iconStyle} />
            Breakfast included
          </Typography>
        </Grid>
        <Grid item xl={4} >
          <Typography className={style.aminitiesRow}>
            <FireExtinguisherOutlinedIcon className={style.iconStyle} />
            Fire Extinguidher
          </Typography>
          <Typography className={style.aminitiesRow}>
            <WineBarOutlinedIcon className={style.iconStyle} />
            Room Service
          </Typography>
          <Typography className={style.aminitiesRow}>
            <RoomServiceOutlinedIcon className={style.iconStyle} />
            Deck
          </Typography>
          <Typography className={style.aminitiesRow}>
            <CoronavirusOutlinedIcon className={style.iconStyle} />
            Covid safety kit
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Amenities;

// <Typography className={style.aminitiesRow}>
//             <BathtubOutlinedIcon className={style.iconStyle} />
//             Kins bed
//           </Typography>
