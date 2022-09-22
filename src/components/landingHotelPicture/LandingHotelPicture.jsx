import styles from './landingHotelPicture.module.css'
import {SearchBar} from '../SearchBar/SearchBar'

export const LandingHotelPicture = () => {
    return <div className={styles.landingHotelImageContainer}>
        <div className={styles.imageCaption}>Book With Us
            And Enjoy your
            Journey!</div>
        <img src={require("./HotelDisplayPicture.png")} alt="HotelDisplayPicture" />
        <div className={`${styles.searchBar}`}>
        <SearchBar  />
        </div>
    </div>
}