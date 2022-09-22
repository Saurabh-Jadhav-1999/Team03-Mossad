import { HotelSearchFilters } from "../hotelSearchFilters/HotelSearchFilters";
import { HotelDetailsCard } from "../hotelDetailsCard/HotelDetailsCard";
import { Stack, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import Loading from "../loader/Loader";
import Typography from "@mui/material/Typography";
import { setFilteredHotels } from "../../slices/searchSlice";


export const HotelSearchList = () => {

  // Filter Properties and Filtered Hotels List from Store
  const dispatch = useDispatch();
  const hotelList = useSelector((state) => state.search.hotellist);
  const filters = useSelector((state) => state.search.filters)
  const budgetFilters = useSelector((state) => state.search.budgetFilters)
  const filteredHotels = useSelector((state) => state.search.filteredHotels)


  //Check if hotels provides selected filters
  const areFiltersAvailable = (arr) => {
    const value = (filters.filter((filter =>
      ((filter === "breakfastAndDinner") ? arr.hotelfacalities[0]?.breakfast && arr.hotelfacalities[0]?.dinner : arr.hotelfacalities[0]?.[filter]))
    )).length;
    return (value === filters.length) ? true : false;
  }

  const getFilteredArray = () => {
    const arr = hotelList.filter((item => areFiltersAvailable(item)))
    getBudgetFilteredArray(arr);
  }

  // Function Purpose: check if hotel lies in budget range
  // Steps:
  // - get room price from all room types available in hotel
  // - find minimum cost from all room prices
  // - compare min price with budget range; return result

  const areBudgetFiltersAvailable = (arr) => {

    let rates = []
    let discountedRooms = (arr['discounted_room_type']).map((val => val))
    let availableRooms = (arr['available_room_types']).map((val => val))
    availableRooms.push(...discountedRooms)

    for (let roomPrice in availableRooms) {

      /* need to append room_type with '_rate'
       * to access room_type_rate fields from
       * received response of hoteldetails
       */

      availableRooms[roomPrice] += "_rate"
      rates.push(parseInt(arr[availableRooms[roomPrice]]))
    }

    let minValue = Math.min(...rates);

    /** This is where I need to apply a loop for budget filters
     *  Psuedo code:
     * 1. get min value
     * 2. iterate it through all budget range filters array
     * 3. return true if range matches
     */
    return (minValue >= budgetFilters[0] && minValue <= budgetFilters[1]);
  }

  const getBudgetFilteredArray = (arr) => {
    const filteredArray = (budgetFilters.length > 0) ? arr.filter((item => areBudgetFiltersAvailable(item))) : arr;
    dispatch(setFilteredHotels(filteredArray))
  }

  useEffect(() => {
    dispatch(setFilteredHotels(hotelList))
    getFilteredArray();
  }, [hotelList])

  useEffect(() => {

    // Filter Handler for Filter Properties and Budget Filters
    getFilteredArray();
  }, [filters, budgetFilters])

  const status = useSelector((state) => state.search.status);
  
  return (
    <Fragment>
      <Stack direction={"row"} spacing={1} sx={{ marginTop: "40px" }}>
        <HotelSearchFilters />
        <Stack direction={"column"} spacing={2}>
          {
            status === "rejected" ?
              (<Paper style={{ marginLeft: "13vw", display: "grid", justifyContent: "center", marginTop: "15vh", width: "40vw", textAlign: "center", height: "23vh", padding: "1vw", borderRadius: "15px" }}>
                <Typography variant="h5" style={{ fontFamily: "inter", marginLeft: "0px", marginTop: "2vh" }}>    Hotels not found ! </Typography>
                <Typography variant="h5" style={{ fontFamily: "inter", marginTop: "1vh" }}> Please update your search preferences.</Typography>
              </Paper>) : (
                status === "loading" ? (
                  <div style={{ marginLeft: "12vw" }}>
                    <Loading />
                    <Typography variant="h5" style={{ fontFamily: "inter", textAlign: "center", margin: "15vh -12", marginTop: "7vh" }}>Wait a moment, we are finding the best hotels for you!</Typography>
                  </div>
                ) : (
                  filteredHotels.map((item) => (<HotelDetailsCard key={item.hotel_id} details={item} />))
                ))
          }
        </Stack >
      </Stack >
    </Fragment >
  );
};