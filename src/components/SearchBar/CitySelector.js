import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import style from './CitySelector.module.css'

const cities = [{ name: "Pune" }, { name: "Mumbei" }, { name: "Jauipur" }];

function CitySelector() {
  return (
    <>
      <Autocomplete
      className={style.selectInp}
        id="city"
        freeSolo
        options={cities.map((option) => option.name)}
        renderInput={(params) => <TextField {...params} label="Location" />}
      />

    </>
  );
}

export default CitySelector;
