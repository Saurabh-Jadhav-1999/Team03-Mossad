import * as React from 'react';
import { Box, Stack, Grid, Paper } from '@mui/material';
import { Typography } from '@material-ui/core';
import styles from "./SearchBestPlaces.module.css"

export const SearchBestPlaces = () => {
    return (
        <Box className={styles.searchBestPlaces}>
            <Typography component={"h2"}>Search the best places in the world</Typography>
            <Typography component={"h5"}>
                if you're looking for places for a vacation, we are here to guide to you
            </Typography>
            <Typography component={"h5"}>
                to book the book hotels in advance.
            </Typography>

            <Grid container className={styles.imgCardContainer}>
                {itemData.map((place) => {
                    return (
                        <Grid item lg={3} key={place.title}>
                            <Paper className={styles.imgCard} elevation={0}>
                                <Stack>
                                    <Typography className={styles.imgCard_img}><img src={place.img} alt="" /></Typography>
                                    <Typography className={styles.title}>{place.title}</Typography>
                                    <Typography className={styles.numberOfHotels}>{place.numberOfHotels}</Typography>
                                </Stack>
                            </Paper>
                        </Grid>)
                }
                )}
            </Grid>
        </Box>
    );
}

//Image Data to be rendered on screen
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        title: 'Batu, East Java',
        numberOfHotels: '86 Properties'
    },
    {
        img: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzdGluYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        title: 'Goa, India',
        numberOfHotels: '900 Properties'
    },
    {
        img: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Budapest, Hungary',
        numberOfHotels: '200 Properties'
    },
    {
        img: 'https://images.unsplash.com/photo-1467226632440-65f0b4957563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80',
        title: 'New Santorini, Greece',
        numberOfHotels: '300 Properties'
    },
    {
        img: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',
        title: 'Lozari Beach, France',
        numberOfHotels: '123 Properties'
    },
    {
        img: 'https://images.unsplash.com/photo-1592345279419-959d784e8aad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc3RpbmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        title: 'Rome, Italy',
        numberOfHotels: '867 Properties'
    },
    {
        img: 'https://images.unsplash.com/photo-1518787289325-94c6917b88ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc3RpbmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        title: 'Urban, Vienna',
        numberOfHotels: '643 Properties'
    },
    {
        img: 'https://images.unsplash.com/photo-1518787289325-94c6917b88ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc3RpbmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
        title: 'Tropea, Italy',
        numberOfHotels: '567 Properties'
    }
];
