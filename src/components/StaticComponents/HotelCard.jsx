import { Typography } from "@material-ui/core";
import { Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import React from "react";
import styles from './SuggestedHotels.module.css'

export const HotelCard = (props) => {
//   console.log(props);
  return (
    <Grid item lg={3}>
      <Paper className={styles.cardContainer}>
        <img
          src="https://pixabay.com/get/g8d6a99d6bfe9493e4137b3f7bac865e5245b0ec2797f0f835ff09a59b2ea9133b2b5a9b8afaf569c364f0c2a0a09c1c8420b465745c84d3b620a41e5d09182f4_640.jpg"
          alt=""
        />
        <Box className={styles.ratingDiv}>
            <StarOutlinedIcon className={styles.starIcon}/>
          <Typography component={'h4'}>{props.details.rating}</Typography>
          <Typography component={'h5'}>({props.details.review})</Typography>
        </Box>
        <Typography component={'h2'}>
            {props.details.hotelName}    
             <Button className={styles.basePrice}>
                ${props.details.basePrice}
            </Button>
        </Typography>
        <Typography component={'h3'}>
                {props.details.city},{props.details.state}
            </Typography>
        
        <Box className={styles.locationDiv}>
            <LocationOnOutlinedIcon className={styles.locationIcon} />
            {props.details.address}
        </Box>
      </Paper>
    </Grid>
  );
};
