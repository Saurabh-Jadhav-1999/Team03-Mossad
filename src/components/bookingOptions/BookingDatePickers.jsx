import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { setCheckIn, setCheckOut } from '../../slices/searchSlice';

export const BookingDatePickers = (props) => {
    const [value, setValue] = React.useState(new Date());
    const dispatch = useDispatch();

    const handleChange = (newValue) => {
        setValue(newValue);
        if (newValue != null && props.checkin == "1") {
            const checkInDateValue = moment(new Date(newValue)).format(
                "YYYY-MM-DD"
            );
            dispatch(setCheckIn(checkInDateValue), () => { });
        }
        else {
            const checkOutDateValue = moment(new Date(newValue)).format(
                "YYYY-MM-DD"
            );
            dispatch(setCheckOut(checkOutDateValue), () => { });
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                inputFormat="YYYY/MM/DD"
                value={props.date}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                minDate={new Date()}
            />
        </LocalizationProvider>
    );
}