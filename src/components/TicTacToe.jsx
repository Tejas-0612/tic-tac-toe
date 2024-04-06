import React, { useEffect, useState } from "react";
import Board from "./Board";
import { GameState, winningCombinations } from "../Helper";
import Result from "./Result";
import PlayAgain from "./PlayAgain";
import TileClickSound from "../sounds/TileMoveSound.wav";
import GameOverSound from "../sounds/GameOverSound.Wav";

const gameOverSound = new Audio(GameOverSound);
gameOverSound.volume = 0.2;
const clickSound = new Audio(TileClickSound);
clickSound.volume = 0.5;

const PLAYER_X = "X";
const PLAYER_O = "O";

function checkWinner(tiles, setStrikeClass, setGameState) {
  for (const { combo, strikeClass } of winningCombinations) {
    const titlevalue1 = tiles[combo[0]];
    const titlevalue2 = tiles[combo[1]];
    const titlevalue3 = tiles[combo[2]];

    if (
      titlevalue1 != null &&
      titlevalue1 === titlevalue2 &&
      titlevalue1 === titlevalue3
    ) {
      setStrikeClass(strikeClass);
      if (titlevalue1 === PLAYER_X) {
        setGameState(GameState.playerXWins);
      } else {
        setGameState(GameState.playerOWins);
      }
      return;
    }
  }

  const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
  if (areAllTilesFilledIn) {
    setGameState(GameState.draw);
  }
}

const TicTacToe = () => {
  const [tiles, SetTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  const handleTileClick = (index) => {
    if (gameState != GameState.inProgress) {
      return;
    }

    if (tiles[index] != null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    SetTiles(newTiles);

    if (playerTurn == PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  const handleReset = () => {
    setGameState(GameState.inProgress);
    SetTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  useEffect(() => {
    if (tiles.some((tile) => tile != null)) {
      clickSound.play();
    }
  }, [tiles]);

  useEffect(() => {
    if (gameState != GameState.inProgress) {
      gameOverSound.play();
    }
  }, [gameState]);

  return (
    <div className="text-white text-center">
      <h1 className="text-4xl pt-8 text-center font-semibold md:font-bold mb-8">
        {" "}
        Tic Tac Toe{" "}
      </h1>

      <Board
        playerTurn={playerTurn}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />

      <Result gamestate={gameState} />

      <PlayAgain gameState={gameState} onReset={handleReset} />
    </div>
  );
};

export default TicTacToe;
