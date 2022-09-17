import "./App.css";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { NavBar } from "./components/navBar/NavBar";
import { HotelsListPage } from "./pages/HotelsListPage";
import { Footer } from "./components/footer/Footer";
import { BookingConfirmationDetailsPage } from "./pages/BookingConfirmationDetailsPage";
import { HotelDetailsPage } from "./pages/HotelDetailsPage";
import { Fragment } from "react";

import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const PrivateRoute=({children})=>{
  const token=useSelector(state=>state.login.token);

  return token?<Fragment>{children}</Fragment>:<Navigate to="/" replace/>

}

export const App = () => {

  return (
    <>
      <Router>
      <ToastContainer />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage name="Home" />} />

          <Route exact path="/search-hotels" element={<PrivateRoute><HotelsListPage name="HotelList" /></PrivateRoute>} />
          <Route
            exact path="/booking-confirmation" element={<PrivateRoute><BookingConfirmationDetailsPage /></PrivateRoute>} name="ConfirmPage"
          />
          <Route exact path="/hotel-details/*" element={<PrivateRoute><HotelDetailsPage name="DetailList" /></PrivateRoute>} />
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
        <Footer />
      </Router>


    </>
  );
};
