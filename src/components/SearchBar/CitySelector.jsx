import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import style from './CitySelector.module.css'

const cities = [{ name: "Pune" }, { name: "Mumbai" }, { name: "Jaipur" }];

function CitySelector() {
  return (
    <>
      <Autocomplete
      className={style.selectInp}
        id="city"
        freeSolo
        options={cities.map((option) => option.name)}
        renderInput={(params) => <TextField {...params} label="Location" placeholder="Where do you want to go?"/>}
      />

    </>
  );
}

export default CitySelector;
