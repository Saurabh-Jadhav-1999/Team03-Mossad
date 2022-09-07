import * as React from 'react';
import arrow from "./../../assets/images/ArrowImg.png"
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import styles from './DateSelector.module.css'
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
            {/* <Box> <SyncAltOutlinedIcon /> </Box> */}
            <img className="styles.arrow" src={arrow} alt="pic not found" />
            <TextField className={styles.dateInp} {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}


