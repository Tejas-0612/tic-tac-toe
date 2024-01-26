import React from 'react'
import Tile from './Tile'
import '../App.css'

const Board = ({ tiles, onTileClick, playerTurn}) => {
  return (
    <div className='grid grid-cols-3 grid-rows-3 cursor-pointer relative'>
      <Tile playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        style="right-border bottom-border"
      />
      <Tile playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        style="right-border bottom-border"
      />
      <Tile playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        style=" bottom-border"
      />
      <Tile playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        style="right-border bottom-border"
      />
      <Tile playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        style="right-border bottom-border"
      />
      <Tile playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        style=" bottom-border"
      />
      <Tile playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        style="right-border "
      />
      <Tile playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        style="right-border"
      />
      <Tile playerTurn={playerTurn}
        onClick={() => onTileClick(8)}
        value={tiles[8]}
        style=""
      />
    </div>
  )
}

export default Board
