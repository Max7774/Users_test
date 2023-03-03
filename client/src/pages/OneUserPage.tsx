import React from 'react'
import type { UsersType } from '../redux/setUsersSlice/setUsersType'

type OneUserPageProps = {
    user: UsersType
}

export default function OneUserPage({ user }: OneUserPageProps): JSX.Element {
  return (
    <div className="col-3">
    <div className="card" style={{ width: '18rem' }}>
  <div className="card-body">
    <h5 className="card-title">{`${user.name} ${user.lastName}`}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{user.access === true ? 'Have access' : "Haven't access"}</h6>
    <p className="card-text">{`Email: ${user.email}`}</p>
    <p className="card-text">{`Date: ${user.birthDate}`}</p>
    <button type='button' >Edit</button>
    <button type='button' >Delete</button>
  </div>
</div>
</div>
  )
}
