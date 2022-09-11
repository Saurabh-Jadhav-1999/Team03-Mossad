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
  async ({ hId, city_name}, thunkAPI) => {
    try {
      const config = {
        headers: {
          "x-auth-token":
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIiwidWlkIjoxfQ.sZsoyYE35wAuHH4Fn1EgYPi1BNMN6ew_Og9oJvNdZRU",
        },
      };
    //   console.log(typeof(hId),"ytypew of hId")
      const id=hId;
    //   console.log(id,"id from hId")
        //  console.log(`${hId}`,"hotel id from axios");
        //  console.log(`${city_name}`,"city name from axios");
      const bodyParameters = {
        hotel_id: id,
        city_name:`${city_name}`,
      };
      return axios
        .post(
          "https://hotelbooking-backend.herokuapp.com/getHotelById",
          bodyParameters,
          config
        )
        .then((response) => {
          return response.data;
        //   console.log(response.data, "from axios get hotel details");
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
  },
  extraReducers: {
    [fetchHotelDetails.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchHotelDetails.fulfilled]: (state, action) => {
      state.status = "succeeded";
    //   console.log(action.payload, "payload from fetchhoteldetails");
    //   console.log(action.payload, "action payload from hotel details");
      state.hotelDetails = action.payload;
    },
  },
});

export const { setHotelId, setCityName } = getHotelDetailsSlice.actions;
export default getHotelDetailsSlice.reducer;
