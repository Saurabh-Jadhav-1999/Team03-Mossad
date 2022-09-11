import { Box } from '@material-ui/core';
import React from 'react'
import style from './HotelImage.module.css'
const HotelImage = (props) => {
    return <Box className={style.img} 
    component='img'
    src={props.item.hotel_profile_picture} 
    alt="image not found">    
  </Box>;
}

export default HotelImage