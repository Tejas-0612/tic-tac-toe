import React from 'react'
import { GameState } from '../Helper';



const Result=({gamestate})=>{
console.log(gamestate)
  return (
    gamestate !=3 ? (
      <div className='text-2xl font-semibold border-8 border-dotted border-blue-500 p-4 md:p-5 mt-8 md:mt-12'>
        <Result1 gameState={gamestate} />
      </div>
    ) : null
   )
}

const Result1 = ({gameState}) => {
  switch (gameState) {
    case GameState.inProgress:
      return <div className='text-white'></div>;
    case GameState.playerOWins:
      return <div className="game-over">O Wins</div>;
    case GameState.playerXWins:
      return <div className="game-over">X Wins</div>;
    case GameState.draw:
      return <div className="game-over">Draw</div>;
    default:
      return <></>;
  }
  
}

export default Result
