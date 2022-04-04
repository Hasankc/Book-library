import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";


import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Authenticated from "./components/Authenticated";





function App() {
 
  return (
    <div className='App'>
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/login' element={<Login />} />
       <Route path='/profile' element={<Authenticated><Profile /></Authenticated>} />
     </Routes>
    </div>
  );


export default App
