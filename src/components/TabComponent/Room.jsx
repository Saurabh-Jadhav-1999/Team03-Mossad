import { Box, Paper, Typography } from "@material-ui/core";
import styles from "./Room.module.css";
import React from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { Grid } from "@mui/material";
import { setRoomType,setRoomTypeCost } from "../../slices/bookNowSlice";
import {useSelector,useDispatch} from "react-redux"
const Room = (props) => {
  const dispatch=useDispatch();
  const roomtype=useSelector(state=>state.bookNow.room_type);
  const roomtypecost=useSelector(state=>state.bookNow.room_type_cost);
  return (
    <Paper elevation={3} className={styles.roomBox} component="div">
      <Box className={styles.leftDiv}>
        <Typography className={styles.boldHeading}>{props.roomType}</Typography>
        <Typography className={styles.offerCondition} component={"p"}>
          Offer Conditions
        </Typography>
        <Grid container direction={"column"}>
          {props.offers.map((offer) => (
            <Grid item className={styles.offerDiv} key={offer}>
              <CheckOutlinedIcon className={styles.checkedIcon}  />
              {offer}
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={styles.rightDiv}>
        <Typography className={styles.boldHeading} component="span">
          ${props.offerRate}
          <Typography className={styles.offer} component="span">
            /night
          </Typography>
        </Typography> 
         <Typography component={"span"} className={styles.saveAmt}>
          Save ${props.basePrice - props.offerRate}
        </Typography> 
         <Typography component={"span"} className={styles.offerCondition}>
          Amount before discount ${props.basePrice}/night
        </Typography>
        <button type='button' className={styles.selectBtn} 
        onClick={(e)=>{
          if(roomtype!==props.roomType&&roomtypecost!==props.basePrice){
           dispatch(setRoomType(props.roomType));
           dispatch(setRoomTypeCost(props.basePrice));
          }
          
 
         }}
        >select </button>
      </Box>
    </Paper>
  );
};

export default Room;
