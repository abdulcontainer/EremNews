import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@mui/material';
import styles from './Second.module.css'

const Second = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState()

  useEffect(() => {
    fetchApiData()
  },[])

  // APi function to get data
  const fetchApiData = async () => {
    const apiData = await fetch('https://mocki.io/v1/54fc663d-6519-48ff-b2e0-1acb5e597bf0').then(response => response.json())
    let data = [...new Set(apiData?.data)];
    setData(data)
  }  

  return (
    <div className={styles.secondContainer}>
      <h1>Auto Complete</h1>
      <Autocomplete
        disablePortal
        options={data}
        sx={{ width: 300 }}
        onChange={(e,value) => setSearch(value)}
        renderInput={(params) => <TextField {...params} label="Search User" />}
      />
      {search && <p>Search Value is: {search}</p>}
    </div>
  )
}

export default Second