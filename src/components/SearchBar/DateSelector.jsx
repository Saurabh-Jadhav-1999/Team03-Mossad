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
// import
import moment from "moment";
export default function DateSelector() {
  const cIn = useSelector((state) => state.search.checkIn);
  // console.log(cIn, "useSelector checkin");
  const cOut = useSelector((state) => state.search.checkOut);
  // console.log(cOut, "useSelector checkout");
  let date = [];
  const dispatch = useDispatch();
  const [value, setValue] = React.useState([null, null]);
  useEffect(() => {
    date = value;
    // console.log(cIn, "check in from daterange picker");
    // console.log(cOut, "checkout from daterange picker");
  }, [value, cIn, cOut]);
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

          if (newValue[0] != null && newValue[1] != null) {
            const checkInDateValue = moment(new Date(newValue[0])).format(
              "YYYY-MM-DD"
            );
            const checkOutDateValue = moment(new Date(newValue[1])).format(
              "YYYY-MM-DD"
            );

            dispatch(setCheckIn(checkInDateValue), () => {});
            dispatch(setCheckOut(checkOutDateValue), () => {});
            console.log("Check-In Date: ", checkInDateValue);
            console.log("Check-Out Date: ", checkOutDateValue);
          }
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField
              value={value}
              className={styles.dateInp}
              {...startProps}
              onChange={(e) => {
                // console.log(value,"date value from state of compoenet")
                // dispatch(setCheckIn(value));
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
              value={value}
              onChange={(e) => {
                // console.log(value,"date value from state of compoenet")
                // dispatch(setCheckOut({ location: e.target.value }));
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
