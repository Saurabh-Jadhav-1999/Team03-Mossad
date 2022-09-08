import { Box } from '@material-ui/core';
import React from 'react'
import style from './HotelImage.module.css'
const HotelImage = () => {
    return <Box className={style.img} 
    component='img'
    src="https://th.bing.com/th/id/OIP.IAfW3Uyo9LUn0Zx7qu-rfgHaE6?pid=ImgDet&rs=1" 
    alt="image not found">    
  </Box>;
}

export default HotelImage