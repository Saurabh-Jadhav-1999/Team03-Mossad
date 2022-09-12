import { Stack, Grid, Paper, Box, Typography, Select, FormControl, MenuItem, InputLabel, Checkbox, FormControlLabel } from "@mui/material"
import styles from "./BookingOptions.module.css"
import Button from "@mui/material/Button"
import { BookingDatePickers } from "./BookingDatePickers"
import { useState } from "react";

const features = [
    {
        id: 1,
        name: 'Allow to bring pet',
        price: '$15',
        value: 15
    },
    {
        id: 2,
        name: 'Lunch per person per day',
        price: '$24',
        value: 24
    },
    {
        id: 3,
        name: 'Parking',
        price: '$5',
        value: 5
    },
    {
        id: 4,
        name: 'Extra Pillow',
        price: 'Free',
        value: 0
    }]

export const BookingOptions = () => {

    return (
        <Paper elevation={0} className={styles.bookingOptionsContainer}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                gap={2}
                className={styles.gridContainer}>
                <Grid container justifyContent="space-between" className={styles.discountPriceDetailsContainer}>
                    <span>
                        <Typography component={'span'} className={styles.originalRoomPrice}>$720</Typography>
                        <Typography component={'span'} className={styles.labelRoomPricePerNight} paddingRight={2}>/night</Typography>
                        <Typography component={'span'} className={styles.discountedRoomPrice}>$576</Typography>
                    </span>
                    <Grid item>
                        <Button variant="contained" disabled disableElevation className={styles.labelDiscountPercentage}>20% OFF</Button>
                    </Grid>
                </Grid>
                <hr className={styles.divider} />
                <Grid item xs={12}>
                    {/* <Grid container direction={'column'} className={styles.datePicker} justifyContent="space-between">
                        <Grid item className={styles.labelRoomPricePerNight}>Check-In
                            <Box>
                                <BookingDatePickers className={styles.datePicker} />
                            </Box>
                        </Grid>
                        <Grid item className={styles.labelRoomPricePerNight}>Check-Out
                            <Box>
                                <BookingDatePickers className={styles.datePicker} />
                            </Box>
                        </Grid>
                    </Grid> */}
                    <Stack direction={'row'} justifyContent={"space-between"}>
                        <Box className={styles.datePicker}>
                            <Box className={styles.labelRoomPricePerNight} sx={{ marginBottom: '5px' }}>Check-In</Box>
                            <BookingDatePickers className={styles.datePicker} />
                        </Box>
                        <Box className={styles.datePicker}>
                            <Box className={styles.labelRoomPricePerNight} sx={{ marginBottom: '5px' }}>Check-Out</Box>
                            <BookingDatePickers className={styles.datePicker} />
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={styles.labelRoomPricePerNight} sx={{ marginBottom: '10px' }}>Guest</Typography>
                    <Stack direction={'row'} gap={2} >
                        <Box sx={{ width: '40%' }}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="label-adult">Adults</InputLabel>
                                <Select
                                    labelId="label-adult"
                                    label="Adult"
                                    defaultValue=""
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ width: '40%' }}>
                            <FormControl fullWidth size="small" >
                                <InputLabel id="label-check-out">Children</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="label-check-out"
                                    label="Children"
                                    defaultValue=""
                                >
                                    <MenuItem value={0}>0</MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl></Box>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Typography component={'span'} className={styles.labelRoomPricePerNight}>Extra Features</Typography>
                    <Stack direction={'column'}>
                        {features.map((feature) => {
                            return (
                                <div key={feature.id}>
                                    <Stack direction={'row'} justifyContent={'space-between'}>
                                        <FormControlLabel key={feature.id} label={feature.name} control={<Checkbox value={feature.price} sx={{ fontSize: '14px', color: '#A4A2A2' }} />} />
                                        <Typography className={styles.extraFeaturesPrice}>{feature.price}</Typography>
                                    </Stack>
                                </div>
                            )
                        })}
                    </Stack>
                </Grid>

                <Grid item xs={12}>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography component={'span'} className={styles.labelRoomPricePerNight}>Total Payment</Typography>
                        <Typography component={'span'} className={styles.totalBookingPrice}>$2955</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}><Button variant="contained" fullWidth className={styles.btnBookNow}>Book Now</Button></Grid>
            </Grid>
            <Grid item xs={12} className={styles.bookingNote}><Typography sx={{ fontSize: '8%' }}>You will not get charged yet</Typography></Grid>
        </Paper >
    )
}
