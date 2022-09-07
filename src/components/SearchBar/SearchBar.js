import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import CitySelector from "./CitySelector";
import DateSelector from "./DateSelector";
import styles from "./SearchBar.module.css"
import SearchButton from "./SearchButton";
// import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import arrow from "./../../assets/images/ArrowImg.png"

const SearchBar = () => {
    return (
        <Box className={styles.searchDiv}>
            <Stack className={styles.container}>
            <Grid item style={{zIndex:99}}>
              <CitySelector />
            </Grid>
            {/* <SyncAltOutlinedIcon className={styles.arrow}  /> */}
            <Box className="styles.arrow" src={arrow} component="img"/>
           <Grid item>
              <DateSelector />
            </Grid>
            <Grid item>
              <SearchButton />
            </Grid>
          </Stack>  
        
        </Box>
      );
}

export default SearchBar