import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Navigate } from "react-router-dom";
const Breadcrumb = (props) => {
  function navigate(path) {
    // event.preventDefault();
    // console.info("You clicked a breadcrumb.");
    Navigate(path)
    
  }
const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={()=> console.log("navigated") }
    >
      Home
    </Link>,
    // <Link
    //   underline="hover"
    //   key="2"
    //   color="inherit"
    //   href="/search-hotels"
    //   onClick={()=> navigate('HotelList')}
    // >
    //   Hotel List
    // </Link>,
    // <Link
    //   underline="hover"
    //   key="3"
    //   color="inherit"
    //   href="/hotel-details"
    //   onClick={()=> navigate('DetailList')}
    // >
    //   Hotel Details
    // </Link>,
    // <Link
    //   underline="hover"
    //   key="4"
    //   color="inherit"
    //   href="/booking-confirmation"
    //   onClick={()=> navigate('ConfirmPage')}
    // >
    //   Congratulations
    // </Link>
  ];
 
  return (
    <div >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {props.links}
      </Breadcrumbs>
    </div>
  );
};


export default Breadcrumb;
