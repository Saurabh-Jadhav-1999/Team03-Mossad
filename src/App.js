import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { NavBar } from "./components/navBar/NavBar";
import { HotelsListPage } from "./pages/HotelsListPage";
import { Footer } from "./components/footer/Footer";
import { BookingConfirmationDetailsPage } from "./pages/BookingConfirmationDetailsPage";
import { HotelDetailsPage } from "./pages/HotelDetailsPage";
import { getData } from './components/services/useAxios'
import Breadcrumb from "./components/breadcrumb/Breadcrumb";

export const App = () => {


  return (
    <>
      <Router>
        <NavBar />
        <Breadcrumb />
        <Routes>
          <Route exact path="/" element={<LandingPage name="Home" />} />
          <Route exact path="/search-hotels" element={<HotelsListPage name="HotelList" />} />
          <Route
            exact path="/booking-confirmation" element={<BookingConfirmationDetailsPage />} name="ConfirmPage"
          />
          <Route exact path="/hotel-details" element={<HotelDetailsPage name="DetailList" />} />
          <Route
            path="*"
            element={
              <div>
                <hr />
                NOT FOUND{" "}
              </div>
            }
          />

        </Routes>
        {/* <Breadcrumb /> */}

        <Footer />
      </Router>


    </>
  );
};
