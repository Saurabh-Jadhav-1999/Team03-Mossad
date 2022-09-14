import { Box } from '@material-ui/core';
import React from 'react'
import styles from './HotelImage.module.css'

export const HotelImage = (props) => {
  return <Box className={styles.img}
    component='img'
    src={props.imgLink}
    alt="image not found">
  </Box>;
}