import { Box, Grid, Typography } from "@mui/material";
import styles from "./TrendingCities.module.css";
import React from "react";
import { TrendingCityCard } from "./TrendingCityCard";
const cityArray = [
  {
    id: 1,
    city: "Santorini", 
    state: "Greece",
    rating: 4.7,
    review: 524,
    amount: 254,
    img: "https://www.holidayhypermarket.co.uk/wp-content/uploads/2020/01/TUR_ANT_05160LibertyHotelsLaraBeach-1-1.jpg",
  },
  {
    id: 2,
    city: "Mitilini",
    state: "Greece",
    rating: 3.5,
    review: 123,
    amount: 134,
    img: "https://www.sarajohn.org/wp-content/uploads/2017/01/sharaton.jpg",
  },
  {
    id: 3,
    city: "Assos",
    state: "Greece",
    rating: 4.3,
    review: 324,
    amount: 456,
    img: "https://th.bing.com/th/id/OIP.sR3_PDMZ53L0t8UlYKV1ewHaFa?pid=ImgDet&rs=1",
  },
  {
    id: 4,
    city: "Chalcis",
    state: "Greece",
    rating: 4.2,
    review: 324,
    amount: 345,
    img: "https://hotelsvillasdirect.com/wp-content/uploads/123973995_0.jpg",
  },
];

export const TrendingCities = () => {
  return (
    <Box className={styles.trendingCitiesContainer}>
      <Typography component={"h2"}>Trending Cities</Typography>
      <Typography component={"h5"}>
        The most searched for cities in Greece on HotelGuide
      </Typography>
      <Grid container rowSpacing={4} margin={"2vh auto"}>
        {cityArray.map((city) => (
          <TrendingCityCard {...city}  key ={city.id}/>
        ))}
      </Grid>
    </Box>
  );
};
