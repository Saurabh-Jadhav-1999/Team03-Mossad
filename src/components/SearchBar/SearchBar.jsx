import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import CitySelector from "./CitySelector";
import DateSelector from "./DateSelector";
import styles from "./SearchBar.module.css";
import SearchButton from "./SearchButton";
import arrow from "./../../assets/images/ArrowImg.png";

export const SearchBar = () => {
  return (
    <Box className={styles.searchDiv}>
      <Stack className={styles.container}>
        <Grid item >
          <CitySelector />
        </Grid>
        {/* <Box className={styles.arrow} src={arrow} component="img"  style={{ zIndex: 99 }}/> */}
        <Grid item >
          <DateSelector />
        </Grid>
        <Grid item>
          <SearchButton />
        </Grid>
      </Stack>
    </Box>
  );
};
