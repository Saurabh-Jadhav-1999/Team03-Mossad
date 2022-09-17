import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*initializing the state variables*/
const initialState = {
  suggestedHotels: {},
  status: "",
};

export const fetchSuggestedHotels = createAsyncThunk(
  "suggestedHotels/fetchSuggestedHotels",
  async (token, thunkAPI) => {
    try {
      const config = {
        headers: {
          "x-auth-token":
            token,
        },
      };

      const bodyParameters = {};

      return axios
        .post(
          "https://hotelbooking-backend.herokuapp.com/topFiveSuggestionsForUser",
          bodyParameters, config
        )
        .then((response) => {
          // console.log(response.data, "response data");
          return response.data;
        });
    } catch (error) {
      return error;
    }
  }
);

/* Creating reducers for setting state variables */
export const suggestedHotelsSlice = createSlice({
  name: "suggestedHotels",
  initialState: initialState,
  reducers: {
    setSuggestedHotels: (state = initialState, action) => {
      state.suggestedHotels = action.payload;
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
      state.suggestedHotels = action.payload;
    },
  },
});

export const { setSuggestedHotels } = suggestedHotelsSlice.actions;

export default suggestedHotelsSlice.reducer;
