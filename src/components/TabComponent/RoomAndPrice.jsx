import { Box, Typography } from "@material-ui/core";
import styles from "./Room.module.css";
import React, { useEffect } from "react";
import Room from "./Room";
import { useSelector } from "react-redux";
const offers = ["Free Wi-fi", "Breakfast for two people", "Non Refundable"];
export const RoomAndPrice = (props) => {
  
  const room_price_and_types = useSelector(
    (state) => state.getHotelDetails.hotelDetails
  );

  const hotellist = useSelector((state) => state.search.hotellist);
  const filterid = hotellist.filter((item) => item.hotel_id == props.id);
  const discounted_room_type = filterid[0].discounted_room_type;


  const roomtypes = [
    {
      name: "Double Room",
      room_type: "double_room",
      room_rate: room_price_and_types.double_room_rate,
    },
    {
      name: "Economy Room",
      room_type: "economy_room",
      room_rate: room_price_and_types.economy_room_rate,
    },
    {
      name: "Premium Room",
      room_type: "premium_room",
      room_rate: room_price_and_types.premium_room_rate,
    },
    {
      name: "Exclusive Room",
      room_type: "exclusive_room",
      room_rate: room_price_and_types.exclusive_room_rate,
    },
  ];

 

  const discountedRooms = roomtypes.map((item) => {
    if (discounted_room_type.includes(item.room_type)) {
      return {
        ...item,
        room_rate: item.room_rate - item.room_rate / 10,
        old_room_rate: item.room_rate,
      };
    }
    return item;
  });


  return (
    <Box className={styles.mainContainer}>
      <Typography className={styles.heading} component="span">
        Select Room
      </Typography>
      {discounted_room_type.length != 0
        ? discountedRooms.map((item) => (
            <Room
              name={item.name}
              key={item.room_type}
              roomType={item.room_type}
              offers={offers}
              offerRate={item.room_rate}
              basePrice={item.old_room_rate}
            />
          ))
        : (
        roomtypes.map((item) => (
            <Room
             discount={0}
              name={item.name}
              key={item.room_type}
              roomType={item.room_type}
              offers={offers}
              basePrice={item.room_rate }
              offerRate={item.room_rate}
           
            />
           
          )))}
    </Box>
  );
};