import { Box } from '@material-ui/core';
import React from 'react'
import styles from './HotelImage.module.css'

export const HotelImage = () => {
  return <Box className={styles.img}
    component='img'
    src="https://th.bing.com/th/id/OIP.IAfW3Uyo9LUn0Zx7qu-rfgHaE6?pid=ImgDet&rs=1"
    alt="image not found">
  </Box>;
}