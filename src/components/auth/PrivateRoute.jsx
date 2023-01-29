import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { Navigate, Outlet } from 'react-router-dom'


export default function PrivateRoute() {
  const userCtx = useContext(UserContext)

  const { authStatus, verifyingToken } = userCtx

  useEffect(() => {
    verifyingToken()
  }, [])

  return authStatus ? <Outlet /> : <Navigate to="/login" replace/>
}

