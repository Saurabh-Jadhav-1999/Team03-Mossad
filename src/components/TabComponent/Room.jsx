import { Box, Button, Paper, Typography } from "@material-ui/core";
import style from "./Room.module.css";
import React from "react";
import { Stack } from "@mui/system";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
const Room = (props) => {
  return (
    <Paper elevation={3} className={style.roomBox}>
      <Box className={style.leftDiv}>
        <Typography className={style.boldHeading}>{props.roomType}</Typography>
        <Typography className={style.offer} component={"p"}>
          Offer Conditions
        </Typography>
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
          <AttachMoneyOutlinedIcon />
          {props.basePrice - props.offerRate}
        </Typography>
        <Typography component={"span"} className={style.offer}>
          Amount before discount <AttachMoneyOutlinedIcon size={10} />
          {props.basePrice}/night
        </Typography>
        <Button className={style.selectBtn}>Select</Button>
      </Box>
    </Paper>
  );
};

export default Room;
