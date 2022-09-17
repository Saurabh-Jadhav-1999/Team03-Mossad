import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import CitySelector from "./CitySelector";
import DateSelector from "./DateSelector";
import styles from "./SearchBar.module.css";
import { SearchButton } from "./SearchButton";
import arrow from "./../../assets/images/ArrowImg.png";
import { PersonSelector } from "./PersonSelector";

export const SearchBar = () => {
  return (
    <Box className={styles.searchDiv}>
      <Stack className={styles.container}>
        <Grid item className={styles.griditem1} >
          <CitySelector />
        </Grid>
        <Grid item className={styles.arrowBox}>
          <Box className={styles.arrow} src={arrow} component="img"/>
        </Grid>
         <Grid item >
          <DateSelector />
        </Grid>
        
         <Grid item>
          <PersonSelector />
        </Grid>
        <Grid item>
          <SearchButton />
        </Grid>  
      </Stack>
    </Box>
  );
};
