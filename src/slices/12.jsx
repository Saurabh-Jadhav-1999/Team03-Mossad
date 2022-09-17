// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { token } from "./token";

// const initialState = {
//   suggestedList: {},
//   status: "",
// };

// export const fetchSuggestedHotels = createAsyncThunk(
//   "topFiveHotels/fetchSuggestedHotels",
//   async (_, thunkAPI) => {
//     try {
//       const config = {
//         headers: {
//           "x-auth-token":
//             "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIiwidXNlcl9pZCI6MX0.8ZJAWETPMMyxQygChY7t3d1GdrxGo16UQ_MkF6D-OGg",
//         },
//       };
//       let data = {
//         params: {
//             // from: "2020-03-12",
//             // to: "2020-03-13"
//         },
//         headers: {
//             "X-Auth-Token": token,
//             "content-type": "application/json"
//         }
//     };
//       const bodyParameters = {};
//       const response=axios
//         .get(
//           "https://hotelbooking-backend.herokuapp.com/topFiveSuggestionsForUser",
//            data
//           )
//         .then((response) => {
//           console.log(response.data, "response from axios");
//           return response.data;
//         });
//     } catch (error) {
//       return error;
//     }
//   }
// );

// const suggestedHotelList = createSlice({
//   name: "topFiveHotels",
//   initialState: initialState,
//   reducers: {
//     setSuggestdHotelList: (state = initialState, action) => {
//       state.suggestedList = action.payload;
//     },
//   },
//   extraReducers: {
//     [fetchSuggestedHotels.pending]: (state, action) => {
//       state.status = "loading";
//     },
//     [fetchSuggestedHotels.rejected]: (state, action) => {
//       state.status = "rejected";
//       console.log(action.payload, "action payload from rejected");
//     },
//     [fetchSuggestedHotels.fulfilled]: (state, action) => {
//       state.status = "succeeded";
//       state.suggestedList = action.payload;
//       console.log(state.suggestedList, "action payload from succeeded");
//     },
//   },
// });

// export const { setSuggestdHotelList } = suggestedHotelList.actions;

// export default suggestedHotelList.reducer;
