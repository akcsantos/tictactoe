import { useState } from "react";
import styles from "./gameboard.module.css";
import Square from "./Square";

export default function Gameboard() {
  const [value, setValue] = useState(null);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("Player One");

  function squareClick(i) {
    const nextSquares = squares.slice();
    if (nextSquares[i] || checkWinner(squares)) {
      return;
    }
    if (playerTurn) {
      nextSquares[i] = "X";
      setCurrentPlayer("Player Two");
    } else {
      nextSquares[i] = "O";
      setCurrentPlayer("Player One");
    }
    setPlayerTurn(!playerTurn);
    setSquares(nextSquares);
  }

  function checkWinner(squares) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
  }

  const gameEnd = checkWinner(squares);
  let winner;
  if (gameEnd) {
    winner = "Winner" + currentPlayer;
  }
  console.log(winner);

  return (
    <div className={styles.gameboard}>
      <div className={styles.currentPlayer}>Current Player:</div>
      <div className={styles.layout}>
        <Square value={squares[0]} squareClick={() => squareClick(0)} />
        <Square value={squares[1]} squareClick={() => squareClick(1)} />
        <Square value={squares[2]} squareClick={() => squareClick(2)} />
        <Square value={squares[3]} squareClick={() => squareClick(3)} />
        <Square value={squares[4]} squareClick={() => squareClick(4)} />
        <Square value={squares[5]} squareClick={() => squareClick(5)} />
        <Square value={squares[6]} squareClick={() => squareClick(6)} />
        <Square value={squares[7]} squareClick={() => squareClick(7)} />
        <Square value={squares[8]} squareClick={() => squareClick(8)} />
      </div>
    </div>
  );
}
