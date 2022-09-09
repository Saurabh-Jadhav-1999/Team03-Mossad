import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { NavBar } from "./components/navBar/NavBar";
import { HotelsListPage } from "./pages/HotelsListPage";
import { Footer } from "./components/footer/Footer";
import { BookingConfirmationDetailsPage } from "./pages/BookingConfirmationDetailsPage";
import { HotelDetailsPage } from "./pages/HotelDetailsPage";
import { useEffect } from "react";
import axios from "axios";
import { getData } from './components/services/useAxios'
import Breadcrumb from "./components/breadcrumb/Breadcrumb";

export const App = () => {
  // useEffect(() => {
  //   const userData = {
  //     email: "johndoe@gmail.com",
  //     password: "johndoe@123",
  //   };
  //   async function Login() {
  //     const data=JSON.stringify({"city_name":"p"});
  //     console.log("data",data)
  //     axios
  //       .get("https://hotelbooking-backend.herokuapp.com/getCityList", data)
  //       .then((response) => {
  //         // console.log(response.data["x-auth-token"]);   
  //         //       to access x-auth token
  //         console.table(response.data);   

  //       })
  //       .catch((err) => console.log(err));
  //   }
  //   Login();
  // }, []);

  //GetData axios
  useEffect(() => {

    const userData = {

      email: "johndoe@gmail.com",

      password: "johndoe@123",

    };

    async function Login() {

      // const data=JSON.stringify({"city_name":"p"});

      // console.log("data",data)

      // axios.post("https://hotelbooking-backend.herokuapp.com/login", userData)

      axios({

        url: "https://hotelbooking-backend.herokuapp.com/login",

        method: "post",

        data: { email: "johndoe@gmail.com", password: "johndoe@123" },

      })

        .then((response) => {

          console.log(response.data["x-auth-token"]);
          //       to access x-auth token
          // console.table(response);

        })
        .catch((err) => console.log(err));
    }
    Login();
  }, []);

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
