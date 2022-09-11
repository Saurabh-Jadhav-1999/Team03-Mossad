import { Button } from '@mui/material'
import React from 'react';
import { Link,Navigate } from "react-router-dom";
import style from './SearchButton.module.css';
import {useSelector,useDispatch} from "react-redux";
import {setLocation,fetchHotelList} from './../../slices/searchSlice' ;




function navigate(path) {
 
  Navigate(path)
  
}
// onClick={()=> navigate('Home')}
   
 
//       onClick={()=> navigate('DetailList')}
 
//       onClick={()=> navigate('ConfirmPage')}
function SearchButton() 
{
  const dispatch=useDispatch();
  const hotellist=useSelector(state=>state.search.hotellist);
  const location=useSelector(state=>state.search.location)
  const checkIn=useSelector(state=>state.search.checkIn);
  const checkOut=useSelector(state=>state.search.checkOut);
  return (
<>
<Link  className={style.searchBtn} to="search-hotels" href="/" onClick={() => {
      dispatch(fetchHotelList());}}>Search</Link>
    {/* <Button variant="contained" size="large" className={style.searchBtn}  onClick={() => {
      // dispatch(fetchHotelList()),
      navigate('HotelList');
    
    }}>
    Search
  </Button> */}
  </>
 
  )
}

export default SearchButton