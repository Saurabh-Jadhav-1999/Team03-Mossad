import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    hotelId:'',
    noOfPassengers:'',
    totalCost:'',
    totalAdult:'',
    totalChild:'',
}