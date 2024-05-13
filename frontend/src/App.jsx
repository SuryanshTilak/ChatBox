import "./App.css"
// import Login from "./pages/login/Login.jsx";
// import  SignUp from "./pages/signup/SignUp.jsx";
import Home from "./pages/home/Home.jsx"
import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center ">
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/signup' element={<SignUp/>}/> */}
        {/* <Route path='/login' element={<Login/>}/> */}
      </Routes >
    </div>
  );
} 
