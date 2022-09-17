import { Box } from "@material-ui/core";
import React from "react";
import Amenities from "./Amenities";
import style from "./Features.module.css";
import HotelFeatures from "./HotelFeatures";

export const Featuers = () => {

  // console.log("features",aminites);
  return (
    <Box className={style.featureContainer} component="span">
      <HotelFeatures />
      <Amenities />
    </Box>
  );
};

