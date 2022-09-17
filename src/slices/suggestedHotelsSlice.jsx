import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "./token";

const initialState = {
  suggestedList: [],
  //   imgLoaded: false,
};

export const fetchSuggestedHotels = createAsyncThunk(
  "topFiveHotels/fetchSuggestedHotelList",
  async (thunkAPI) => {
    try {
      const config = {
        headers: {
          "x-auth-token": token,
        },
      };
      axios
        .get(
  "https://hotelbooking-backend.herokuapp.com/topFiveSuggestionsForUser",     
       {},
          config
        )
        .then((response) => {
          // console.log("Suggested hotel list responce",response);
          return response.data;
        });
    } catch (error) {
      // console.log(error.name);
      return error;
    }
  }
);

const suggestedHotelList = createSlice({
  name: "topFiveHotels",
  initialState: initialState,
  reducers: {
    setSuggestdHotelList: (state = initialState, action) => {
      state.suggestedList = action.payload;
    },
  },
  extraReducers: {
    [fetchSuggestedHotels.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSuggestedHotels.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [fetchSuggestedHotels.fulfilled]: (state, action) => {
      state.status = "succeeded";

      state.hotellist = action.payload;
    },
  },
});

export const { setSuggestdHotelList } = suggestedHotelList.actions;

export default suggestedHotelList.reducer;
