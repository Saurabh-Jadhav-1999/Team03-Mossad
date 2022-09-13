import React, { Fragment } from "react";
import { Typography, Rating } from "@mui/material";
import { Box } from "@mui/material";
import star from "../../assets/images/HotelRatingIcon.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./HotelDetailsAndImage.module.css";
import ImageGrid from "../imageGrid/ImageGrid";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import Loader from "rsuite/Loader";
import CircularProgress from "@mui/material/CircularProgress";
// import LinearProgress from '@mui/material/LinearProgress';
export const HotelDetailsAndImage = (props) => {
  const [img, setImg] = useState(false);
  setTimeout(() => {
    setImg(true);
  }, 13000);

  const status = useSelector((state) => state.getHotelDetails.status);
  // console.log(status, "Status of api ");
  const hoteldetails = useSelector(
    (state) => state.getHotelDetails.hotelDetails
  );
  return (
    <Fragment>
      <div>
        {/* <Breadcrumb /> */}
        <Box className={`${styles.box4}`}>
          <Typography variant="h4" className={`${styles.typo1}`}>
            {hoteldetails.hotel_name} {hoteldetails.city} {hoteldetails.state}
          </Typography>
          <Box className={`${styles.box1}`}>
            <Box style={{ display: "flex", justifyContent: "center",marginRight:"2%" }}>
             
              <Typography
                variant="subtitle1"
                fontSize="14px"
                className={`${styles.typo2}`}
              >
                 <img src={star} className={`${styles.img1}`} alt="" />
                 
                <span className={`${styles.div1}`}>
                <span style={{color:"black",marginRight:"6px"}}>{hoteldetails.rating}</span>  (234 reviews)
           
                </span>
              </Typography>
            </Box>

            <div className={`${styles.box2}`}>
              <LocationOnOutlinedIcon style={{ marginRight: "10px" }} />
              <Typography variant="body1" className={`${styles.typo3}`}>
                {hoteldetails.address} {hoteldetails.pincode} {hoteldetails.country}
              </Typography>
            </div>
          </Box>
        </Box>
        <Box className={`${styles.box3}`}>
          {img === false ? (
            <CircularProgress color="secondary" />
          ) : (
            <ImageGrid links={hoteldetails.hotel_images} />
          )}
        
        </Box>
        <Box className={`${styles.tagbox}`}>
          <div className={`${styles.tags1}`}>{hoteldetails.rating}</div>
          <div className={`${styles.tags2}`}>Perfect</div>
          <div className={`${styles.tags3}`}>Hotels</div>
          <div className={`${styles.tags4}`}>Top Value</div>
          <div className={`${styles.tags5}`}>Building</div>
          <div className={`${styles.rating}`}>
            {img === true ? (
              <Rating
                name="read-only"
                value={hoteldetails.rating}
                precision={0.1}
                readOnly
              />
            ) : null}
          </div>
        </Box>
        <Box className={`${styles.roomTypeHeading}`}>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Exclusive room in house
          </Typography>
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", color: "grey" }}
          >
            {hoteldetails.city},{hoteldetails.state}
          </Typography>
        </Box>
      </div>
    </Fragment>
  );
};
