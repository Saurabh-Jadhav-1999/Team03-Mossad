import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from './token'
const initialState = {
  location: "",
  checkIn: "",
  checkOut: "",
  hotellist: [],
  status: "",
  citylist: [],
  totalAdult: 1,
  totalChild: 0,
  filters: []
};

export const fetchHotelList = createAsyncThunk(
  "searchHotel/fetchHotelList",
  async ({ location, checkIn, checkOut, adultcount, childcount }, thunkAPI) => {
    try {
      const config = {
        headers: {
          "x-auth-token": token
        },
      };

      const bodyParameters = {
        city_name: `${location}`,
        check_in_date: `${checkIn}`,
        check_out_date: `${checkOut}`,
        adult_count: adultcount,
        child_count: childcount,
      };

      // console.log(bodyParameters, "valuen of body params of axios ");
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
export const fetchCityList = createAsyncThunk(
  "searchHotel/fetchCityList",
  async (location, thunkAPI) => {
    try {
      const config = {
        headers: {
          "x-auth-token": token
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

export const searchSlice = createSlice({
  name: "searchHotel",
  initialState: initialState,
  reducers: {
    setLocation: (state = initialState, action) => {
      state.location = action.payload;
    },
    setCheckIn: (state = initialState, action) => {
      // console.log(action.payload,"checkin from slice")
      state.checkIn = action.payload;
    },
    setCheckOut: (state = initialState, action) => {
      // console.log(action.payload,"checkout from slice");
      state.checkOut = action.payload;
    },
    setAdultCount: (state = initialState, action) => {
      state.totalAdult = action.payload;
    },
    setChildCount: (state = initialState, action) => {
      state.totalChild = action.payload;
    },
    setFilters: (state = initialState, action) => {
        state.filters.push(action.payload);
    },
    unSetFilters: (state = initialState, action) => {
      state.filters.pop(action.payload);
  },
  },
  extraReducers: {
    [fetchHotelList.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchHotelList.rejected]: (state, action) => {
      // state.status = "loading";
      state.status = "rejected";
      console.log(state.status, "rejected called");
    },
    [fetchHotelList.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // console.log(action.payload,"action payload from fetchhotellist ")
      state.hotellist = action.payload;
      // console.log(state.hotellist, "from fetch hotel list reducers");
    },

    [fetchCityList.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCityList.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.citylist = action.payload.cities;

      state.location = action.payload.cities;
    },
  },
});

export const { setLocation, setCheckIn, setCheckOut, setAdultCount,
  setChildCount, setFilters, unSetFilters } = searchSlice.actions;
export default searchSlice.reducer;
