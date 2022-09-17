import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import styles from "./TrendingCities.module.css";
const imgLocation ='https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'


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
                  <Typography component={"span"}>({props.review})</Typography>
                </Box>
                <Typography className={styles.amount}>
                  ${props.amount}
                  <Typography component={"span"}>/night</Typography>
                </Typography>
                <button type='button' className={styles.bookBtn}>Book Now</button>
              </Box>
          </Paper>
        </Grid>
  )
}

