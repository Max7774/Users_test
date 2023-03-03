import React, { useEffect, useState } from 'react'
import OneUserPage from '../pages/OneUserPage'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setAllUsersPage } from '../redux/setUsersSlice/setUsersSlice'

export default function SetUsersPage(): JSX.Element {
  const [page, setPage] = useState(1)
  const pageHandler = (num: number): void => {
    setPage(num)
  }
  const users = useAppSelector((store) => store.users.users)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setAllUsersPage(page))
  }, [page])
  return (
    <>
     <div className="container text-center">
        <div className="row">
        {users.map((user) => <OneUserPage key={user.id} user={user}/>)}
        </div>
     </div>
     <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item"><button type='button' onClick={() => pageHandler(1)}>1</button></li>
      <li className="page-item"><button type='button' onClick={() => pageHandler(2)}>2</button></li>
    </ul>
  </nav>
    </>
  )
}
