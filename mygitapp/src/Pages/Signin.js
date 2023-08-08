import React,{useContext,useState,useEffect} from 'react'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import myContext from '../context/context';

import { useNavigate } from 'react-router-dom';




function Signin() {
    const context = useContext(myContext)
    
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate()

       console.log(email,password)

    function signInUser(){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            context.setUser({ email: userCredential.user.email ,uid:userCredential.user.uid})
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }


    function handleformS(e){
       e.preventDefault()
       signInUser()
    }

    useEffect(() => {
        if(context.user?.uid){
          console.log('welcome ' + context.user.email)
            return navigate("/");
        }
      }, [context]);

   

    return (
    <div className='flex justify-center py-12'>
        <form onSubmit={handleformS} className='flex flex-col '>
            <input type='email' name='email' className='border  border-2 w-64 border-slate-900 bg-green-100'
            value={email}
             onChange={(e)=>setEmail(e.target.value)}
            />
            <input type='text' name='password' className='border border-2 w-64 border-slate-900 bg-green-100 my-2' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <input type='submit' value='Signin'/>
        </form>
    </div>
  )
}

export default Signin