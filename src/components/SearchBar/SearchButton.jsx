import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./SearchButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotelList } from "../../slices/searchSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    console.log("search handler called");

    if (location === "") {
      toast.error("Please select City..!");
      return;
    }
    else if (checkIn === "" || checkOut === "") {
      toast.error("Please select check-in/ check-out date..!");
      return;
    }
    else if (checkIn === checkOut) {
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
