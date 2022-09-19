/*BookNow slice for the purpose of storing search bar data along with hotel details received from api*/

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { token } from "./token";
import { useSelector } from "react-redux";
/*initializing the state variables*/
const initialState = {
  hotelId: "",
  hotel_name: "",
  noOfPassengers: "",
  totalCost: "",
  status: "",
  city_name: "",
  allow_to_bring_pet: 0,
  lunch_per_person_per_day: 0,
  parking: 0,
  room_type: "",
  room_type_cost: 0,
  finalbooking: [],
};
/*Api call for booking a room of a particular hotel*/
export const finalBookNow = createAsyncThunk(
  "bookNowRoom/finalBookNow",
  async (
    { checkin, checkout, adultcount, childcount, hotelid, totalcost, roomtype },
    thunkAPI
  ) => {
    try {
      const config = {
        headers: {
          "x-auth-token": token,
        },
      };

      const rooms = { er: 0, dr: 0, pr: 0, exr: 0 };

      switch (roomtype) {
        case "exclusive_room":
          rooms.exr = 1;
          break;
        case "premium_room":
          rooms.pr = 1;
          break;
        case "economy_room":
          rooms.er = 1;
          break;
        case "double_room":
          rooms.dr = 1;
          break;
        default:
          throw new Error("Invalid room");
      }
      const cost = parseInt(totalcost);
      const hid = parseInt(hotelid);
      const acnt = parseInt(adultcount);
      const ccnt = parseInt(childcount);
      const bodyParameters = {
        check_in_date: `${checkin}`,
        check_out_date: `${checkout}`,
        adult_count: acnt,
        child_count: ccnt,
        hotel_id: hid,
        exclusive_room_count: rooms.exr,
        economy_room_count: rooms.er,
        double_room_count: rooms.dr,
        premium_room_count: rooms.pr,
        total_cost: cost,
      };

      return axios
        .post(
          "https://hotelbooking-backend.herokuapp.com/booking",
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
export const bookNowSlice = createSlice({
  name: "bookNowRoom",
  initialState: initialState,
  reducers: {
    setHotelId: (state = initialState, action) => {
      state.hotelId = action.payload;
    },
    setNoOfPassengers: (state = initialState, action) => {
      state.noOfPassengers = action.payload;
    },
    setTotalCost: (state = initialState, action) => {
      state.totalCost = action.payload;
    },

    setCityName: (state = initialState, action) => {
      state.city_name = action.payload;
    },
    setAllowToBringPet: (state = initialState, action) => {
      state.allow_to_bring_pet = parseInt(action.payload);
      state.totalCost += parseInt(action.payload);
    },
    
    setLunchUsingDate: (state = initialState, action) => {
      state.totalCost -= state.lunch_per_person_per_day;
      state.lunch_per_person_per_day /= action.payload.old_diff;
      state.lunch_per_person_per_day *= action.payload.Difference_In_Days;
      state.totalCost += state.lunch_per_person_per_day;
    },
    setLunchUsingAdult: (state = initialState, action) => {
      state.totalCost -= state.lunch_per_person_per_day;
      state.lunch_per_person_per_day /=
        action.payload.adultcount + action.payload.childcount;
      state.lunch_per_person_per_day *=
        action.payload.new_adult_count + action.payload.childcount;
      state.totalCost += state.lunch_per_person_per_day;
    },
    setLunchUsingChild: (state = initialState, action) => {
      state.totalCost -= state.lunch_per_person_per_day;
      state.lunch_per_person_per_day /=
        action.payload.adultcount + action.payload.childcount;
      state.lunch_per_person_per_day *=
        action.payload.adultcount + action.payload.new_child_count;
      state.totalCost += state.lunch_per_person_per_day;
    },
    setLunchPerPersonPerDay: (state = initialState, action) => {
      let passengers = 0;
      //if childcount is not 0 then add the childcount to adultcount and calculate lunch per person per day
      action.payload.childcount == 0
        ? (passengers = action.payload.adultcount)
        : (passengers = action.payload.adultcount + action.payload.childcount);
      state.lunch_per_person_per_day =
        action.payload.diff * action.payload.lunchprice * passengers;
      state.totalCost += parseInt(state.lunch_per_person_per_day);
    },
    setParking: (state = initialState, action) => {
      state.parking = parseInt(action.payload);
      state.totalCost += parseInt(action.payload);
    },
    unsetAllowToBringPet: (state = initialState, action) => {
      state.allow_to_bring_pet = 0;
      state.totalCost -= parseInt(action.payload);
    },
    unsetLunchPerPersonPerDay: (state = initialState, action) => {
      state.lunch_per_person_per_day = 0;
      state.totalCost -= parseInt(action.payload);
    },
    unsetParking: (state = initialState, action) => {
      state.parking = 0;
      state.totalCost -= parseInt(action.payload);
    },
    setRoomType: (state = initialState, action) => {
      state.room_type = action.payload;
    },
    setRoomTypeCost: (state = initialState, action) => {
      if (state.totalCost !== "") {
        state.totalCost = parseInt(state.totalCost / state.room_type_cost);
        //add all extra features cost and add them into total cost of total days
        state.totalCost =
          parseInt(action.payload.bp * action.payload.Difference_In_Days) +
          state.allow_to_bring_pet +
          state.lunch_per_person_per_day +
          state.parking;
        state.room_type_cost = action.payload.bp;
      } else if (state.totalCost == "") {
        state.room_type_cost = action.payload.bp;
        state.totalCost = action.payload.bp * action.payload.Difference_In_Days;
      }
    },
    setTotalCostUsingDate:(state=initialState,action)=>{ 
     state.totalCost-=parseInt(state.room_type_cost*action.payload.old_diff);   
     state.totalCost=parseInt(state.room_type_cost*action.payload.Difference_In_Days);
    },
    setDiffBetDays: (state = initialState, action) => {
      state.difference_between_days = action.payload;
    },
  },
  /* Defining actions for the status of promise returned by the api call*/
  extraReducers: {
    [finalBookNow.pending]: (state, action) => {
      state.status = "loading";
    },
    [finalBookNow.rejected]: (state, action) => {
      state.status = "rejected";
    },

    [finalBookNow.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.finalbooking = action.payload;
    },
  },
});
/*Exporting actions of the slice*/
export const {
  setHotelId,
  setNoOfPassengers,
  setAllowToBringPet,
  setExtraPillow,
  setLunchPerPersonPerDay,
  setCityName,
  setParking,
  setTotalCost,
  unsetAllowToBringPet,
  unsetLunchPerPersonPerDay,
  unsetParking,
  setRoomTypeCost,
  setRoomType,
  setLunchUsingAdult,
  setLunchUsingChild,
  setLunchUsingDate,
  setTotalCostUsingDate
} = bookNowSlice.actions;
export default bookNowSlice.reducer;
