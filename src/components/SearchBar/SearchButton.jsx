import { Button } from "@mui/material";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import style from "./SearchButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setLocation, fetchHotelList } from "./../../slices/searchSlice";

function navigate(path) {
  Navigate(path);
}
// onClick={()=> navigate('Home')}

//       onClick={()=> navigate('DetailList')}

//       onClick={()=> navigate('ConfirmPage')}
function SearchButton() {
  const dispatch = useDispatch();
  const hotellist = useSelector((state) => state.search.hotellist);
  const location = useSelector((state) => state.search.location);
  const checkIn = useSelector((state) => state.search.checkIn);
  const checkOut = useSelector((state) => state.search.checkOut);
  return (
    <>
      <Link
        className={style.searchBtn}
        to="/search-hotels"
        href="/search-hotels"
        onClick={() => {
          dispatch(fetchHotelList({location, checkIn, checkOut}));
          // console.log(hotellist,"slice hotel list")
        }}
      >
        Search
      </Link>
      {/* <Button
      to="/search-hotels"
        variant="contained"
        size="large"
        className={style.searchBtn}
        // href="/search-hotels"
        onClick={() => {
          dispatch(fetchHotelList({location, checkIn, checkOut}));
          navigate('HotelList');
        }}
      >
        Search
      </Button> */}
    </>
  );
}

export default SearchButton;

// export const fetchCityList = createAsyncThunk(
//   "searchHotel/fetchCityList",
//   async (location, thunkAPI) => {
//     try {
//       const bodyParameters = {
//         city_name: location,
//       };
//       console.log(location, "location from bodyparameters");
//       console.log(bodyParameters, "body parameters");
//       return axios
//         .post(
//           "https://hotelbooking-backend.herokuapp.com/getCityList",
//           bodyParameters
//         )
//         .then((response) => {
//           console.log(response.data, "from city list axios");
//           return response.data;
//         });
//     } catch (error) {
//       return error;
//     }
//   }
// );
