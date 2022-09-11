import * as React from "react";
import { useEffect } from "react";
import arrow from "./../../assets/images/ArrowImg.png";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import styles from "./DateSelector.module.css";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setCheckIn, setCheckOut } from "../../slices/searchSlice";

import moment from "moment";
export default function DateSelector() {
  let formattedDate = "";
  // useEffect(() => {
  //   return () => {
  //     let date = value; // value from your state
  //      formattedDate = moment(date).format('DD/MM/YYYY');
  //   };
  // }, [value])

  const dispatch = useDispatch();
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: "Check-in", end: "Check-out" }}
    >
      <DateRangePicker
        clearable
        value={value}
        format="MM/dd/yyyy"
        onChange={(newValue) => {
          setValue(newValue);
          // console.log(typeof date);

          let dateMDY = `${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`;
          // let date = value; // value from your state
          // formattedDate = moment(date).format("DD/MM/YYYY");
          alert(dateMDY);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField
              className={styles.dateInp}
              {...startProps}
              onChange={(e) => {
                dispatch(setCheckIn({ checkIn: e.target.value }));
              }}
            />
            <Box
              className={styles.arrow}
              src={arrow}
              component="img"
              style={{ zIndex: 99 }}
            />
            {/* <Box className={styles.arrow}  component="img"  style={{ zIndex: 99 }}/> */}

            <TextField
              onChange={(e) => {
                dispatch(setCheckOut({ location: e.target.value }));
              }}
              className={styles.dateInp}
              {...endProps}
            />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
