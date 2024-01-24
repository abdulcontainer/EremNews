import { useEffect, useState } from 'react';
import styles from './FirstTask.module.css';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import SelectedUsers from './SelectedUsers/SelectedUsers';

const FirstTask = () => {
  const [data, setData] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([])
  const [showSelectedUsers, setShowSelectedUsers] = useState(false)

  // Call api during first rendering
  useEffect(() => {
    fetchApiData()
  },[])

  // capi call function
  const fetchApiData = async () => {
    const apiData = await fetch('https://mocki.io/v1/5e69f4ae-8cbe-4a82-9ac4-25a5bf6f1f44').then(response => response.json())
    setData(apiData)
  }

  // handle Click function
  const handleClick = () => {
    if(showSelectedUsers) {
      setShowSelectedUsers(false)
      setSelectedUsers([])
    } else {
      setShowSelectedUsers(true)
    }
  }
  
  return (
    <div className={styles.firstContainer}>
      
      <h1>Multi Select List</h1>
      
      <FormControl>
        <InputLabel id="multi-select-label">Select Users</InputLabel>
        <Select
          labelId="multi-select-label"
          multiple
          value={selectedUsers}
          label="Select Users"
          onChange={(e) => setSelectedUsers(e.target.value)}
        >
          {data?.map((item, index) => (
            <MenuItem
              key={index} 
              value={item}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <Button 
        variant="outlined"
        color="secondary"
        onClick={handleClick}
        disabled={selectedUsers.length == 0}
      >
        {showSelectedUsers ? 
          'Hide Selected Users' 
          : 
          'Show Selected Users'
        }
      </Button>

      { showSelectedUsers &&
        <SelectedUsers
          selectedUsers={selectedUsers}
        />
      }
    </div>
  )
}

export default FirstTask