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

// import {TabBar} from './components/tabComponent/TabBar';

// const description = `The Raviz Kovalam sits on a cliff, offering panoramic views of the Kovalam shoreline and the Arabian Sea. It is steps away from a private beach, and features a spa.\n
// Rooms at The Raviz Kovalam Beach combine wooden décor with modern amenities like a flat-screen TV and tea/coffee making facilities. Each room provides views of the garden or the sea.\n
// The outdoor pool and the fitness centre both overlook the sea. The Raviz Kovalam also has a game room and tennis court. Travel services include tour and ticketing arrangements and car rental.\n`
export const App = () => {
  useEffect(() => {
    const userData = {
      email: "johndoe@gmail.com",
      password: "johndoe@123",
    };
    console.log("hii");
    async function Login() {
      // fetch("http://192.168.68.147:5000/login", {
      //   method: "post",
      // body: JSON.stringify({
      //   email: "johndoe@gmail.com",
      //   password: "johndoe@123",
      // }),
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //   });

      axios
        .post("https://hotelbooking-backend.herokuapp.com/login", {
          body: userData,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        })
        // axios.post("https://reqres.in/api/users?page=2", {userData})
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err));
    }
    Login();
  }, []);
  /*

axios.post("https://reqres.in/api/users?page=2", {

      

      "email": "eve.holt@reqres.in",

      "password": "cityslicka"

        

  })

*/

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/search-hotels" element={<HotelsListPage />} />
          <Route
            exact
            path="/booking-confirmation"
            element={<BookingConfirmationDetailsPage />}
          />
          <Route
            path="*"
            element={
              <div>
                <hr />
                NOT FOUND{" "}
              </div>
            }
          />
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/search-hotels' element={<HotelsListPage />} />
          <Route exact path='/hotel-details' element={<HotelDetailsPage />} />
          <Route exact path='/booking-confirmation' element={<BookingConfirmationDetailsPage />} />
          <Route path='*' element={<div><hr />NOT FOUND </div>} />
        </Routes>
        <Footer />
      </Router>

      {/* <TabBar description={description}/> */}
    </>
  );
};
