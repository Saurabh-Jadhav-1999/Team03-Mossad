import React, { Fragment } from "react";
import { Typography, Rating } from "@mui/material";
import { Box } from "@mui/material";
import star from "../../assets/images/HotelRatingIcon.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./HotelDetailsAndImage.module.css";
import ImageGrid from "../imageGrid/ImageGrid";

export const HotelDetailsAndImage = (props) => {
  
  return (
    <Fragment>
      <div>
        {/* <Breadcrumb /> */}
        <Box className={`${styles.box4}`}>
          <Typography variant="h4" className={`${styles.typo1}`}>
            {props.details.hotel_name}
          </Typography>
          <Box className={`${styles.box1}`}>
            <Box>
              <Typography
                variant="subtitle1"
                fontSize="13px"
                className={`${styles.typo2}`}
              >
                <img src={star} className={`${styles.img1}`} alt="" />
                {props.details.rating}
                <div className={`${styles.div1}`}>
                  {" "}
                  ({props.details.reviews}reviews)
                </div>
              </Typography>
            </Box>

            <div className={`${styles.box2}`}>
              <LocationOnOutlinedIcon style={{ marginRight: "10px" }} />
              <Typography variant="body2" className={`${styles.typo3}`}>
                {props.details.city}
              </Typography>
            </div>
          </Box>
        </Box>
        <Box
        //  className={`${styles.box3}`}
         >
          <ImageGrid />
        </Box>
        <Box className={`${styles.tagbox}`}>
          <div className={`${styles.tags1}`}>{props.details.tag1}</div>
          <div className={`${styles.tags2}`}>{props.details.tag2}</div>
          <div className={`${styles.tags3}`}>{props.details.tag3}</div>
          <div className={`${styles.tags4}`}>{props.details.tag4}</div>
          <div className={`${styles.tags5}`}>{props.details.tag5}</div>
          <div className={`${styles.rating}`}>
            <Rating
              name="read-only"
              value={props.details.rating}
              precision={0.1}
              readOnly
            />
          </div>
        </Box>
        <Box className={`${styles.roomTypeHeading}`}>
          <Typography variant="h5" style={{fontWeight:"bold"}}>Exclusive room in house</Typography>
          <Typography variant="h6" style={{fontWeight:"bold",color:"grey"}}>Kovalam,Kerala</Typography>
        </Box>
      </div>
    </Fragment>
  );
};
