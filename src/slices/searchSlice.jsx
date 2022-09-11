import { createSlice, createAsyncThunk, useDispatch } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  location: "",
  checkIn: "asd",
  checkOut: "",
  hotellist: [],
  status: "",
  citylist: ['Pune'],
};
export const fetchHotelList = createAsyncThunk(
  "searchHotel/fetchHotelList",
  (_, thunkAPI) => {
    return axios
      .get("https://hotelbooking-backend.herokuapp.com/hotel")
      .then((response) => {
        console.log(response.data, "from axios");
        return response.data;
      })
      .catch((error) => error);
  }
);
export const fetchCityList = createAsyncThunk(
  "searchHotel/fetchCityList",
  async (location , thunkAPI) => {
    try {
      const bodyParameters = {
        "city_name": location,
      };
      console.log(location,"location from bodyparameters")
      console.log(bodyParameters,"body parameters")
      return axios
        .post(
          "https://hotelbooking-backend.herokuapp.com/getCityList",
          bodyParameters
        )
        .then((response) => {
          console.log(response.data, "from city list axios");
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
      state.location = action.payload.location;
    },
    setCheckIn: (state = initialState, action) => {
      state.checkIn = action.payload.checkIn;
    },
    setCheckOut: (state = initialState, action) => {
      state.checkOut = action.payload.checkOut;
    },
  },
  extraReducers: {
    [fetchHotelList.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchHotelList.fulfilled]: (state, action) => {
      state.status = "succeeded";
      console.log(state.current, "222");
      state.hotellist = action.payload;
    },

    [fetchCityList.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCityList.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.citylist = action.payload;
      state.location=action.payload[0];
    },
  },
});

export const { setLocation, setCheckIn, setCheckOut } = searchSlice.actions;
export default searchSlice.reducer;
