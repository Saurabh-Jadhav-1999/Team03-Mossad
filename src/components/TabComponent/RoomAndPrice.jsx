import { Box, Typography } from "@material-ui/core";
import styles from "./Room.module.css";
import React from "react";
import Room from "./Room";
import { useSelector } from "react-redux";
const offers = ["Free Wi-fi", "Breakfast for two people", "Non Refundable"];
export const RoomAndPrice = () => {

  const room_price_and_types = useSelector(
    (state) => state.getHotelDetails.hotelDetails
  );
  const roomtypes = [
    {
      room_type: "Double Room",
      room_rate: room_price_and_types.double_room_rate,
    },
    {
      room_type: "Economy Room",
      room_rate: room_price_and_types.economy_room_rate,
    },
    {
      room_type: "Premium Room",
      room_rate: room_price_and_types.premium_room_rate,
    },
    {
      room_type: "Exclusive Room",
      room_rate: room_price_and_types.exclusive_room_rate,
    },
  ];
  // console.log(roomtypes,"roomtypes array new")
  // roomtypes.push("double_room_rate":room_price_and_types.double_room_rate);
  // console.log(roomtypes, "roomtypes array from roomandprice");
  return (
    <Box className={styles.mainContainer}>
      <Typography className={styles.heading} component="span">
        Select Room
      </Typography>
      {
        roomtypes.map((item) => (
          <Room
            key={item.hotel_id}
            roomType={item.room_type}
            offers={offers}
            offerRate={"120"}
            basePrice={item.room_rate}
          />
        ))

        // <Room
        //   roomType="Exclusive"
        //   offers={offers}
        //   offerRate={"120"}
        //   basePrice={"120"}
        // />;
      }
    </Box>
  );
};
