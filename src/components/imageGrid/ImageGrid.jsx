import React, { Fragment } from 'react'
import { Container, Typography, Grid, Rating, Link, ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import star from "../../assets/images/HotelRatingIcon.png";
import { maxHeight } from '@mui/system';
import styles from './ImageGrid.module.css'

const ImageGrid = () => {

  const images = [
    "https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/02/03/00/10/receptionists-5975962_1280.jpg",
  ];
  return (
    <Fragment>
      {/* <Grid container
            // lg={12} md={12}
            // xs={12} 
            rowSpacing={0}
            columnSpacing={2}
            columns={1}
            
            className={`${styles.gridcontainer2}`} >


            <Grid item lg={7} md={12} xs={9} zeroMinWidth>
              <img
                className={`${styles.img3}`}
                src={images[1]}
                alt="Hotelimages"
              // height="161vh"
              // width="300vw"
              /></Grid>
            <Grid item lg={7} md={9} xs={9} >
              <img
                className={`${styles.img5}`}
                // style={number}
                src={images[2]}
                alt="Hotelimages"
              // height="161vh"
              // width="300vw"
              /></Grid>
            <Grid item lg={7} md={7} xs={9}>
              <img
                className={`${styles.img4}`}
                src={images[3]}
                alt="Hotelimages"
              // height="161vh"
              // width="300vw"
              /></Grid>





          </Grid> */}

      <div className={styles.container}>
        <div className={styles.leftPane}>
          <img
            src="https://algedra.ae/files/blog/minimalism/shutterstock_102801122256.jpg"
            alt=""
            style={{ borderRadius: "50px 0px 0px 50px" }}
          />
        </div>
        <div className={styles.rightPane}>

          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASmcf18-IhnOC3fI-mm9WTAxsMN72uyfjDA&usqp=CAU"
              alt=""
              style={{ borderRadius: "0px 50px 0px 0px" }}
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASmcf18-IhnOC3fI-mm9WTAxsMN72uyfjDA&usqp=CAU"
              alt=""
              styles={{ borderRadius: "50px 0px 0px 50px " }}
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASmcf18-IhnOC3fI-mm9WTAxsMN72uyfjDA&usqp=CAU"
              alt=""
              style={{ borderRadius: "0px 0px 50px 0px" }}
            />
          </div>
        </div>
      </div>
      {/* 
      <div  style={{ flexDirection: 'column', height: "200px" ,overflowX :"hidden"}}>
        <Box  >
          <img
            className={`${styles.img3}`}
            src={images[1]}
            alt="Hotelimages"
          // height="161vh"
          // width="300vw"
          style={{maxHeight:"50px"}}
          />
        </Box>
        <Box sx={{ width: "20%" }}>
          <img
            className={`${styles.img5}`}
            // style={number}
            src={images[2]}
            alt="Hotelimages"
          // height="161vh"
          // width="300vw"
          />

        </Box>
        <Box sx={{ width: "20%" }}>
          <img
            className={`${styles.img4}`}
            src={images[3]}
            alt="Hotelimages"
          // height="161vh"
          // width="300vw"
          />
        </Box> */}

      {/* </div> */}


    </Fragment>
  )
}

export default ImageGrid