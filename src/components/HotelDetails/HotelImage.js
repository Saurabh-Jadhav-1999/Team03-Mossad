import { Box } from '@material-ui/core';
import React from 'react'
import style from './HotelImage.module.css'
const HotelImage = () => {
    return <Box className={style.img} 
    component='img'
    src="https://source.unsplash.com/random/800x800/?img=1" 
    alt="image not found">    
  </Box>;
}

export default HotelImage