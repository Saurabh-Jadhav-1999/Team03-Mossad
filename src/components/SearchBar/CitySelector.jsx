import { Autocomplete, TextField } from "@mui/material";
import { React } from "react";
import styles from "./CitySelector.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCityList, setLocation } from "../../slices/searchSlice";
import { useState } from "react";

function CitySelector() {
  const dispatch = useDispatch();
  const city = useSelector(state => state.search.location);
  const citylist = useSelector((state) => state.search.citylist);
  const [value, setValue] = useState("");

  return (
    <>
      <Autocomplete
        className={styles.selectInp}
        id="city"
        freeSolo
        value={value}
        options={
          citylist
            .map((option) => option)
        }
        onChange={(e, option) => {
          dispatch(setLocation(option));
          setValue(option)
        }}
        // getOptionLabel={(e)=>{
        //        console.log(e,"frojm get option label")
        // }}
        renderInput={(params) => (
          <TextField
            value={value}
            className={styles.txtfld1}
            {...params}
            label="Location"
            placeholder="Where do you want to go?"
            onChange={(e) => {

              dispatch(fetchCityList(e.target.value));
            }}


          />
        )
        }
      />
    </>
  );
}

export default CitySelector;
