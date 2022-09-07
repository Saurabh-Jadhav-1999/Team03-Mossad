import { Button } from '@mui/material'
import React from 'react'
import style from './SearchButton.module.css'
function SearchButton() {
  return (
    <Button variant="contained" className={style.searchBtn}>
    Search
  </Button>
  )
}

export default SearchButton