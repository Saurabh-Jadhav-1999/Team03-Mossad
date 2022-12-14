import React, { Fragment } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { Rating } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./HotelDetailsAndImage.module.css";
import ImageGrid from "../imageGrid/ImageGrid";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Loading from "../loader/Loader"

export const HotelDetailsAndImage = (props) => {
  const status = useSelector((state) => state.getHotelDetails.status);
  const [img, setImg] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (status == "succeeded")
        setImg(true);
    }, 5000);
  }, [status])


  const hotelrating = (parseFloat(useSelector(state => state.getHotelDetails.hotelDetails.rating)).toFixed(1));

  const hoteldetails = useSelector(
    (state) => state.getHotelDetails.hotelDetails
  );

  return (
    <Fragment>
      {(status != "succeeded") ? (
        <div>
          <Loading />
          <Typography
            variant="h5"
            style={{ fontFamily: "inter", textAlign: "center", margin: "10vh auto" }}
          >
            Details are on the way !
          </Typography>
        </div>
      ) : (
        <div>
          <Box className={`${styles.box4}`}>
            <Typography variant="h4" className={`${styles.typo1}`}>
              {hoteldetails.hotel_name} {hoteldetails.city} {hoteldetails.state}
            </Typography>
            <Box className={`${styles.box1}`}>
              <Box style={{ display: "flex", justifyContent: "center", marginRight: "2%" }}>
                <Typography
                  variant="subtitle1"
                  fontSize="14px"
                  className={`${styles.typo2}`}
                >
                  <StarIcon sx={{ color: "#ff9c09" }} />

                  <span className={`${styles.div1}`}>
                    <span style={{ color: "black", marginRight: "1px" }}>{hotelrating}</span>  ({hoteldetails.total_reviews} reviews)</span>

                </Typography>
              </Box>
              <div className={`${styles.box2}`}>
                <LocationOnOutlinedIcon style={{ marginRight: "10px", color: "grey" }} />
                <Typography variant="body1" className={`${styles.typo3}`}>
                  {hoteldetails.address} {hoteldetails.pincode} {hoteldetails.country}
                </Typography>
              </div>
            </Box>
          </Box>
          <Box className={`${styles.box3}`}>
            {img === false ? (
              <CircularProgress color="info" sx={{ margin: "10vh 90vh" }} />
            ) : (
              <ImageGrid links={hoteldetails.hotel_images} stat={status} />
            )}
          </Box>
          <Box className={`${styles.tagbox}`} sx={{ textAlign: "center" }}>
            <div className={`${styles.tags1}`}>{hoteldetails.rating}</div>
            <div className={`${styles.tags2}`} >Perfect</div>
            <div className={`${styles.tags3}`}>Hotels</div>
            <div className={`${styles.tags4}`}>Top Value</div>
            <div className={`${styles.tags5}`}>Building</div>
            <div className={`${styles.rating}`}>

              <Rating
                name="read-only"
                value={hoteldetails.rating}
                precision={0.1}
                readOnly
                style={{
                  color: "#ff9c09",
                  fontSize: "25px"
                }}
              />

            </div>
          </Box>
          <Box className={`${styles.roomTypeHeading}`}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Exclusive room in house
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "light", color: "grey", fontSize: "16px" }}
            >
              {hoteldetails.city}, {hoteldetails.state}
            </Typography>
          </Box>
        </div>
      )
      }
    </Fragment >
  );
};
