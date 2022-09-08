import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "./Review.module.css";
import imgPath from "../../assets/images/ProfileReviewUserOneImg.png";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";
export const Review = (props) => {
  return (
    // <div>
    <Box className={styles.mainDiv}>
      <Typography component={"span"} className={styles.reviewHeading}>
        Latest Review
      </Typography>
      <Paper className={styles.reviewCard}>
        <Box className={styles.innerDiv}>
          {/* <img src='../../assets/images/ProfileReviewUserOneImg.png'/> */}
          <Box className={styles.imgDiv}>
            <Box>
              <img src={imgPath} alt="pic not found" />
            </Box>
            <Box className={styles.detailsDiv}>
              <Typography className={styles.userName} component="h3">
                {props.userName}
              </Typography>
              <Typography className={styles.userDetails} component="p">
                {props.userCountry}
              </Typography>
              <Typography className={styles.userDetails} component="p">
                {props.follwers} follewers,{props.reviews} Reviews
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={styles.innerDiv}>
          <Typography component='box'>
            <StarIcon className={styles.starIcon} />
            <StarIcon className={styles.starIcon} />
            <StarIcon className={styles.starIcon} />
            <StarIcon className={styles.starIcon} />
            <StarHalfIcon className={styles.starIcon} />
            <Typography className={styles.userDetails} component="span">
            {props.date}
          </Typography>
          </Typography>
          

          <Typography className={styles.userDetails}>
            {props.comment}
          </Typography>
          <Stack direction="row" justifyContent="space-between">
            <Button className={styles.button}> Comment</Button>
            <Button className={styles.button}> Like</Button>
            <Button className={styles.button}> Reply</Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
    // </div>
  );
};
