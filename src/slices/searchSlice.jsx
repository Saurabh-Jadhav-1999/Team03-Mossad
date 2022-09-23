/*Search slice for the purpose of storing search bar data along with hotel details received from api*/
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "./token";

/*initializing the state variables*/
const initialState = {
  location: "",
  checkIn: null,
  checkOut: null,
  hotellist: [],
  status: "",
  status1: "",
  citylist: [""],
  totalAdult: 1,
  totalChild: 0,
  filters: [],
  budgetFilters: [],
  yourBudgetFilters: {
    "Less than $75": false,
    "$75 to $300": false,
    "$300 to $500": false,
    "$500 to $1000": false,
    "Greater than $1000": false,
  },
  filteredHotels: [],
  diff: 0,
};

/*Api call for fetching the hotel list of a particular location*/
export const fetchHotelList = createAsyncThunk(
  "searchHotel/fetchHotelList",
  async ({ location, checkIn, checkOut, adultcount, childcount }, thunkAPI) => {
    try {
      const config = {
        headers: {
          "x-auth-token": token,
        },
      };

      const bodyParameters = {
        city_name: `${location}`,
        check_in_date: `${checkIn}`,
        check_out_date: `${checkOut}`,
        adult_count: adultcount,
        child_count: childcount,
      };

      return axios
        .post(
          "https://hotelbooking-backend.herokuapp.com/getHotel",
          bodyParameters,
          config
        )
        .then((response) => {
          return response.data;
        });
    } catch (error) {
      return error;
    }
  }
);

/*Api call for fetching the city list for given input chars*/
export const fetchCityList = createAsyncThunk(
  "searchHotel/fetchCityList",
  async (location, thunkAPI) => {
    try {
      const config = {
        headers: {
          "x-auth-token": token,
        },
      };

      const bodyParameters = {
        city_name: location,
      };

      return axios
        .post(
          "https://hotelbooking-backend.herokuapp.com/getCityList",
          bodyParameters,
          config
        )
        .then((response) => {
          return response.data;
        });
    } catch (error) {
      return error;
    }
  }
);
/* Creating reducers for setting state variables */
export const searchSlice = createSlice({
  name: "searchHotel",
  initialState: initialState,
  reducers: {
    setLocation: (state = initialState, action) => {
      state.location = action.payload;
    },
    setCheckIn: (state = initialState, action) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state = initialState, action) => {
      state.checkOut = action.payload;
    },
    setAdultCount: (state = initialState, action) => {
      state.totalAdult = action.payload;
    },
    setChildCount: (state = initialState, action) => {
      state.totalChild = action.payload;
    },

    //Filter Reducers
    setFilters: (state = initialState, action) => {
      state.filters.push(action.payload);
    },
    unSetFilters: (state = initialState, action) => {
      const index = state.filters.indexOf(action.payload);
      if (index > -1) state.filters.splice(index, 1);
    },
    setBudgetFilters: (state = initialState, action) => {
      state.budgetFilters = action.payload;
    },
    unSetBudgetFilters: (state = initialState) => {
      state.budgetFilters = [];
    },
    setFilteredHotels: (state = initialState, action) => {
      state.filteredHotels = action.payload;
    },
    clearYourBudgetFilters: (state = initialState) => {
      state.yourBudgetFilters = [initialState["yourBudgetFilters"]];
    },
    setDiffBetDays: (state = initialState, action) => {
      state.diff = parseInt(action.payload);
    },
    setCityList: (state = initialState, action) => {
      state.citylist = action.payload;
    },
  },
  /* Defining actions for the status of promise returned by the api call*/
  extraReducers: {
    [fetchHotelList.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchHotelList.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [fetchHotelList.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.hotellist = action.payload;
    },

    [fetchCityList.pending]: (state, action) => {
      state.status1 = "loading";
    },
    [fetchCityList.rejected]: (state, action) => {
      state.status1 = "rejected";
    },
    [fetchCityList.fulfilled]: (state, action) => {
      state.status1 = "succeeded";
      state.citylist = action.payload.cities;
    },
  },
});

/*Exporting actions of the slice*/
export const {
  setLocation,
  setCheckIn,
  setCheckOut,
  setAdultCount,
  setChildCount,
  setFilters,
  unSetFilters,
  setBudgetFilters,
  unSetBudgetFilters,
  setFilteredHotels,
  clearFilteredHotels,
  setDiffBetDays,
  setCityList,
  clearYourBudgetFilters,
} = searchSlice.actions;

export default searchSlice.reducer;
