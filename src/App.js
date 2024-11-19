import Header from "./components/header";
import Card from "./components/card";
import Todocontainer from "./components/todocontainer";
import Landing from "./pages/landing";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App()
{
  const [users,setusers]=useState(
    [
      {
        username:"sri",
        password:"123"
      },
      {
        username:"vasu",
        password:"897"
      }
    ]
  )
  return(
    <div>
  <BrowserRouter>
  <Routes>
   <Route path = '/' element={<Login users={users} setusers={setusers}/>}></Route>
   <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
   <Route path='/landing' element={<Landing></Landing>}></Route>
 
  </Routes>
  </BrowserRouter>
  </div>
  
  )
  
}

export default App;
