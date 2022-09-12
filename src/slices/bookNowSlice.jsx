import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    hotelId:'',
    noOfPassengers:'',
    totalCost:'',
    totalAdult:'',
    totalChild:'',
}


export const bookNow = createAsyncThunk(
    "bookNowRoom/fetchHotelList",
    async (location, thunkAPI) => {
      try {
        // console.log("fetchhotellist called");
        const bodyParameters = {
      
        };
  
        // console.log(bodyParameters, "valuen of body params of axios ");
        return axios
          .post(
            "https://hotelbooking-backend.herokuapp.com/getHotel",
            bodyParameters
          )
          .then((response) => {
            // console.log(response.data, "from fetch hotellist axios");
            return response.data;
          });
      } catch (error) {
        return error;
      }
    }
  );




  export const bookNowSlice = createSlice({
    name: "bookNowRoom",
    initialState: initialState,
    reducers: {
      setHotelId: (state = initialState, action) => {
        state.location = action.payload.location;
      },
      setNoOfPassengers: (state = initialState, action) => {
        state.checkIn = action.payload.checkIn;
      },
      setTotalCost: (state = initialState, action) => {
        state.checkOut = action.payload.checkOut;
      },
      setAdultCount:(state=initialState,action)=>{
        state.totalAdult=action.payload.totalAdult
      },
      setChildCount:(state=initialState,action)=>{
        state.totalChild=action.payload.totalChild
      }
    },
    extraReducers: {
      // [fetchHotelList.pending]: (state, action) => {
      //   state.status = "loading";
      // },
      // [fetchHotelList.fulfilled]: (state, action) => {
      //   state.status = "succeeded";
      //   state.hotellist = action.payload;
      //   console.log(state.hotellist, "from fetch hotel list reducers");
      // },
  
    
    },
  });



  
export const { setHotelId, setAdultCount, setChildCount,setNofOfPassengers } = bookNowSlice.actions;
export default bookNowSlice.reducer;