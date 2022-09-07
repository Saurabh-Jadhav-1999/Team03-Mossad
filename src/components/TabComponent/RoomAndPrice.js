import { Box, Typography } from '@material-ui/core'
import  style  from './Room.module.css'
import React from 'react'
import Room from './Room'
const offers=["Free Wi-fi","sdsd","sfdsfs"]
const RoomAndPrice = () => {
  return (
  <Box className={style.mainContainer}>
    <Typography className={style.heading}>
        Select Room
    </Typography>
    <Room roomType="Double Room"  offers={offers} offerRate={"230"} basePrice={"234"}/>
  </Box>
  )
}

export default RoomAndPrice