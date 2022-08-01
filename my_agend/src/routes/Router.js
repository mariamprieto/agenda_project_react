import React from "react"
import {
    BrowserRouter,
    Routes,
     Route,
     
  
  } from "react-router-dom";
import NavBar from "../components/navBar";
  import App from "../container/App";
import EditContact from "../container/EditContact";
  import NewContact from "../container/NewContact"

const Router =() => {
    return(
        <BrowserRouter>
            <NavBar />
           <Routes >
          
           <Route  exact path="/" element={<App />} />
           <Route  exact path="/New" element={<NewContact />} />
           <Route  exact path="/edit/:id" element={<EditContact />} />


           </Routes>
            
            
       
        </BrowserRouter>
    )
   }
    
export default Router;