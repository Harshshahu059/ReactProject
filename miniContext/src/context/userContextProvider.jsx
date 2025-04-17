import React from 'react'
import { useState } from 'react'
import UserContext from './userContext';

const UserContextProvider=({children})=>{
    const [user,setuser]=useState(null);
    const [email, setemail] = useState(null)
   return(
    <UserContext.Provider value={{user,setuser,email,setemail}}>
        {children}
    </UserContext.Provider>
   )
}
export default UserContextProvider