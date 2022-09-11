import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    hotelId:"",
    hotelDetails:[],
}

export const fetchHotelDetails=createAsyncThunk(
    "getHotelDetails/fetchHotelDetails",
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


export const getHotelDetailsSlice=createSlice({
    name:"getHotelDetails",
    initialState:initialState,
    reducers:{
        setHotelId:(state=initialState,action)=>{
            state.hotelId=action.payload.hotelId;
        },
        
    },
    extraReducers:{
     [fetchHotelDetails.pending]:(state,action)=>{
        state.status="loading";
     },
     [fetchHotelDetails.fulfilled]:(state,action)=>{
        state.hotelDetails=action.payload;
     },
    },
})


export const {setHotelId}=getHotelDetailsSlice.actions;
export default getHotelDetailsSlice.reducer;