import { HotelSearchFilters } from "../hotelSearchFilters/HotelSearchFilters";
import { HotelDetailsCard } from "../hotelDetailsCard/HotelDetailsCard";
import { Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import Loading from "../loader/Loader";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export const HotelSearchList = () => {
  let dispatch = useDispatch();
  const hotelList = useSelector((state) => state.search.hotellist);
  const filters = useSelector((state) => state.search.filters);
  const [hotelDetailedList, setHotelDetailedList] = useState([]);


  const filterVal = "no_prepayment";

  useEffect(() => {
    setHotelDetailedList(hotelList);
  }, [hotelList]);

  useEffect(() => {
    // console.log("Filter value: ", filters);
  }, [filters]);

  const status = useSelector((state) => state.search.status);
  return (
    <Fragment>
      <Stack direction={"row"} spacing={1} sx={{ marginTop: "40px" }}>
        <HotelSearchFilters />
        <Stack direction={"column"} spacing={2}>
          {status == "rejected" ? (
            <div
              style={{
                marginLeft: "20vw",
                display: "grid",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                style={{ fontFamily: "inter", marginLeft: "0px" }}
              >
                {" "}
                Hotels not found :({" "}
              </Typography>
              <Typography variant="h5" style={{ fontFamily: "inter" }}>
                {" "}
                Please change your search details!
              </Typography>
            </div>
          ) : status == "loading" ? (
            // <CircularProgress color="secondary" />
            <div style={{ marginLeft: "20vw" }}>
              <Loading />
              <Typography variant="h5" style={{ fontFamily: "inter" }}>
                Wait a moment, We are working{" "}
              </Typography>
            </div>
          ) : (
            hotelList.map((item) => (
              <HotelDetailsCard key={item.hotel_id} details={item} />
            ))
          )}
        </Stack>
      </Stack>
    </Fragment>
  );
};
