import "./App.css"


import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home.jsx";
import { SignUp } from "./Pages/Signup/SignUp.jsx";
import { Login } from "./Pages/Login/Login.jsx";
import {Toaster} from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext.jsx";


export default function App() {
  const {authUser}=useAuthContext()
  return (
    <div className="p-4 h-screen flex items-center justify-center ">
      
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to='/login' />}/>
        <Route path='/signup' element={ authUser ? <Navigate to='/' /> : <SignUp/> }/>
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login/>}/>
      </Routes >
      <Toaster />
    </div>
  );
} 
