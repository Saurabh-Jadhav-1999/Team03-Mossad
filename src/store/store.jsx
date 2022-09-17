import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './../slices/searchSlice';
import getHotelDetailsReducer from './../slices/getHotelDetailsSlice'
import bookNowReducer from './../slices/bookNowSlice'
// import   suggestedHotelListReducer  from '../slices/suggestedHotelsSlice';
import loginSliceReducer from '../slices/loginSlice';
import suggestedHotelsSliceReducer from "./../slices/suggestedHotelsSlice"
export const store = configureStore({
    reducer: {
        search: searchReducer,
        getHotelDetails: getHotelDetailsReducer,
        bookNow: bookNowReducer,
        login: loginSliceReducer,
        suggestedHotels:suggestedHotelsSliceReducer
        // suggestedHotelList:suggestedHotelListReducer,

    }
})