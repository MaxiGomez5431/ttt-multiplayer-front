import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router";

export default function useConnection({socket}) {
  const [players, setPlayers] = useState([]);
  const { roomId } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    socket.emit("joinRoom", roomId);

    const mensajeRoom = (msj) => {
      console.log('El servidor dice, ', msj)
    }
    socket.on('mensaje', mensajeRoom)

    const updatePlayersRoom = (players) => {
      setPlayers(players);
    }
    socket.on("updatePlayers", updatePlayersRoom);

    const roomFullRoom = () => {
      console.log("roomFull ejecutado")
      alert("La sala está llena.");
      navigate("/");
    }
    socket.on("roomFull", roomFullRoom);

  
    return () => {
      socket.off("updatePlayers", updatePlayersRoom);
      socket.off("roomFull", roomFullRoom);
    };
  }, []);
  

  return {players, roomId}
}