import { useState, useEffect } from 'react';
import { TURNS, winCombinations } from '../../public/constants';

export default function useGameLogic({socket}) {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.x)
  const [win, setWin] = useState(null)

  useEffect(() => {
    const emitBoard = (board) => {
      setBoard(board);
      checkWinner(board);
    }
    socket.on("emitBoard", emitBoard);
    
    const changeTurn = () => {
      setTurn(prevTurn => prevTurn === TURNS.o ? TURNS.x : TURNS.o);
    }
    socket.on("changeTurn", changeTurn);
  
    return () => {
      socket.off("emitBoard", emitBoard);
      socket.off("changeTurn", changeTurn);
    };
  }, []);
  
  const updateBoard = (index) => {
    const newBoard = [...board];
    if(!newBoard[index]){
      newBoard[index] = turn;
      socket.emit("updateBoard", newBoard)
    }
  }

  const playAgain = () => {
    setBoard(Array(9).fill(null))
    setWin(null)
  }

  function checkWinner(board) {

    const nullCount = board.filter(cell => cell === null).length;

    for (let combo of winCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWin(board[a])
        return
      }
    }

    if(nullCount === 0){
      setWin('tie')
    }

  }

  return {win, board, turn, updateBoard, playAgain}
}