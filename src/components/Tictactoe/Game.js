import { useEffect, useState, useRef } from "react";
import Board from "./Board";
import ReplayIcon from '@mui/icons-material/Replay';
import "./Game.css"

function Game() {


  const [playerTurn, setPlayerTurn] = useState("");

  const [moveCount, setMoveCount] = useState(null);

  const [boardState, setBoardState] = useState(Array(9).fill(""));

  const [gameStatus, setGameStatus] = useState("In Progress")

 


 


  function checkWin(board){
    

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if(board[a] === board[b] && board[a] === board[c] && board[a]=== "X"){

        setGameStatus("X Wins!");
      }
      else if(board[a] === board[b] &&  board[a] === board[c] && board[a]=== "O"){
        setGameStatus("O Wins!");
      }
      else if(moveCount>7){
        setGameStatus("Draw!")
      }     
    }
    return null
  }


  function clickHandler(index) {
    const currentBoard = [...boardState];
    

        setMoveCount(moveCount+1);

        if (playerTurn === "X") {
          currentBoard[index] = "X";
          setPlayerTurn("O");
        } else {
          currentBoard[index] = "O";
          setPlayerTurn("X");
        }
        setBoardState(currentBoard);

        checkWin(currentBoard);
    
 
      
    }

    function resetHandler() {
      
      setBoardState(Array(9).fill(""));
      setGameStatus("In Progress");
      setPlayerTurn("");
  
      setMoveCount(null);
        
      }

   
  

  return (
    <div className="game-layout">
     <div className="game-status"> {gameStatus}</div>
     
        
      <Board gameBoard={boardState} onClick={clickHandler} />
      <button className="reset-button" onClick={resetHandler}><ReplayIcon/></button>
    </div>
  );
}

export default Game;
