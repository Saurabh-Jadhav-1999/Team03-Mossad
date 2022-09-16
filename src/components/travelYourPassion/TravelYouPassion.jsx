import { Container } from '@material-ui/core'
import { Typography } from '@mui/material'
import React, { Fragment } from 'react'
import styles from "./TravelYourPassion.module.css"
const TravelYouPassion = () => {
  return (
 <Fragment>
    <Container>
        <Container className={styles.Container}>
            <Typography variant='h4' className={styles.heading}>
                Travel Your Passion
            </Typography>
            <Typography variant="body1" className={`${styles.subHeading}`}>
                Destinations & Resorts according to your hobby
            </Typography>
        </Container>
      
    </Container>

 </Fragment>
  )
}

export default TravelYouPassion
