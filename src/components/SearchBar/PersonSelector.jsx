import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./PersonSelector.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setAdultCount, setChildCount } from "../../slices/searchSlice";
import arrow from '../../assets/images/ArrowImg.png'

export const PersonSelector = () => {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const adultcount = useSelector(state => state.search.totalAdult);
  const childcount = useSelector(state => state.search.totalChild);
  const dispatch = useDispatch();
  function handleAdultChange(event) {
    dispatch(setAdultCount(event.target.value));
    setAdult(event.target.value);
  }
  function handleChildChange(event) {
    dispatch(setChildCount(event.target.value));
    setChild(event.target.value);
  }
  useEffect(() => {
    setAdult(adultcount);
    setChild(childcount);
  }, [adultcount, childcount])
  return (
    <Box className={styles.selectBox}>
      <FormControl fullWidth className={styles.Inp}>
        <InputLabel id="demo-simple-select-label">Adult</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={adult}
          label="Adult"
          onChange={handleAdultChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth className={styles.Inp}>
        <InputLabel id="demo-simple-select-label">Child</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={child}
          label="Child"
          onChange={handleChildChange}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
