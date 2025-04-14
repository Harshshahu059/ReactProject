import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitFollowes() {
    const data=useLoaderData()
    
  
 


  return (
    <div className='bg-gray-600 flex text-amber-50'>
        <img src={data?.avatar_url} className=' h-30 w-30' />
        Git Followers:{data?.followers}</div>    
  )
}

export default GitFollowes

export const getFollowers=async()=>{
    try {
        let response= await fetch('https://api.github.com/users/hiteshchoudhary');
        let responseJson=await response.json()
        return responseJson
    } catch (error) {
       return alert("Somthing went wrong! Check your internet connection")        
    }
}