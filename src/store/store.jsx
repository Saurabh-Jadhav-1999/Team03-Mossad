import {configureStore} from '@reduxjs/toolkit'
import searchReducer from './../slices/searchSlice';
import getHotelDetailsReducer from './../slices/getHotelDetailsSlice'
import bookNowReducer from './../slices/bookNowSlice'
import loginSliceReducer from '../slices/loginSlice';
export const store=configureStore({

    reducer:{
        search:searchReducer,
        getHotelDetails:getHotelDetailsReducer,
        bookNow:bookNowReducer,
        login:loginSliceReducer,
    }
})