import { HotelSearchFilters } from "../hotelSearchFilters/HotelSearchFilters";
import { HotelDetailsCard } from "../hotelDetailsCard/HotelDetailsCard";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Fragment } from "react";

export const HotelSearchList = () => {
  const hotellist = useSelector((state) => state.search.hotellist);

  return (
    <Fragment>
      <Stack direction={"row"} spacing={1} sx={{ marginTop: "40px" }}>
        <HotelSearchFilters />
        <Stack direction={"column"} spacing={2}>
          {hotellist.map(
            (item) => (

              (<HotelDetailsCard key={item.hotel_id} details={item} />)
            )
          )}
        </Stack>
      </Stack>
    </Fragment>
  );
};
