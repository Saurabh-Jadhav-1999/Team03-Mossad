import * as React from 'react';
import arrow from "./../../assets/images/ArrowImg.png"
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import styles from './DateSelector.module.css'
import { Box } from '@mui/material';
import moment from 'moment/moment';
import { useEffect } from 'react';

export default function DateSelector() {
  const [dateValues, setDateValues] = React.useState([null, null]);

  const dateValueHandler = (newValue) => {

    if (newValue[0] != null && newValue[1] != null) {
      const checkInDateValue = moment(new Date(newValue[0])).format("YYYY-MM-DD");
      const checkOutDateValue = moment(new Date(newValue[1])).format("YYYY-MM-DD");

      setDateValues([checkInDateValue, checkOutDateValue])

      // console.log("Check-In Date: ", checkInDateValue);
      // console.log("Check-Out Date: ", checkOutDateValue);
    }
  }

  useEffect(() => {
    console.log(dateValues);
  }, [dateValues])


  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Check-in', end: 'Check-out' }}

    >
      <DateRangePicker
        value={dateValues}
        onChange={dateValueHandler}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField className={styles.dateInp} {...startProps} />
            {/* <Box className={styles.arrow} src={arrow} component="img"  style={{ zIndex: 99 }}/> */}
            <Box className={styles.arrow} component="img" style={{ zIndex: 99 }} />

            <TextField className={styles.dateInp} {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}


