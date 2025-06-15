import React, { useEffect } from 'react'
import { useNavigate } from "react-router";
import WaveText from './WaveText';
import MovingBackground from './MovingBackground';

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
    
    <MovingBackground>
      <div className='flex flex-col items-center gap-4 bg-white border-2 rounded-lg shadow-[10px_10px_0px_#000] sm:p-16 p-5 m-5'>
        
        <WaveText/>

        <div className='flex flex-col gap-4 items-center animate-fade-in-scale'>
          <input
            type="text"
            placeholder="Ingresa tu nombre..."
            className="w-full max-w-sm px-4 py-2 border-2 border-black rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
          
          <div className='flex gap-4'>
            <MenuButton onClick={crearSala}>
              Crear sala
            </MenuButton>
            <MenuButton  >
              Unirse a sala
            </MenuButton>
          </div>

        </div>

      </div>
    </MovingBackground>
  );
}

function MenuButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className='bg-[#389DF9] text-white tracking-wider font-bold px-4 py-2 rounded border-2 border-black shadow-button active:shadow-button-active btn-active'
    >
      {children}
    </button>
  );
}