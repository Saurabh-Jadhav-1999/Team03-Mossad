import { LandingHotelPicture } from "../components/landingHotelPicture/LandingHotelPicture";
import { FeaturedDestinations } from "../components/featuredDestinations/FeaturedDestinations";
import Loader from "rsuite/Loader";
import LinearProgress from "@mui/material/LinearProgress";
import { Alert } from "@mui/material";
import Button from "@mui/material/Button";
import { Fragment, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
export const LandingPage = () => {
   
  return (
    <>
      <div>
     
      <LandingHotelPicture />
      <div style={{position:"relative",marginTop:"5vh !important"}}>
            <FeaturedDestinations sx={{marginTop: "50vh"}}/>
            </div>
  
      </div>
    </>
  );
};
