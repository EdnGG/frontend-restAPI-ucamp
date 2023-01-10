import React, { useContext } from 'react'
import {UserContext} from '../context/UserContext'

const Main = () => {
  const { user } = useContext(UserContext)
  return (
    <div>Usuario : { user.username } { user.email }</div>
  )
}

export default Main