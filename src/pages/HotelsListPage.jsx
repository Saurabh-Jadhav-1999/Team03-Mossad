import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import { HotelSearchList } from "../components/hotelSearchList/HotelSearchList"
import { SearchBar } from "../components/searchBar/SearchBar"
import { Link } from "react-router-dom"
import { Navigate } from "react-router-dom"
export const HotelsListPage = () => {
  function navigate(path) {
    // event.preventDefault();
    // console.info("You clicked a breadcrumb.");
    // Navigate(path)
    
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      to="/"
      key="1"
      color="inherit"
      href="/"
      // onClick={()=> navigate('Home')}
      style={{ textDecoration: 'none' ,color:"grey"}}
    >
      Home
    </Link>,
    <Link
    to="/search-hotels"
      underline="hover"
      key="2"
      color="inherit"
      href="/search-hotels"
      // onClick={()=> navigate('HotelList')}
      style={{ textDecoration: 'none',color:"black" }}
    >
      Hotel List
    </Link>
  ];
  return (
    <>
    <Breadcrumb links={breadcrumbs}/>
      <SearchBar/>
      <HotelSearchList />
    </>
  )
}
