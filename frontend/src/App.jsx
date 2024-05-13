import "./App.css"


import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home.jsx";
import { SignUp } from "./Pages/Signup/SignUp.jsx";
import { Login } from "./Pages/Login/Login.jsx";


export default function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center ">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes >
    </div>
  );
} 
