import { Box, Paper, Typography } from "@material-ui/core";
import styles from "./Room.module.css";
import React from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { Grid, Button } from "@mui/material";
import { setDiffBetDays } from "../../slices/searchSlice";
import { setRoomType, setRoomTypeCost } from "../../slices/bookNowSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Room = (props) => {
  const dispatch = useDispatch();
  const checkin = useSelector((state) => state.search.checkIn);
  const checkout = useSelector((state) => state.search.checkOut);
  const roomtype = useSelector((state) => state.bookNow.room_type);
  const roomtypecost = useSelector((state) => state.bookNow.room_type_cost);
  const date1 = new Date(checkin);
  const date2 = new Date(checkout);
  let OfferRate = (props.hike == true) ? props.offerRate + (props.offerRate * 0.2) : props.offerRate;
  let BasePrice = (props.hike == true) ? props.basePrice + (props.basePrice * 0.2) : props.basePrice;
  /*Calculating the difference between the checkin and checkout*/
  const Difference_In_Time = date2.getTime() - date1.getTime();

  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  dispatch(setDiffBetDays(parseInt(Difference_In_Days)));

  return (
    <Paper elevation={0} className={styles.roomBox} component="div">
      <Box className={styles.leftDiv}>
        <Typography className={styles.boldHeading}>{props.name}</Typography>
        <Typography className={styles.offerCondition} component={"p"}>
          Offer Conditions
        </Typography>
        <Grid
          container
          className={styles.serviceDiv}
          rowSpacing={1}
          columnSpacing={2}
          direction={"column"}
          lg={4}
        >
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

          ${OfferRate}
          <Typography className={styles.offer} component="span">
            /night
          </Typography>
        </Typography>
        {/* If discount is not 0 then only render the elements */
        props.discount !==0 &&props.basePrice!==undefined ? (
          <>
          <Typography component={"span"} className={styles.saveAmt}>
            {
              (props.offerRate) == 0 ? <p>0</p> : (<>
                <button
                  type="button"
                  disabled
                  className={`${styles.labelDiscountPercentage}`}
                >
                  10% OFF
                </button>
                <p>Save ${BasePrice - OfferRate}</p></>)}
          </Typography>
          <Typography component={"span"} className={styles.offerCondition}>
            {

            }
            Amount before discount ${BasePrice}/night
          </Typography>
        </>
        ) :( <></>) }

        <button
          type="button"
          className={styles.selectBtn}
          onClick={(e) => {
            const bp = OfferRate;
            if (
              roomtype !== props.roomType &&
              roomtypecost !== OfferRate
            ) {
              if (checkin && checkout !== "") {
                dispatch(setRoomType(props.roomType));
                dispatch(setRoomTypeCost({ bp, Difference_In_Days }))
              }
              else {
                toast.error("Please select CheckIn and CheckOut Dates");
              }
            }
          }}
        >
          Select
        </button>
      </Box>
    </Paper>
  );
};

export default Room;
