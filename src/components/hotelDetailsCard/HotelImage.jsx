import { Box } from '@material-ui/core';
import React from 'react'
import styles from './HotelImage.module.css'

export const HotelImage = () => {
  return <Box className={styles.hotelImage} >
    <img src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
      alt="pic-not found" />
  </Box>;
}