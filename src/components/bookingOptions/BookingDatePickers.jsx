// Date Selector Component for Booking
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import { setCheckIn, setCheckOut } from '../../slices/searchSlice';
import { setLunchUsingDate } from '../../slices/bookNowSlice';
import { setDiffBetDays } from '../../slices/searchSlice';
export const BookingDatePickers = (props) => {
    const checkin=useSelector(state=>state.search.checkIn);
    const checkout=useSelector(state=>state.search.checkOut);
    const old_diff=useSelector(state=>state.search.diff);
  /*Calculating the difference between the checkin and checkout*/



    const lunch_per_person = useSelector(
        (state) => state.bookNow.lunch_per_person_per_day
      );
      let lunchstatus = 0;
      lunch_per_person != 0 ? (lunchstatus = 1) : (lunchstatus = 0);
    const dispatch = useDispatch();

    const handleChange = (newValue) => {
        if (newValue != null && props.checkin == "1") {
            const checkInDateValue = moment(new Date(newValue)).format(
                "YYYY-MM-DD"
            );
            dispatch(setCheckIn(checkInDateValue), () => { });
            if(lunchstatus==1){
                const date1 = new Date(checkInDateValue);
                const date2 = new Date(checkout);
                const Difference_In_Time = date2.getTime() - date1.getTime();
                const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                dispatch(setLunchUsingDate({old_diff,Difference_In_Days}));
                dispatch(setDiffBetDays(parseInt(Difference_In_Days)));
            }
           
        }
        else {
            const checkOutDateValue = moment(new Date(newValue)).format(
                "YYYY-MM-DD"
            );
            dispatch(setCheckOut(checkOutDateValue), () => { });
            if(lunchstatus==1){
                const date1 = new Date(checkin);
                const date2 = new Date(checkOutDateValue);
                const Difference_In_Time = date2.getTime() - date1.getTime();
                const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                dispatch(setLunchUsingDate({old_diff,Difference_In_Days}));
                dispatch(setDiffBetDays(parseInt(Difference_In_Days)));
                
               
            }
        }
    };

    return (

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                inputFormat="DD/MM/YYYY"
                value={props.date}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                minDate={props.check_out === true ? (new Date(new Date().getTime() + 86400000)) : new Date()}
            />
        </LocalizationProvider>
    );
}
