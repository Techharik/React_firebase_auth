import React, { useContext, useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import myContext from '../context/context'
import Axios from 'axios'
import Repository from './repository'


function Home() {
  const context = useContext(myContext)
  const [gituser,setGituser] =useState('')
  const [info,setInfo] =useState([])

const fetchUser = async ()=>{
    const {data} =await Axios.get(`https://api.github.com/users/${gituser}`)
    setInfo(data)
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

        {info.length != 0 ?
         <div className='flex'>
        <img src={info.avatar_url}/>
        <div>
          <Repository url={info.repos_url} />
        </div>
        </div>:null

}
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