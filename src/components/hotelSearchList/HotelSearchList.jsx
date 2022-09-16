import { HotelSearchFilters } from "../hotelSearchFilters/HotelSearchFilters";
import { HotelDetailsCard } from "../hotelDetailsCard/HotelDetailsCard";
import { Button, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import Loading from "../loader/Loader";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import styles from "./ViewAllButton.module.css";
import { Box } from "@mui/system";
import loadingIcon from "../../assets/images/loadingIcon.png";
export const HotelSearchList = () => {
  const hotelList = useSelector((state) => state.search.hotellist);
  const filters = useSelector((state) => state.search.filters);
  const [hotelDetailedList, setHotelDetailedList] = useState([]);
  const [showMore, setshowMore] = useState(true);
  const [displayList, setDisplayList] = useState([]);
  const filterVal = "no_prepayment";


  useEffect(() => {
    setHotelDetailedList(hotelList);
    const firstThree = hotelList.map((item, index) => {
      if (index < 3) {
        return <HotelDetailsCard key={item.hotel_id} details={item} />;
      }
    });
    if(hotelList.leng<3)
    setshowMore(false);
    setDisplayList(firstThree);

  }, [hotelList]);

 

  function showMoreHandler() {
    const allList = hotelList.map((item) => (
      <HotelDetailsCard key={item.hotel_id} details={item} />
    ));
    setDisplayList(allList);
    setshowMore(false);
  }

  const status = useSelector((state) => state.search.status);
  return (
    <Fragment>
      <Stack direction={"row"} spacing={1} sx={{ marginTop: "40px" }}>
        <HotelSearchFilters />
        <Stack direction={"column"} spacing={2}>
          {status === "rejected" ? (
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
                Hotels not found :(
              </Typography>
              <Typography variant="h5" style={{ fontFamily: "inter" }}>
                Please change your search details!
              </Typography>
            </div>
          ) : status == "loading" ? (
            <div style={{ marginLeft: "20vw" }}>
              <Loading />
              <Typography variant="h5" style={{ fontFamily: "inter" }}>
                Wait a moment, We are working
              </Typography>
            </div>
          ) : (
            <>
              {displayList}
              {showMore && (
                <Box className={styles.viewAllBtn}>
                  <Button
                    className={styles.Btn}
                    // onClick={() => setshowMore(false)}
                    onClick={showMoreHandler}
                  >
                    <img src={loadingIcon} className={styles.btnIcon} />
                    View All
                  </Button>
                </Box>
              )}
            </>
          )}
        </Stack>
      </Stack>
    </Fragment>
  );
};
