import React, { useCallback, useState } from 'react'
import type { UsersType } from '../redux/setUsersSlice/setUsersType'
import { deleteOneUser, editUsers } from '../redux/setUsersSlice/setUsersSlice'
import { useAppDispatch } from '../redux/hooks'

type OneUserPageProps = {
    user: UsersType
}

export default function OneUserPage({ user }: OneUserPageProps): JSX.Element {
  const [click, setClick] = useState(false)
  const [email, setEmail] = useState(user?.email === undefined ? user?.user?.email : user?.email)
  const [name, setName] = useState(user?.name === undefined ? user?.user?.name : user?.name)
  const [lastName, setLastName] = useState(user?.lastName === undefined ? user?.user?.lastName : user?.lastName)
  const changeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  }, []);
  const changeNameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  }, []);
  const changeLastNameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setLastName(e.target.value);
  }, []);
  const dispatch = useAppDispatch()
  return (
    <div className="col-3">
    <div className="card" style={{ width: '18rem' }}>
  <div className="card-body">
   {!click ? 
    <h5 className="card-title">{name}</h5>
    : 
    <input onChange={changeNameHandler} value={name} type="text" placeholder={name}  />}
    {!click ? 
    <h5 className="card-title">{lastName}</h5>
    : 
    <input onChange={changeLastNameHandler} value={lastName} type="text" placeholder={lastName}  />}
    <h6 className="card-subtitle mb-2 text-muted">{(user?.access === undefined ? user?.user?.access : user?.access) === true ? 'Have access' : "Haven't access"}</h6>
    {!click ? 
    <p className="card-text">{`Email: ${email}`}</p> 
    : 
    <input onChange={changeHandler} value={email} type="text" placeholder={email}  />}
    <p className="card-text">{`Date: ${user?.birthDate === undefined ? user?.user?.birthDate : user?.birthDate}`}</p>
    <button className="btn btn-primary" type='button'  onClick={() => {
              if (click) {
                dispatch(editUsers(user?.id === undefined ? user?.user.id : user?.id, email, name, lastName));
              }
              setClick(!click);
            }} >Edit</button>
    <button className="btn btn-primary" type='button' onClick={() => { dispatch(deleteOneUser(user?.id === undefined ? user?.user?.id : user?.id))}}>Delete</button>
  </div>
</div>
</div>
  )
}
