import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {token} from './token'

const initialState = {
  hotel_id: "",
  city_name: "",
  hotelDetails: [],
  status: "",
  imgsLoaded: false
};

export const fetchHotelDetails = createAsyncThunk(
  "getHotelDetails/fetchHotelDetails",
  async ({ idFromUrl, cityNameFromUrl }, thunkAPI) => {
    try {
      const config = {
        headers: {
          "x-auth-token":token
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
          return response.data;

        });
    } catch (error) {
      return error;
    }
  }
);

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
  extraReducers: {
    [fetchHotelDetails.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchHotelDetails.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.hotelDetails = action.payload;
    },
  },
});

export const { setHotelId, setCityName, setHotelDetails, setImageLoadStatus } = getHotelDetailsSlice.actions;
export default getHotelDetailsSlice.reducer;
