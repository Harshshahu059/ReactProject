import React, { useContext } from 'react'
import UserContext from './context/userContext'

function UserProfile() {
    const {user,email}=useContext(UserContext)
    if(!user||!email) return(<div>Please login !!</div>)
  return (
<div>
    <h1>User name is :{user}</h1>
    <h1>User email is :{email}</h1>
</div>
)
}

export default UserProfile