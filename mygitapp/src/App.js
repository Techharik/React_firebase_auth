import React, { useState } from "react";
import myContext from "./context/context";
//router:
import { BrowserRouter as Router,Routes,Route ,Link} from "react-router-dom";
//components
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import './input.css'

import { initializeApp } from "firebase/app";

import firebaseConfig from './config/config'

console.log(firebaseConfig)

const app = initializeApp(firebaseConfig);


function App() {
  const [user,setUser] = useState(null)

  return (
    <>
  


  <myContext.Provider value={{user, setUser}}>


<Router>

<div className='bg-violet-300 py-12 px-8 font-bold text-orange-800 flex justify-between'>
      <h1>Github</h1>
      < ul className='flex justify-between'>
        <li className='pr-3'>
         <Link to='/signin'>SignIn</Link>
        </li>
        <li>
         <Link to='/signup'>SignUp</Link>
        </li>
      </ul>
    </div>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        </Router>
        </myContext.Provider>

</>
  );
}

export default App;
 