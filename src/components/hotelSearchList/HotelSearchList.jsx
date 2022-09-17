import { HotelSearchFilters } from "../hotelSearchFilters/HotelSearchFilters";
import { HotelDetailsCard } from "../hotelDetailsCard/HotelDetailsCard";
import {  Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import Loading from "../loader/Loader";
import Typography from "@mui/material/Typography";
import { setFilteredHotels} from "../../slices/searchSlice";

export const HotelSearchList = () => {

  // Filter Properties and Filtered Hotels List from Store
  const dispatch = useDispatch();
  const hotelList = useSelector((state) => state.search.hotellist);
  const filters = useSelector((state) => state.search.filters)
  const budgetFilters = useSelector((state) => state.search.budgetFilters)
  const filteredHotels = useSelector((state) => state.search.filteredHotels)


  //Check if hotels provides selected filters
  const areFiltersAvailable = (arr) => {
    const value = (filters.filter((filter => arr.hotelfacalities[0]?.[filter]))).length;
    return (value === filters.length) ? true : false;
  }

  const getFilteredArray = () => {
    const arr = (budgetFilters.length !== 0 ? filteredHotels : hotelList).filter((item => areFiltersAvailable(item)))
    dispatch(setFilteredHotels(arr))
  }

  // Check if hotels provides selected budget filters
  // Function Purpose: check if hotel lies in budget range
  // - find minimum room price from all room types
  // - available in hotel
  // - compare min price with budget range

  const areBudgetFiltersAvailable = (arr) => {

    let rates = []
    let discountedRooms = (arr['discounted_room_type']).map((val => val))
    let availableRooms = (arr['available_room_types']).map((val => val))
    availableRooms.push(...discountedRooms)

    for (let a in availableRooms) {
      availableRooms[a] += "_rate"
      rates.push(parseInt(arr[availableRooms[a]]))
    }

    let minValue = Math.min(...rates);
    return (minValue >= budgetFilters[0] && minValue <= budgetFilters[1]);
  }

  const getBudgetFilteredArray = () => {
    console.log("hotels filtered are:", filteredHotels);
    const arr = (filters.length !== 0 ? filteredHotels : hotelList).filter((item => areBudgetFiltersAvailable(item)))
    dispatch(setFilteredHotels(arr))
  }

  // Filter Handler for Filter Properties and Budget Filters
  const filterHandler = () => {
    if (filters.length !== 0) getFilteredArray();
    if (budgetFilters.length !== 0) getBudgetFilteredArray();
  }


  useEffect(() => {
    filterHandler();
  }, [filters, budgetFilters])

  const status = useSelector((state) => state.search.status);
  return (
    <Fragment>
      <Stack direction={"row"} spacing={1} sx={{ marginTop: "40px" }}>
        <HotelSearchFilters />
        <Stack direction={"column"} spacing={2}>
          {
            status === "rejected" ?
              (<div style={{ marginLeft: "20vw", display: "grid", justifyContent: "center" }}>
                <Typography variant="h5" style={{ fontFamily: "inter", marginLeft: "0px" }}>    Hotels not found ! </Typography>
                <Typography variant="h5" style={{ fontFamily: "inter", }}> Please update your search details.</Typography>
              </div>) : (
                status === "loading" ? (
                  <div style={{ marginLeft: "20vw" }}>
                    <Loading />
                    <Typography variant="h5" style={{ fontFamily: "inter", textAlign: "center", margin: "10vh -10" }}>Wait a moment, we are finding the best hotels for you!</Typography>
                  </div>
                ) : (
                  (

                    // Filter hotels only if a filter is clicked
                    filters.length > 0 || budgetFilters.length > 0 ? (
                      filteredHotels.map((item => (<HotelDetailsCard key={item.hotel_id} details={item} />)))
                    ) : (
                      // Otherwise map original hotels list
                      hotelList.map((item) => (<HotelDetailsCard key={item.hotel_id} details={item} />))
                    )
                  )
                ))
          }
        </Stack >
      </Stack >
    </Fragment >
  );
};
