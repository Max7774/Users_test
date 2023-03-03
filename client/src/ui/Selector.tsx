import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import type { SelectChangeEvent } from '@mui/material/Select';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import { useAppDispatch } from '../redux/hooks';
import { filterInUsers } from '../redux/setUsersSlice/setUsersSlice';

export default function Selector(): JSX.Element {
  const [selector, setSelector] = useState('');
  const handleChange = (event: SelectChangeEvent): void => {
    setSelector(event.target.value );
  };
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selector}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="name">Name is empty</MenuItem>
        <MenuItem value="email">Email is empty</MenuItem>
        <MenuItem value="lastName">LastName is empty</MenuItem>
        <MenuItem value="birthDate">BirthDate is empty</MenuItem>
      </Select>
      <Button
        variant="contained"
        type="submit"
        disableElevation
        onClick={() => {
          dispatch(filterInUsers(selector));
        }}
      >
        Filter
      </Button>
    </FormControl>
  </Box>
  )
}
