import React, { Fragment, props } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { Container, Typography, Grid, Rating, Link } from "@mui/material";
import { Box } from "@mui/material";
import star from "../../assets/images/HotelRatingIcon.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./HotelDetails.module.css";
import ImageGrid from "../../components/imageGrid/ImageGrid";

export const HotelDetails = (props) => {

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/ḥotellist"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/ḥotellist"
      onClick={handleClick}
    >
      Home
    </Link>,
  ];
  const images = [
    "https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_1280.jpg",
  ];
  const fstyle = {

    borderRadius: "50px"

  }

  return (
    <Fragment>
      <div>
        <Breadcrumb />
        <Box className={`${styles.box4}`}>
          <Typography
            variant="h4"
            className={`${styles.typo1}`}
          // style={{ fontWeight: "bold",marginTop:"20px" }}
          >
            {props.details.name}
          </Typography>
          <Box
            className={`${styles.box1}`}
          // style={{ display: "flex", justifyContent: "inline",marginTop:"20px" }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                fontSize="13px"
                className={`${styles.typo2}`}

              >
                <img
                  src={star}
                  className={`${styles.img1}`}
                  alt=''
                />
                {props.details.rating}
                <div
                  className={`${styles.div1}`}
                // style={{ color: "grey", marginLeft: "5px" }}
                >
                  {" "}
                  ({props.details.reviews} reviews)
                </div>
              </Typography>
            </Box>

            <div
              className={`${styles.box2}`}
            // style={{ display: "flex",
            //       justifyContent: "center",
            //       marginLeft: "5vw",}}
            >
              <LocationOnOutlinedIcon style={{ marginRight: "10px" }} />
              <Typography
                variant="body2"
                className={`${styles.typo3}`}
              // style={{
              // marginLeft:"25px"

              // }}
              >
                Beach Road,Kovalam 695527 India
              </Typography>
            </div>
          </Box>
        </Box>
        <Box
          className={`${styles.box3}`}

        >
          {/* <Grid
            container
            lg={7}
            md={12}
            // style={{ marginRight: "20px", borderRadius: "120px" }}
            className={`${styles.gridcontainer1}`}
          >
            <Grid
              item
              lg={11}
              md={11}
              // style={{ borderTopLeftRadius: "5px" }}
              className={`${styles.griditem1}`}
            >
             <Grid item lg={11} md={10} >
                <img
                  src={images[0]}
                  alt="Hotelimages"
                  // height="505vh"
                  // width="700vw"
                  className={`${styles.img2}`}
                // style={{ borderRadius: "50px 0px 0px 50px" }}
                />
              </Grid>
            </Grid>
          </Grid> */}
          {/* <Grid container
            lg={6} md={9}
            // xs={3} 
            rowSpacing={0}
            columnSpacing={0}
            className={`${styles.gridcontainer2}`} >


            <Grid item lg={5} md={12} xs={5}>
              <img
                className={`${styles.img3}`}
                src={images[1]}
                alt="Hotelimages"
              // height="161vh"
              // width="300vw"
              /></Grid>
            <Grid item lg={9} md={11} >
              <img
                className={`${styles.img5}`}
                // style={number}
                src={images[2]}
                alt="Hotelimages"
              // height="161vh"
              // width="300vw"
              /></Grid>
            <Grid item lg={9} md={11} >
              <img
                className={`${styles.img4}`}
                src={images[3]}
                alt="Hotelimages"
              // height="161vh"
              // width="300vw"
              /></Grid>





          </Grid> */}


          <ImageGrid />
        </Box>
        <Box className={`${styles.tagbox}`}>
          <div className={`${styles.tags1}`}>{props.details.tag1}</div>
          <div className={`${styles.tags2}`}>{props.details.tag2}</div>
          <div className={`${styles.tags3}`}>{props.details.tag3}</div>
          <div className={`${styles.tags4}`}>{props.details.tag4}</div>
          <div className={`${styles.tags5}`}>{props.details.tag5}</div>
          <div className={`${styles.rating}`}>
            <Rating name="read-only" value={props.details.rating} precision={0.1} readOnly />
          </div>
        </Box>
      </div>
    </Fragment>
  );
};
