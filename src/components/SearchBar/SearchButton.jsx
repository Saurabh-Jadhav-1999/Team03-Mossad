import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotelList } from "../../slices/searchSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




// DO NOT REMOVE THIS COMMENTS, UPDATING THIS COMPONENT
// import 'react-toastify/dist/ReactToastify.css';
// import { css } from "glamor";

// toast.configure({
//     position: toast.POSITION.BOTTOM_RIGHT,
//     autoClose: 3000,
//     transition: Slide,
//     pauseOnFocusLoss: false,
//         className: css({
//         backgroundColor: 'red',
//     }),
//     bodyClassName: css({
//         backgroundColor: 'blue',
//         height: '100%',
//         width: '100%',
//     })
// });
export const SearchButton = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.search.location);
  const checkIn = useSelector((state) => state.search.checkIn);
  const checkOut = useSelector((state) => state.search.checkOut);
  const adultcount = useSelector((state) => state.search.totalAdult);
  const childcount = useSelector((state) => state.search.totalChild);
  const token = useSelector((state) => state.login.token);

 
  

  const navigate = useNavigate();

  //  This function check the location, check-in/out date and show tost error (if any)
  // if not then navigate to next page
  function searchHandler() {
    if (location === "") {
      toast.error("Please select City..!");
      return;
    }

    if (checkIn === "" || checkOut === "") {
      toast.error("Please select check-in/ check-out date..!");
      return;
    }
    if (checkIn === checkOut) {
      toast.error("Check-out date should be greater than check-in date..!");
      return;
    }

    dispatch(
      fetchHotelList({ location, checkIn, checkOut, adultcount, childcount })
    );
    navigate("/search-hotels");
  }
  return (
    <>
      <ToastContainer />
      <Button
        className={style.searchBtn}
        variant="contained"
        size="large"
        onClick={(e) => {
          if (!token) {
            toast.warn("Please login");
          } else {
            searchHandler();
          }
        }}
      >
        Search
        <ToastContainer />
      </Button>
    </>
  );
};
