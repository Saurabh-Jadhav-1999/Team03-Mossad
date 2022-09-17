import { Autocomplete, TextField } from "@mui/material";
import { React, useEffect } from "react";
import styles from "./CitySelector.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCityList, setLocation } from "../../slices/searchSlice";
import { useState } from "react";

function CitySelector() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.search.location);
  const citylist = useSelector((state) => state.search.citylist);
  const [value, setValue] = useState("");

  const status = useSelector((state) => state.search.status1);

  useEffect(() => {
    setValue(city);
  }, [status]);

  return (
    <>
      <Autocomplete
        className={styles.selectInp}
        id="city"
        freeSolo={false}
        value={value}
        options={citylist.map((option) => option)}
        noOptionsText={"City Not Found"}
        onChange={(e, option) => {
          dispatch(setLocation(option));
          setValue(option)
        }}
        getOptionLabel={(option) => typeof option === 'string'
          || option instanceof String ? option : ""}
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
