import React, { useState } from 'react'
import Board from './Board'
import { GameState, winningCombinations } from '../Helper';
import Result from './Result';

const PLAYER_X = "X";
const PLAYER_O = "O";

const TicTacToe = () => {
  const [tiles,SetTiles]=useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [gameState, setGameState] = useState(GameState.inProgress);

  const handleTileClick=(index)=>{
    if(tiles[index]!=null){
      return;
    }
    const newTiles=[...tiles];
    newTiles[index]=playerTurn;
    SetTiles(newTiles);
    if(playerTurn==PLAYER_X)
    {
      setPlayerTurn(PLAYER_O);
    }else{
      setPlayerTurn(PLAYER_X);
    }

  }

  return (
    <div>
    <h1 className='text-4xl pt-8 text-center font-bold text-white mb-4'> Tic Tac Toe </h1>
    <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick}/>
    <Result gamestate={gameState} />
    </div>
  )
}

export default TicTacToe
