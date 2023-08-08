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
    <div>
        <form onSubmit={handleformS} >
            <input type='email' name='email'
            value={email}
             onChange={(e)=>setEmail(e.target.value)}
            />
            <input type='text' name='password' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <input type='submit' />
        </form>
    </div>
  )
}

export default Signin