import { Box, Paper, Typography } from "@material-ui/core";
import styles from "./Room.module.css";
import React from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { Grid } from "@mui/material";
import { setDiffBetDays } from "../../slices/searchSlice";
import { setRoomType, setRoomTypeCost } from "../../slices/bookNowSlice";
import { useSelector, useDispatch } from "react-redux";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Room = (props) => {
  const dispatch = useDispatch();
  const checkin = useSelector((state) => state.search.checkIn);
  const checkout = useSelector((state) => state.search.checkOut);
  const roomtype = useSelector((state) => state.bookNow.room_type);
  const roomtypecost = useSelector((state) => state.bookNow.room_type_cost);
  const date1 = new Date(checkin);
  const date2 = new Date(checkout);
  /*Calculating the difference between the checkin and checkout*/
  const Difference_In_Time = date2.getTime() - date1.getTime();

  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  dispatch(setDiffBetDays(parseInt(Difference_In_Days)));

  return (
    <Paper elevation={3} className={styles.roomBox} component="div">
      <Box className={styles.leftDiv}>
        <Typography className={styles.boldHeading}>{props.name}</Typography>
        <Typography className={styles.offerCondition} component={"p"}>
          Offer Conditions
        </Typography>
        <Grid container direction={"column"}>
          {props.offers.map((offer) => (
            <Grid item className={styles.offerDiv} key={offer}>
              <CheckOutlinedIcon className={styles.checkedIcon} />
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
        {/* If discount is not 0 then only render the elements */
        props.discount !==0 &&props.basePrice!==undefined ? (
          <>
            <Typography component={"span"} className={styles.saveAmt}>
             {
             (props.offerRate)==0?<p>0</p>:(<p>Save ${props.basePrice - props.offerRate}</p>)}
            </Typography>
            <Typography component={"span"} className={styles.offerCondition}>
              Amount before discount ${props.basePrice}/night
            </Typography>
          </>
        ) :( <></>) }

        <button
          type="button"
          className={styles.selectBtn}
          onClick={(e) => {
            const bp = props.offerRate;
            if (
              roomtype !== props.roomType &&
              roomtypecost !== props.offerRate
            ) {
              if(checkin&&checkout!==""){
              dispatch(setRoomType(props.roomType));
              dispatch(setRoomTypeCost({ bp, Difference_In_Days }))}
             else{
              toast.error("Please select CheckIn and CheckOut Dates");
             }
            }
          }}
        >
          
          select{" "}
        </button>
      </Box>
    </Paper>
  );
};

export default Room;
