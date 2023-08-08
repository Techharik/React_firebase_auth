import React, { useState } from "react";
import myContext from "./context/context";
//router:
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
//components
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";


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
 