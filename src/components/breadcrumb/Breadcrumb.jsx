import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const Breadcrumb = (props) => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/hotellist"
      onClick={handleClick}
    >
      Hotel List
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/hoteldetails"
      onClick={handleClick}
    >
      Hotel Details
    </Link>,
    <Link
      underline="hover"
      key="4"
      color="inherit"
      href="/confirmation"
      onClick={handleClick}
    >
      Congratulations
    </Link>
  ];
 
  return (
    <div >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
};


export default Breadcrumb;
