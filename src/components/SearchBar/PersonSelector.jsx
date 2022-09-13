import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import styles  from './PersonSelector.module.css'
export const PersonSelector = () => {
  const [adult, setAdult] = useState();
  const [child, setChild] = useState();

  function handleAdultChange(event) {
    setAdult(event.target.value);
  }
  function handleChildChange(event) {
    setChild(event.target.value);
  }
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
      <FormControl  fullWidth className={styles.Inp}>
        <InputLabel id="demo-simple-select-label">Child</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={child}
          label="Child"
          onChange={handleChildChange}
        >
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
