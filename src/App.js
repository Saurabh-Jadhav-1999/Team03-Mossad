import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { NavBar } from './components/navBar/NavBar';
import { HotelsListPage } from './pages/HotelsListPage';
import { Footer } from './components/footer/Footer'
import { BookingConfirmationDetailsPage } from './pages/BookingConfirmationDetailsPage';
import { HotelDetailsPage } from './pages/HotelDetailsPage';
// import { HotelDetailsCard } from './components/HotelDetails/HotelDetailsCard';
// import {TabBar} from './components/TabComponent/TabBar';

// const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/search-hotels' element={<HotelsListPage />} />
          <Route exact path='/hotel-details' element={<HotelDetailsPage />} />
          <Route exact path='/booking-confirmation' element={<BookingConfirmationDetailsPage />} />
          <Route path='*' element={<div><hr />NOT FOUND </div>} />
        </Routes>
        <Footer />
      </Router>

      {/* <HotelDetailsCard/> */}
      {/* <TabBar description={description}/> */}
    </>
  );
}
