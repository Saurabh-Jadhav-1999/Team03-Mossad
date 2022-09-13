import { HotelSearchFilters } from "../hotelSearchFilters/HotelSearchFilters";
import { HotelDetailsCard } from "../hotelDetailsCard/HotelDetailsCard";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Fragment ,useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';


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
  const [img, setImg] = useState(false);
  const hotellist = useSelector((state) => state.search.hotellist);
  setTimeout(() => {
    setImg(true);
  }, 4000);


  return (
    <Fragment>
      {/* <CircularProgress color="secondary" /> */}
      <Stack direction={"row"} spacing={1} sx={{ marginTop: "40px" }}>
        <HotelSearchFilters />
        <Stack direction={"column"} spacing={2}>
          {img === false ? (
          <CircularProgress color="secondary" />
          ) : (
            hotellist.map((item) => (
              <HotelDetailsCard key={item.hotel_id} details={item} />
            ))
          )}

          {/* <HotelDetailsCard  details={details} /> */}
        </Stack>
      </Stack>
    </Fragment>
  );
};
