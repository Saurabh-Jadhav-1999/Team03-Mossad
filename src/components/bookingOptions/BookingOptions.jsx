import { Grid, Paper, Box, Typography } from "@mui/material"
import styles from "./BookingOptions.module.css"
import Button from "@mui/material/Button"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import "./BookingOptions.module.css"

export const BookingOptions = () => {
    const [date, setDate] = useState(new Date());
    const setDateHandler = (date) => setDate(date);

    return (
        <Paper elevation={10} className={styles.bookingOptionsContainer}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                className={styles.gridContainer}>
                <Grid container justifyContent="space-between" className={styles.discountPriceDetailsContainer}>
                    <Grid item className={styles.discountPriceDetailsContainer}>
                        <Typography component={'span'} className={styles.originalRoomPrice}>$720</Typography>
                        <Typography component={'span'} className={styles.labelRoomPricePerNight} paddingRight={2}>/night</Typography>
                        <Typography component={'span'} className={styles.discountedRoomPrice}>$576</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" disabled disableElevation className={styles.labelDiscountPercentage}>20% OFF</Button>
                    </Grid>
                </Grid>
                <hr className={styles.divider} />
                <Grid item xs={12}>
                    <Grid container className={styles.datePicker} justifyContent="space-between">
                        <Grid item>Check-In
                            <Box sx={{width:'1px'}} component={'span'}><DatePicker className={styles.datePicker} selected={date} onChange={setDateHandler} /></Box>
                        </Grid>
                        <Grid item >Check-Out
                            <Box><DatePicker selected={date} onChange={setDateHandler} className={styles.datePicker}/></Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>No. of Visitors</Grid>
                <Grid item xs={12}>EXtra Features</Grid>
                <Grid item xs={12}>Total Payment</Grid>
                <Grid item xs={12}>Book Now Button</Grid>
            </Grid>
        </Paper>

    )
}
