import "./App.css"
import Home from "./Pages/Home/Home"

import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center ">
      <Home/>
      {/* <Routes>
        <Route path='/' element={}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes > */}
    </div>
  );
} 
