import * as React from 'react';
import arrow from "./../../assets/images/ArrowImg.png"
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import styles from './DateSelector.module.css'
import { Box } from '@mui/material';
export default function DateSelector() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Check-in', end: 'Check-out' }}

    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField className={styles.dateInp} {...startProps} />
            {/* <Box className={styles.arrow} src={arrow} component="img"  style={{ zIndex: 99 }}/> */}
            <Box className={styles.arrow}  component="img"  style={{ zIndex: 99 }}/>

            <TextField className={styles.dateInp} {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}


