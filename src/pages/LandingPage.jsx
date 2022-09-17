import { LandingHotelPicture } from "../components/landingHotelPicture/LandingHotelPicture";
import { FeaturedDestinations } from "../components/featuredDestinations/FeaturedDestinations";
import "react-toastify/dist/ReactToastify.css";
import { SuggestedHotels } from "../components/StaticComponents/SuggestedHotels";
import { fetchSuggestedHotels } from "../slices/suggestedHotels";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {TravelYourPassion} from "../components/travelYourPassion/TravelYourPassion";

export const LandingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSuggestedHotels());
  }, []);

  return (
    <>
      <div>
   
     
        <LandingHotelPicture />
        <div style={{ position: "relative", marginTop: "5vh !important" }}>
          <SuggestedHotels />
          <FeaturedDestinations sx={{ marginTop: "50vh" }} />
        </div>
        <TravelYourPassion/>
      </div>
    </>
  );
};
