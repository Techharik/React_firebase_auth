import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'

function Repository({url}) {
  const [repos,setRepo] =useState([])
 console.log(url)
 async function fetchRepo(){
    const {data} =await Axios.get(url)
    setRepo(data)
 }

 useEffect(() => {
    fetchRepo()
   
 },[])
console.log(']',repos)

  return (
    <div>
        {
            repos.length != 0 ?
            <>
            {
                repos.map((repo)=>{
                    return <div key={repo.id}>
                        <h1 >
                            <a href={repo.url}>
                              {repo.url}
                            </a>
                           </h1>
                      <h1>{repo.name}</h1>
                    </div>
                })
            }
            </> : null
        }
    </div>
  )
}

export default Repository