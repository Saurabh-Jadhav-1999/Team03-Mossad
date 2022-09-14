import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hotel_id: "",
  city_name: "",
  hotelDetails: [],
  status: "",
};

export const fetchHotelDetails = createAsyncThunk(
  "getHotelDetails/fetchHotelDetails",
  async ({ idFromUrl,cityNameFromUrl }, thunkAPI) => {
    try {
      const config = {
        headers: {
          "x-auth-token":
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIiwidXNlcl9pZCI6MX0.8ZJAWETPMMyxQygChY7t3d1GdrxGo16UQ_MkF6D-OGg",
        },
      };

      const id=idFromUrl;
    
      const bodyParameters = {
        hotel_id: `${idFromUrl}`,
        city_name:`${cityNameFromUrl}`,
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
    setHotelDetails:(state=initialState,action)=>{
      state.hotelDetails=action.payload;
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

export const { setHotelId, setCityName,setHotelDetails } = getHotelDetailsSlice.actions;
export default getHotelDetailsSlice.reducer;
