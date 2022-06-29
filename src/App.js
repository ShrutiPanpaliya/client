import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Chat from "./Chat";
import UR from "./UR";
export default function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UR" element={<UR />} />
        <Route path="/Chat" element={<Chat />} />
        
        
      
        
        
        
        
      </Routes>
    </BrowserRouter>
    
    
  );
}