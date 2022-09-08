import React, { Fragment } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { Typography, Rating } from "@mui/material";
import { Box } from "@mui/material";
import star from "../../assets/images/HotelRatingIcon.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./HotelDetailsAndImage.module.css";
import ImageGrid from "../imageGrid/ImageGrid";

export const HotelDetailsAndImage = (props) => {
  // function handleClick(event) {
  //   event.preventDefault();
  //   console.info("You clicked a breadcrumb.");
  // }
  // const breadcrumbs = [
  //   <Link
  //     underline="hover"
  //     key="1"
  //     color="inherit"
  //     href="/ḥotellist"
  //     onClick={handleClick}
  //   >
  //     Home
  //   </Link>,
  //   <Link
  //     underline="hover"
  //     key="2"
  //     color="inherit"
  //     href="/ḥotellist"
  //     onClick={handleClick}
  //   >
  //     Home
  //   </Link>,
  // ];
  // const images = [
  //   "https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_1280.jpg",
  //   "https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_1280.jpg",
  // ];
  // const fstyle = {

  //   borderRadius: "50px"

  // }

  return (
    <Fragment>
      <div>
        <Breadcrumb />
        <Box className={`${styles.box4}`}>
          <Typography variant="h4" className={`${styles.typo1}`}>
            {props.details.name}
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
                  ({props.details.reviews} reviews)
                </div>
              </Typography>
            </Box>

            <div className={`${styles.box2}`}>
              <LocationOnOutlinedIcon style={{ marginRight: "10px" }} />
              <Typography variant="body2" className={`${styles.typo3}`}>
                Beach Road,Kovalam 695527 India
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
      </div>
    </Fragment>
  );
};
