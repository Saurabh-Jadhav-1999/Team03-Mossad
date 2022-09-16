import { Autocomplete, TextField } from "@mui/material";
import { React} from "react";
import styles from "./CitySelector.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCityList } from "./../../slices/searchSlice";

function CitySelector() {
  const dispatch = useDispatch();
  const city = useSelector(state => state.search.location);
  const citylist = useSelector((state) => state.search.citylist);

  return (
    <>
      <Autocomplete
        className={styles.selectInp}
        id="city"
        freeSolo
        options={
          citylist.map((option) => option)
        }
        renderInput={(params) => (
          <TextField
            className={styles.txtfld1}
            {...params}
            value={city}
            label="Location"
            placeholder="Where do you want to go?"
            onChange={(e) => {
              dispatch(fetchCityList(e.target.value));
            }}
          />
        )}
      />
    </>
  );
}

export default CitySelector;
