import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotelList } from "../../slices/searchSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from 'moment/moment';

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

    if (checkIn === null || checkIn === "" || checkOut === null || checkOut === "") {
      toast.error("Please select check-in & check-out dates.");
      return;
    }

    if (checkIn < moment(new Date()).format("YYYY-MM-DD")) {
      toast.error("Check-in date should be greater than or equal to today's date!");
      return;
    }

    if (checkOut <= checkIn && (checkIn !== null || checkOut !== null)) {
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
      </Button>
    </>
  );
};
