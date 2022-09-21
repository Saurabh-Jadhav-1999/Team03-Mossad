/*getHotelDetails slice for the purpose of storing details of a particular hotel  received from api*/

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from './token'
/*initializing the state variables*/
const initialState = {
  hotel_id: "",
  city_name: "",
  hotelDetails: [],
  status: "",
  imgsLoaded: false
};
/*Api call for fetching the details  of a particular hotel*/
export const fetchHotelDetails = createAsyncThunk(
  "getHotelDetails/fetchHotelDetails",
  async ({ idFromUrl, cityNameFromUrl }, thunkAPI) => {
    try {
      const config = {
        headers: {
          "x-auth-token": token
        },
      };

      const bodyParameters = {
        hotel_id: `${idFromUrl}`,
        city_name: `${cityNameFromUrl}`,
      };
      return axios
        .post(
          "https://hotelbooking-backend.herokuapp.com/getHotelById",
          bodyParameters,
          config
        )
        .then((response) => {
          console.log("Response: ", response.data)
          return response.data;


        });
    } catch (error) {
      return error;
    }
  }
);
/* Creating reducers for setting state variables */
export const getHotelDetailsSlice = createSlice({
  name: "getHotelDetails",
  initialState: initialState,
  reducers: {
    setHotelId: (state = initialState, action) => {
      state.hotel_id = action.payload;
    },
    setCityName: (state = initialState, action) => {
      state.city_name = action.payload;
    },
    setHotelDetails: (state = initialState, action) => {
      state.hotelDetails = action.payload;
    },
    setImageLoadStatus: (state = initialState, action) => {
      state.imgsLoaded = action.payload;
    }
  },
  /* Defining actions for the status of promise returned by the api call*/
  extraReducers: {
    [fetchHotelDetails.pending]: (state, action) => {
      console.log("Status Loading")
      state.status = "loading";
    },
    [fetchHotelDetails.fulfilled]: (state, action) => {
      state.status = "succeeded";
      console.log("Fullfilled: ", action.payload)
      state.hotelDetails = action.payload;
    },
  },
});
/*Exporting actions of the slice*/
export const { setHotelId, setCityName, setHotelDetails, setImageLoadStatus } = getHotelDetailsSlice.actions;
export default getHotelDetailsSlice.reducer;
