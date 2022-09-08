import { Box, Grid, Typography } from "@material-ui/core";
import { Stack } from "@mui/system";
import React from "react";
import Amenities from "./Amenities";
import style from "./Features.module.css";
import HotelFeatures from "./HotelFeatures";

export const Featuers = () => {
  return (
    <Box className={style.featureContainer} component="span">
      <HotelFeatures />
      <Amenities />
    </Box>
  );
};

