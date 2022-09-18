import { Box, Grid, Paper, Typography } from "@mui/material";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import styles from "./TrendingCities.module.css";

export const TrendingCityCard = (props) => {
  return (
    <Grid item lg={6}>
      <Paper className={styles.card}>
        <Box>
          <img src={props.img} alt="" />
        </Box>
        <Box className={styles.dataDiv}>
          <Typography component={"h3"}>{props.city},{props.state}</Typography>
          <Box className={styles.ratingDiv}>
            <StarOutlinedIcon className={styles.starIcon} />
            <Typography component={"h6"}>{props.rating}</Typography>
            <Typography component={"span"} className={styles.perNightLable}>({props.review})</Typography>
          </Box>
          <Typography className={styles.amount}>
            ${props.amount}
            <Typography component={"span"} className={styles.perNightLable}>/night</Typography>
          </Typography>
          <button type='button' className={styles.bookBtn}>Book Now</button>
        </Box>
      </Paper>
    </Grid>
  )
}

