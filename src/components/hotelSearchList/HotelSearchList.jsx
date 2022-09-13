import { HotelSearchFilters } from "../hotelSearchFilters/HotelSearchFilters";
import { HotelDetailsCard } from "../hotelDetailsCard/HotelDetailsCard";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import Loading from "../loader/Loader";
import Typography from "@mui/material/Typography";

export const HotelSearchList = () => {
  const hotellist = useSelector((state) => state.search.hotellist);
  // useEffect(() => {
  // }, [hotellist])

  const status = useSelector((state) => state.search.status);

  return (
    <Fragment>
      <Stack direction={"row"} spacing={1} sx={{ marginTop: "40px" }}>
        <HotelSearchFilters />
        <Stack direction={"column"} spacing={2}>
          {status === "rejected" ?
            (<div style={{ marginLeft: "20vw", display: "grid", justifyContent: "center" }}>
              <Typography variant="h5" style={{ fontFamily: "inter", marginLeft: "80px" }}>    Hotels not found :( </Typography>
              <Typography variant="h5" style={{ fontFamily: "inter", }}> Please change your search details!</Typography>
            </div>) : (
              status === "loading" ? (
                <div style={{ marginLeft: "20vw" }}>
                  <Loading />
                  <Typography variant="h5" style={{ fontFamily: "inter", }}>Wait a moment, We are working :)</Typography>
                </div>
              ) : (hotellist.map((item) => (
                <HotelDetailsCard key={item.hotel_id} details={item} />
              ))
              ))}
        </Stack>
      </Stack>
    </Fragment >
  );
};
