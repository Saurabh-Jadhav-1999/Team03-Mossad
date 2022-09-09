import { LandingHotelPicture } from '../components/landingHotelPicture/LandingHotelPicture'
import { FeaturedDestinations } from '../components/featuredDestinations/FeaturedDestinations'

export const LandingPage = () => {
    return (
        <>
            <LandingHotelPicture />
            <FeaturedDestinations sx={{margin: '10px auto'}}/>
        </>
    )
}
