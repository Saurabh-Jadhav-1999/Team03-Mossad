import { LandingHotelPicture } from "../components/landingHotelPicture/LandingHotelPicture";
import { FeaturedDestinations } from "../components/featuredDestinations/FeaturedDestinations";
import 'react-toastify/dist/ReactToastify.css';

export const LandingPage = () => {
  return (
    <>
      <LandingHotelPicture />
      <FeaturedDestinations sx={{ margin: '10px auto' }} />
    </>
  )
}
