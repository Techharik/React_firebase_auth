import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import myContext from '../context/context'
import Axios from 'axios'


function Home() {
  const context = useContext(myContext)
  const [gituser,setGituser] =useState([])


const fetchUser = async ()=>{
    const {data} =await Axios.get(`https://api.github.com/users/${gituser}`)
    console.log(data)
}


  return (
    <>
      {
        context.user ? <>
       
          <input type="text" className='border  border-2 w-64 border-slate-900 bg-green-100'
          value={gituser} 
          onChange={(e)=>setGituser(e.target.value)}
          
          />
          <button onClick={fetchUser}>Fetch</button>
        </>
        
        
        
        
        
        : 
        
        <div className='flex justify-center py-6'>
        <button className='bg-blue-700 px-6 py-2 rounded '>
         
          <Link to='/signin'>SignIn</Link>
        </button>
        </div>
      }
    </>

  )
}

export default Home