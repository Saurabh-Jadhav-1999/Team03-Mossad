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
    const notify = () => toast("Wow so easy !");
  return (
    <>
      <div>
      {/* <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div> */}
      {/* <Loader speed="slow" content="Slow" /> */}
      <LandingHotelPicture />
            <FeaturedDestinations sx={{margin: '10px auto'}}/>
      {/* <LinearProgress color="secondary" /> */}
      </div>
    </>
  );
};
