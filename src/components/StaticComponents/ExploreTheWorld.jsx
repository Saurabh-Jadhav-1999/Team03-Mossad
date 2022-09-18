import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { SuggestedHotelCard } from "./SuggestedHotelCard";
import styles from "./SuggestedHotels.module.css";
const placeList = [
  {
    id: 1,
    hotel_profile_picture:
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600",
    average_rating: 3.3,
    review: 324,
    hotel_name: "Comfort Space",
    base_price: 343,
    hotel_city: "Turkey",
    hotel_state: "Mamarus",
    available_rooms:"2342"
  },
  {
    id: 2,
    hotel_profile_picture:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600",
    average_rating: 4.7,
    review: 324,
    hotel_name: "Comfort Space",
    base_price: 343,
    hotel_city: "Manhattan",
    hotel_state: "New York",
    available_rooms:"3243"

  },
  {
    id: 3,
    hotel_profile_picture:
      "https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=600",
    average_rating: 4.8,
    review: 324,
    hotel_name: "Comfort Space",
    base_price: 343,
    hotel_city: "Greece",
    hotel_state: "Pireas",
    available_rooms:"42"

  },
  {
    id: 4,
    hotel_profile_picture:
      "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
    average_rating: 4.3,
    review: 324,
    hotel_name: "Comfort Space",
    base_price: 343,
    hotel_city: "Sri Lanka",
    hotel_state: "Nigombo",
    available_rooms:"42"

  },
];
export const ExploreTheWorld = () => {
  return (
    <Box className={styles.suggestedHotelsMainBox}>
      <Typography component={"h1"}>Explore the World</Typography>
      <Grid container spacing={3}>
        {placeList.map((item) => {
          return <SuggestedHotelCard details={item} key={item.id} />;
        })}
      </Grid>
    </Box>
  );
};
