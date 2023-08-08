import React, { useState } from "react";
import myContext from "./context/context";

//components
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";

//firebase:
import { initializeApp } from "firebase/app";

// toastify:
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css;'

//router:
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  const [user,setUser] = useState(null)
  return (
    <>
  


<Router>

  <ToastContainer />
 
    <myContext.Provider value={{user,setUser}} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/*" element={<PageNotFound />}/>
        </Routes>
    <myContext.Provider /> 
</Router>
</>
  );
}

export default App;
 