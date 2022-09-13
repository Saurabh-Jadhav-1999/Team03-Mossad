import { HotelSearchFilters } from "../hotelSearchFilters/HotelSearchFilters";
import { HotelDetailsCard } from "../hotelDetailsCard/HotelDetailsCard";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Fragment, useState } from "react";
import Loading from "../loader/Loader";
import Typography from "@mui/material/Typography";
const details = {
  cityName: "Kerala,India",
  hotelName: "The Leela Kovalam",
  rating: 4.2,
  reviews: 223,
  location: "Beach Road Kovalam 563465India",
  date: "15.09.2022-10.09.2022",
  departure: "Kochi",
};

export const HotelSearchList = () => {

  const hotelList = useSelector((state) => state.search.hotellist);
  const status = useSelector((state) => state.search.status);
  console.log("in hotelSearchList page",hotelList);
  return (
    <Fragment>
      {/* <CircularProgress color="secondary" /> */}
      <Stack direction={"row"} spacing={1} sx={{ marginTop: "40px" }}>
        <HotelSearchFilters />
        <Stack direction={"column"} spacing={2}>
          {status=="rejected"?
          ( <div style={{marginLeft:"20vw",display:"grid",justifyContent:"center"}}>
          <Typography variant="h5" style={{fontFamily:"inter",marginLeft:"80px"}}>    Hotels not found :( </Typography>
          <Typography variant="h5" style={{fontFamily:"inter",}}> Please change your search details!</Typography>
          </div> ):(
          status == "loading" ? (
            // <CircularProgress color="secondary" />
            <div style={{marginLeft:"20vw"}}>
              <Loading />
              <Typography variant="h5" style={{fontFamily:"inter",}}>Wait a moment, We are working :)</Typography>
            </div>
          ) : (
            hotelList.map((item) => (
              <HotelDetailsCard key={item.hotel_id} details={item} />
            ))
          ))}

          {/* <HotelDetailsCard  details={details} /> */}
        </Stack>
      </Stack>
    </Fragment>
  );
};
