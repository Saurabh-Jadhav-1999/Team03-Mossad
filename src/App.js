import './App.css';
import HotelDetails from './components/HotelDetails/HotelDetails';
import SearchBar from './components/SearchBar/SearchBar';
import TabBar from './components/TabComponent/TabBar';
const description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
export const App = () => {
  return (
    <>
      {/* Start Coding Here */}
   
      <SearchBar />
      {/* <HotelDetails/> */}
      {/* <TabBar description={description}/> */}
    </>
  );
}
