import styles from './landingHotelPicture.module.css'

export const LandingHotelPicture = () => {
    return <div className={styles.landingHotelImageContainer}>
        <div className={styles.imageCaption}>Book With Us
            And Enjoy your
            Journey!</div>
        <img src={require("./HotelDisplayPicture.png")} alt="HotelDisplayPicture" />
    </div>
}