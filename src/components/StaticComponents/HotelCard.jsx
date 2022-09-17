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
          src="https://www.bing.com/th?id=OIP.bYImvu-5uLtP9vVXDZKq1QHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
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
