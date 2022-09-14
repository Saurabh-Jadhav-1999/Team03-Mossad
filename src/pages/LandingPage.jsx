import { LandingHotelPicture } from "../components/landingHotelPicture/LandingHotelPicture";
import { FeaturedDestinations } from "../components/featuredDestinations/FeaturedDestinations";
import 'react-toastify/dist/ReactToastify.css';

export const LandingPage = () => {

  return (
    <>
      <div>

        <LandingHotelPicture />
        <div style={{ position: "relative", marginTop: "5vh !important" }}>
          <FeaturedDestinations sx={{ marginTop: "50vh" }} />
        </div>

      </div>
    </>
  )
}
