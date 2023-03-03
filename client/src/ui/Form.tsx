import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../redux/hooks';
import type { User } from '../redux/setUsersSlice/setUsersType';
import { addOneUser } from '../redux/setUsersSlice/setUsersSlice';

export default function Form(): JSX.Element {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<User>({ id: '', access: false, name: '', lastName: '', birthDate: '', email: '' });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <form>
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={7}>
      <h1>Write user</h1>
      <TextField
        id="titleId"
        onChange={changeHandler}
        value={input.name}
        name="name"
        type="text"
        label="Name"
        variant="standard"
      />
      <TextField
        id="bodyId"
        onChange={changeHandler}
        value={input.lastName}
        name="lastName"
        type="text"
        label="Last Name"
        variant="standard"
      />
      <TextField
        id="bodyId"
        onChange={changeHandler}
        value={input.birthDate}
        name="birthDate"
        type="text"
        label="birthDate"
        variant="standard"
      />
      <TextField
        id="bodyId"
        onChange={changeHandler}
        value={input.email}
        name="email"
        type="text"
        label="email"
        variant="standard"
      />
      <Button
        variant="contained"
        type="submit"
        disableElevation
        onClick={(e) => {
          e.preventDefault();
          dispatch(addOneUser(input));
        }}
      >
        Add user
      </Button>
    </Stack>
  </form>
  )
}
