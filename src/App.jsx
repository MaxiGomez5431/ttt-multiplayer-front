import React from 'react'
import Game from "./components/Game";
import Home from './components/Home';
import Test from './components/test';
import { BrowserRouter, Routes, Route } from "react-router";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home socket={socket} />} />
        <Route path="/room/:roomId" element={<Game socket={socket} />} />
        <Route path="/test" element={<Test  />} />
      </Routes>
    </BrowserRouter>
    
  );
}
export default App
