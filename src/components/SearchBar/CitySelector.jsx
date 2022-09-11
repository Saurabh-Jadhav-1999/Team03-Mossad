import { Autocomplete, TextField } from "@mui/material";
import { React, useState } from "react";
import style from "./CitySelector.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCityList, setLocation } from "./../../slices/searchSlice";
const cities = [{ name: "Pune" }, { name: "Mumbai" }, { name: "Jaipur" }];

function CitySelector() {
  const dispatch = useDispatch();
  // const[location,setLocation]=useState();
const citylist=useSelector((state)=>state.search.citylist)
const location=useSelector((state)=>state.search.location);
  return (
    <>
   
      <Autocomplete
        className={style.selectInp}
        id="city"
        freeSolo
        options={
          citylist.map((option) => option)
        }
        renderInput={(params) => (
          <TextField
            className={style.txtfld1}
            {...params}
            label="Location"
            placeholder="Where do you want to go?"
            onChange={(e) => {
              // dispatch(setLocation({ location: e.target.value }));
             console.log(e.target.value,"clg from fetchcitylist dispatch")
              dispatch(fetchCityList(e.target.value)).then((e)=> console.log(location,"from slice loaction"));
             
            }}
          />
         )} 
       /> 
    </>
  );
}

export default CitySelector;
