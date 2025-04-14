import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams() //its hook used to access dat form params
  return (
    <div>User:{userid}</div>
  )
}

export default User