// Booking Options Card Component
import {
  Stack,
  Grid,
  Paper,
  Box,
  Typography,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect } from "react";
import styles from "./BookingOptions.module.css";
import Button from "@mui/material/Button";
import { BookingDatePickers } from "./BookingDatePickers";
import { useSelector, useDispatch } from "react-redux";
import { setAdultCount, setChildCount } from "../../slices/searchSlice";
import {
  setAllowToBringPet,
  setLunchPerPersonPerDay,
  setParking,
  unsetAllowToBringPet,
  unsetLunchPerPersonPerDay,
  unsetParking,
  finalBookNow,
  setLunchUsingAdult,
  setLunchUsingChild
} from "./../../slices/bookNowSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BookingOptions = (props) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const status1 = useSelector((state) => state.bookNow.status);

  useEffect(() => {
    switch (status1) {
      case "loading":
        notify1();
        break;

      case "succeeded":
        notify2();
        navigate("/booking-confirmation");
        break;

      case "rejected":
        notify3();
        break;

      default:
        break;
    }
  }, [status1]);

  const notify1 = () => toast("Booking is in Progress.");
  const notify2 = () => toast("Your hotel has been booked.");
  const notify3 = () =>
    toast("Booking is rejected, please change your booking options.");
  const totalcost = useSelector((state) => state.bookNow.totalCost);
  const status = useSelector((state) => state.getHotelDetails.status);
  const hotelid = useSelector((state) => state.getHotelDetails.hotel_id);
  const checkin = useSelector((state) => state.search.checkIn);
  const checkout = useSelector((state) => state.search.checkOut);
  const adultcount = useSelector((state) => state.search.totalAdult);
  const childcount = useSelector((state) => state.search.totalChild);
  const lunch_per_person = useSelector(
    (state) => state.bookNow.lunch_per_person_per_day
  );
  const roomTypeCost = useSelector((state) => state.bookNow.room_type_cost);
  const diff = useSelector((state) => state.search.diff);
  const roomtype = useSelector((state) => state.bookNow.room_type);
  let lunchstatus = 0;
  lunch_per_person != 0 ? (lunchstatus = 1) : (lunchstatus = 0);

  //Extra Features Options for the Book Now component
  const features = [
    {
      id: 1,
      name: "Allow to bring pet",
      price: `$15`,
      value: 15,
    },
    {
      id: 2,
      name: "Lunch per person per day",
      price: `$24`,
      value: 24,
    },
    {
      id: 3,
      name: "Parking",
      price: `$5`,
      value: 5,
    },
    {
      id: 4,
      name: "Extra Pillow",
      price: `Free`,
      value: 0,
    },
  ];

  return (
    <Fragment>
      {status == "loading" && setTimeout(() => {}, 5000) ? (
        <p></p>
      ) : (
        <Paper elevation={0} className={styles.bookingOptionsContainer}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            gap={2}
            className={styles.gridContainer}
          >
            <Grid
              container
              justifyContent="space-between"
              className={styles.discountPriceDetailsContainer}
            >
              <span>
                <Typography
                  component={"span"}
                  className={styles.originalRoomPrice}
                >
                  ${roomTypeCost}
                </Typography>
                <Typography
                  component={"span"}
                  className={styles.labelRoomPricePerNight}
                  paddingRight={2}
                >
                  /night
                </Typography>
              </span>
              <Grid item>
                <Button
                  variant="contained"
                  disabled
                  disableElevation
                  className={styles.labelDiscountPercentage}
                >
                  10% OFF
                </Button>
              </Grid>
            </Grid>
            <hr className={styles.divider} />
            <Grid item xs={12}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Box className={styles.datePicker}>
                  <Box
                    className={styles.labelRoomPricePerNight}
                    sx={{ marginBottom: "5px" }}
                  >
                    Check-In
                  </Box>
                  <BookingDatePickers
                    className={styles.datePicker}
                    checkin={"1"}
                    date={checkin}
                    onChange={(e) => {}}
                    check_out={false}
                  />
                </Box>
                <Box className={styles.datePicker}>
                  <Box
                    className={styles.labelRoomPricePerNight}
                    sx={{ marginBottom: "5px" }}
                  >
                    Check-Out
                  </Box>
                  <BookingDatePickers
                    checkin={"0"}
                    className={styles.datePicker}
                    date={checkout}
                    check_out={true}
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Typography
                className={styles.labelRoomPricePerNight}
                sx={{ marginBottom: "10px" }}
              >
                Guest
              </Typography>
              <Stack direction={"row"} gap={2}>
                <Box sx={{ width: "40%" }}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="label-adult">Adults</InputLabel>
                    <Select
                      labelId="label-adult"
                      label="Adult"
                      defaultValue={adultcount}
                      style={{ backgroundColor: "#F4F5F7" }}
                      onChange={(e) => {
                        let new_adult_count = e.target.value;

                        if (lunchstatus == 1) {
                          console.log(new_adult_count, "adult count inside if");
                          dispatch(
                            setLunchUsingAdult({
                              adultcount,
                              new_adult_count,
                              childcount,
                            })
                          );
                        }

                        dispatch(setAdultCount(e.target.value));
                      }}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: "40%" }}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="label-check-out">Children</InputLabel>
                    <Select
                      fullWidth
                      labelId="label-check-out"
                      label="Children"
                      defaultValue={childcount}
                      style={{ backgroundColor: "#F4F5F7" }}
                      onChange={(e) => {
                        let new_child_count = e.target.value;

                        if (lunchstatus == 1) {
                          console.log(new_child_count, "child count inside if");
                          dispatch(
                            setLunchUsingChild({
                              childcount,
                              new_child_count,
                              adultcount,
                            })
                          );
                        }

                        dispatch(setChildCount(e.target.value));
                      }}
                    >
                      <MenuItem value={0}>0</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Typography
                component={"span"}
                className={styles.labelRoomPricePerNight}
              >
                Extra Features
              </Typography>
              <Stack direction={"column"}>
                {features.map((feature) => {
                  return (
                    <div key={feature.id}>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <FormControlLabel
                          key={feature.id}
                          label={feature.name}
                          control={
                            <Checkbox
                              key={feature.id}
                              value={feature.value}
                              sx={{ fontSize: "14px", color: "#A4A2A2" }}
                              onClick={(e) => {
                                switch (feature.id) {
                                  case 1:
                                    if (e.target.checked) {
                                      dispatch(
                                        setAllowToBringPet(e.target.value)
                                      );
                                    } else if (!e.target.checked) {
                                      dispatch(
                                        unsetAllowToBringPet(e.target.value)
                                      );
                                    }
                                    break;
                                  case 2:
                                    if (e.target.checked) {
                                      const lunchprice = e.target.value;
                                      dispatch(
                                        setLunchPerPersonPerDay({
                                          lunchprice,
                                          diff,
                                          adultcount,
                                          childcount,
                                        })
                                      );
                                    } else if (!e.target.checked) {
                                      dispatch(
                                        unsetLunchPerPersonPerDay(
                                          lunch_per_person
                                        )
                                      );
                                    }

                                    break;
                                  case 3:
                                    if (e.target.checked) {
                                      dispatch(setParking(e.target.value));
                                    } else if (!e.target.checked) {
                                      dispatch(unsetParking(e.target.value));
                                    }

                                    break;

                                  default:
                                    break;
                                }
                              }}
                            />
                          }
                        />
                        <Typography className={styles.extraFeaturesPrice}>
                          {feature.price}
                        </Typography>
                      </Stack>
                    </div>
                  );
                })}
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography
                  component={"span"}
                  className={styles.labelRoomPricePerNight}
                >
                  Total Payment
                </Typography>
                <Typography
                  component={"span"}
                  className={styles.totalBookingPrice}
                >
                  ${totalcost}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                className={styles.btnBookNow}
                onClick={() => {
                  dispatch(
                    finalBookNow({
                      checkin,
                      checkout,
                      adultcount,
                      childcount,
                      hotelid,
                      totalcost,
                      roomtype,
                    })
                  );
                }}
              >
                Book Now
                <ToastContainer />
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.bookingNote}>
            <Typography sx={{ fontSize: "8%" }}>
              You will not get charged yet
            </Typography>
          </Grid>
        </Paper>
      )}
    </Fragment>
  );
};
