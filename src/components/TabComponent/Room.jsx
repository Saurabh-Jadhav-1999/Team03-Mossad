import { Box, Button, Paper, Typography } from "@material-ui/core";
import style from "./Room.module.css";
import React from "react";
import { Stack } from "@mui/system";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { Grid } from "@mui/material";
const Room = (props) => {
  return (
    <Paper elevation={3} className={style.roomBox} component="div">
      <Box className={style.leftDiv}>
        <Typography className={style.boldHeading}>{props.roomType}</Typography>
        <Typography className={style.offer} component={"p"}>
          Offer Conditions
        </Typography>
        <Grid container direction={"column"}>
          {props.offers.map((offer) => (
            <Grid item className={style.offerDiv} key={offer}>
              <CheckOutlinedIcon className={style.checkedIcon} />
              {offer}
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className={style.rightDiv}>
        <Typography className={style.boldHeading} component="span">
          <AttachMoneyOutlinedIcon />
          {props.offerRate}
          <Typography className={style.offer} component="span">
            /night
          </Typography>
        </Typography>
        <Typography component={"span"} className={style.saveAmt}>
          Save
          <AttachMoneyOutlinedIcon sx={{ fontSize: "1.3rem" }} />
          {props.basePrice - props.offerRate}
        </Typography>
        <Typography component={"span"} className={style.offer}>
          Amount before discount{" "}
          <AttachMoneyOutlinedIcon sx={{ fontSize: "1.3rem" }} />
          {props.basePrice}/night
        </Typography>
        <Button className={style.selectBtn}>Select</Button>
      </Box>
    </Paper>
  );
};

export default Room;
