import React, { useEffect } from 'react'
import { useNavigate } from "react-router";

export default function Home({socket}) {
  const navigate = useNavigate();

  useEffect(() => {
    const mensajeHome = (msj) => {
      console.log('El servidor dice, ', msj)
    }
    socket.on('mensaje', mensajeHome) 

    return () => {
      socket.off("mensaje", mensajeHome);
    };

  }, [])

  const crearSala = () => {
    const roomId = Math.random().toString(36).substr(2, 9);
    navigate(`/room/${roomId}`);
  };

  return (
    <div className='w-full min-h-lvh flex justify-center items-center bg-slate-500 flex-col'>
      <h1>Juego en línea</h1>
      <button onClick={crearSala}>Crear sala</button>
    </div>
  );
}