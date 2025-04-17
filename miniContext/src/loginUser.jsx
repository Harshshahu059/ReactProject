import React from 'react'
import { useContext } from 'react'
import UserContext from './context/userContext'
import { useState } from 'react'
// import './App.css'

function LoginUser() {
    let {user,setuser,setemail}=useContext(UserContext)
    const [username, setusername] = useState(null)
    const [useremail, setuseremail] = useState(null)
        
    const handelData=(e)=>{
       e.preventDefault();
       setuser(username)  
       setemail(useremail)  
    }

  return (
    <form onSubmit={handelData}>
        <input
        type="text"
         placeholder='Enter user name'  
         value={username}  
        onChange={(e)=>setusername(e.target.value)}
        />
        <input 
         type="email"
         className='input'
         placeholder='Enter user name'  
         value={useremail}  
         onChange={(e)=>setuseremail(e.target.value)}         
         />
        <button type='submit'  >Submit</button>
    </form>
  )
}

export default LoginUser