import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
const data =useLoaderData()
    // const [data, setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/codeTukai')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center  m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img className='p-2 text-align:center' src={data.avatar_url} alt="Github picture" width={300}/>
    
    </div>

  )
}

export default Github

export const githubDataLoader = async () => {
   const response = await fetch('https://api.github.com/users/codeTukai')
   return response.json()
} 