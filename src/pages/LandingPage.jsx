import { LandingHotelPicture } from '../components/landingHotelPicture/LandingHotelPicture'
import { FeaturedDestinations } from '../components/featuredDestinations/FeaturedDestinations'
import Loader from 'rsuite/Loader';
import LinearProgress from '@mui/material/LinearProgress';

export const LandingPage = () => {
    return (
        <>
      
         {/* <Loader speed="slow" content="Slow" /> */}
            <LandingHotelPicture />
            <FeaturedDestinations sx={{margin: '10px auto'}}/>
            {/* <LinearProgress color="secondary" /> */}
        </>
    )
}
